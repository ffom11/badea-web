import fs from "node:fs";
import path from "node:path";
import { products as codeProducts, type Product } from "@/data/products";

export function readProductsFromJson(): Product[] | null {
  try {
    const p = path.join(process.cwd(), "public", "products.json");
    if (!fs.existsSync(p)) return null;
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    if (data && Array.isArray(data.products)) {
      // normalize image entries if coming as objects {image:"..."}
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
      return normalized;
    }
    return null;
  } catch {
    return null;
  }
}

export function getAllProducts(): Product[] {
  return readProductsFromJson() ?? codeProducts;
}

export function getProductBySlugServer(slug: string): Product | undefined {
  const list = getAllProducts();
  return list.find((p) => p.slug === slug);
}
