import Image from "next/image";
import { getAllProducts, getProductBySlugServer } from "@/lib/products-server";
import AddToCart from "@/components/product/AddToCart";

export async function generateStaticParams() {
  const list = getAllProducts();
  return list.map((p) => ({ slug: p.slug }));
}

// AddToCart moved to a dedicated client component

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlugServer(slug);
  if (!product) return <div>المنتج غير موجود.</div>;
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div>
        <div className="relative aspect-square rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
          {product.images?.[0] && (
            <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          )}
        </div>
        {product.images?.length > 1 && (
          <div className="mt-3 grid grid-cols-4 gap-2">
            {product.images.slice(1).map((src, i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden bg-black/5 dark:bg-white/5">
                <Image src={src} alt={`${product.name} ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-4">
        <div className="text-xs opacity-70">{product.category}</div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="text-lg">{product.price} ريال / {product.unit}</div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{product.description}</p>
        {typeof product.stock === "number" && (
          <div className="text-xs opacity-70">المتوفر: {product.stock}</div>
        )}
        <div className="[&>form_button]:bg-amber-800 [&>form_button]:hover:bg-amber-900">
          <AddToCart slug={product.slug} />
        </div>
        <a
          href={`https://wa.me/966566166251?text=${encodeURIComponent(`أرغب في طلب: ${product.name} (${product.price} ريال / ${product.unit})\nالرجاء كتابة العنوان ورقم الهاتف لإتمام الطلب`)}`}
          target="_blank"
          className="inline-block px-3 py-1.5 rounded-full border text-sm border-amber-900/40 text-amber-900 hover:bg-amber-900/10 dark:border-amber-100/30 dark:text-amber-100 dark:hover:bg-amber-100/10"
        >
          اطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
