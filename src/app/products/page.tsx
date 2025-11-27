"use client";
import Link from "next/link";
import Image from "next/image";
import { products as codeProducts, type Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/components/cart/CartProvider";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const { addItem } = useCart();
  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [list, setList] = useState<Product[]>(codeProducts);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/products.json", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (data && Array.isArray(data.products)) {
          const normalized: Product[] = data.products.map((it: any) => ({
            id: Number(it.id),
            slug: String(it.slug),
            name: String(it.name),
            category: String(it.category),
            price: Number(it.price),
            unit: String(it.unit),
            description: String(it.description),
            images: Array.isArray(it.images)
              ? it.images.map((img: any) => (typeof img === "string" ? img : img?.image)).filter(Boolean)
              : [],
            stock: typeof it.stock === "number" ? it.stock : undefined,
          }));
          setList(normalized);
        }
      } catch {}
    };
    load();
  }, []);

  const handleAdd = (id: number) => {
    const p = list.find((x) => x.id === id);
    if (!p) return;
    addItem(p, 1);
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1500);
  };
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">المنتجات</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">تشكيلة أولية للتجربة — سنحدّثها ببياناتك لاحقًا.</p>
        </div>
        <Link href="/cart" className="btn-primary">اذهب إلى السلة</Link>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((p) => (
          <div key={p.id} className="card overflow-hidden">
            <Link href={`/products/${p.slug}`} className="block">
              <div className="relative aspect-square bg-black/5 dark:bg-white/5">
                {p.images?.[0] && (
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4"
                  />
                )}
              </div>
              <div className="p-4 space-y-1">
                <div className="text-xs opacity-70">{p.category}</div>
                <h3 className="font-semibold">{p.name}</h3>
                <div className="text-sm">{formatPrice(p.price)} / {p.unit}</div>
              </div>
            </Link>
            <div className="px-4 pb-4 flex items-center gap-2">
              <button onClick={() => handleAdd(p.id)} className="btn-primary text-xs">
                {added[p.id] ? "✔ تمت الإضافة" : "أضف إلى السلة"}
              </button>
              <Link href="/cart" className="btn-outline text-xs">السلة</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
