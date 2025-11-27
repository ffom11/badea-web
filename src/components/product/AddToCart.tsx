"use client";
import { useCart } from "@/components/cart/CartProvider";
import { getProductBySlug } from "@/data/products";

export default function AddToCart({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const product = getProductBySlug(slug)!;
  const handle = (formData: FormData) => {
    const q = Number(formData.get("q") || 1);
    addItem(product, isNaN(q) || q < 1 ? 1 : q);
  };
  return (
    <form action={handle} className="flex items-center gap-2">
      <label htmlFor="qty" className="sr-only">الكمية</label>
      <input id="qty" aria-label="الكمية" title="الكمية" name="q" type="number" min={1} defaultValue={1} className="w-20 px-2 py-1 rounded border border-black/15 dark:border-white/20 bg-transparent" />
      <button type="submit" className="btn-primary">أضف إلى السلة</button>
    </form>
  );
}
