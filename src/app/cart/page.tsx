"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useCart } from "@/components/cart/CartProvider";

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clear } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [phone, setPhone] = useState("");

  const waLink = useMemo(() => {
    const lines = items
      .map((it) => `- ${it.name} (${it.unit}) × ${it.quantity} = ${it.price * it.quantity} ريال`)
      .join("\n");
    const header = `طلب جديد`;
    const typeLabel = orderType === "delivery" ? "توصيل" : "استلام";
    const addr = orderType === "delivery" ? (customerAddress || "") : "استلام من المتجر";
    const info = `نوع الطلب: ${typeLabel}\nالاسم: ${customerName || ""}\nرقم الهاتف: ${phone || ""}\nالعنوان: ${addr}`;
    const body = `${header}:\n${lines}\nالإجمالي: ${total} ريال\n\n${info}`;
    return `https://wa.me/966566166251?text=${encodeURIComponent(body)}`;
  }, [items, total, customerName, customerAddress, orderType, phone]);

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">السلة</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">سلتك فارغة حاليًا.</p>
        <Link href="/products" className="px-4 py-2 rounded-full bg-black text-white text-sm inline-block">تصفّح المنتجات</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">السلة</h1>
        <button onClick={clear} className="text-sm opacity-80 hover:opacity-100">تفريغ السلة</button>
      </header>

      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.slug} className="flex items-center gap-3 p-3 rounded-lg border border-black/10 dark:border-white/10">
            <div className="relative w-20 h-16 rounded overflow-hidden bg-black/5 dark:bg-white/5">
              {it.image && <Image src={it.image} alt={it.name} fill className="object-cover" />}
            </div>
            <div className="flex-1">
              <div className="font-medium">{it.name}</div>
              <div className="text-xs opacity-70">{it.price} ريال / {it.unit}</div>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor={`qty-${it.slug}`} className="sr-only">الكمية</label>
              <input
                id={`qty-${it.slug}`}
                aria-label="الكمية"
                title="الكمية"
                type="number"
                min={1}
                value={it.quantity}
                onChange={(e) => updateQuantity(it.slug, Math.max(1, Number(e.target.value)))}
                className="w-20 px-2 py-1 rounded border border-black/15 dark:border-white/20 bg-transparent"
              />
              <button onClick={() => removeItem(it.slug)} className="text-xs px-2 py-1 rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">حذف</button>
              <div className="w-24 text-right text-sm">{it.price * it.quantity} ريال</div>
            </div>
          </div>
        ))}
      </div>

      <section className="grid sm:grid-cols-2 gap-3 p-4 rounded-lg border border-amber-900/20 bg-white/60 dark:bg-white/5">
        <div className="flex flex-col gap-2">
          <span className="text-sm">نوع الطلب</span>
          <div className="flex items-center gap-4 text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="orderType"
                value="delivery"
                checked={orderType === "delivery"}
                onChange={() => setOrderType("delivery")}
              />
              <span>توصيل</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="orderType"
                value="pickup"
                checked={orderType === "pickup"}
                onChange={() => setOrderType("pickup")}
              />
              <span>استلام</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="customerName" className="text-sm">الاسم</label>
          <input
            id="customerName"
            aria-label="الاسم"
            title="الاسم"
            type="text"
            placeholder="اكتب اسمك الثلاثي"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="px-3 py-2 rounded border border-amber-900/30 bg-white/60 dark:bg-white/10 outline-none focus:ring-2 focus:ring-amber-800"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm">رقم الهاتف</label>
          <input
            id="phone"
            aria-label="رقم الهاتف"
            title="رقم الهاتف"
            type="tel"
            placeholder="مثال: 05xxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-3 py-2 rounded border border-amber-900/30 bg-white/60 dark:bg-white/10 outline-none focus:ring-2 focus:ring-amber-800"
          />
        </div>
        {orderType === "delivery" && (
          <div className="flex flex-col gap-1">
            <label htmlFor="customerAddress" className="text-sm">العنوان</label>
            <input
              id="customerAddress"
              aria-label="العنوان"
              title="العنوان"
              type="text"
              placeholder="مثال: المدينة - حي السلام - وصف مختصر للموقع"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="px-3 py-2 rounded border border-amber-900/30 bg-white/60 dark:bg-white/10 outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>
        )}
      </section>

      <div className="flex items-center justify-between p-4 rounded-lg border border-amber-900/20 bg-white/60 dark:bg-white/5">
        <div className="font-semibold">الإجمالي: {total} ريال</div>
        <a href={waLink} target="_blank" className="px-4 py-2 rounded-full bg-amber-800 text-white text-sm hover:bg-amber-900">إتمام الطلب عبر واتساب</a>
      </div>
    </div>
  );
}
