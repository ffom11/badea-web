export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  unit: string; // e.g. "500غ", "100غ"
  description: string;
  images: string[]; // urls or "/images/..."
  stock?: number; // optional available quantity
};

export const products: Product[] = [
  {
    id: 1,
    slug: "arabic-coffee-special",
    name: "قهوة عربية خاصة",
    category: "قهوة",
    price: 60,
    unit: "500غ",
    description:
      "خلطة قهوة عربية خاصة محمصة طازجًا بنكهة متوازنة. مناسبة للتقديم اليومي والضيافة.",
    images: [
      "/images/coffee-arabic-1.jpg",
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1200&auto=format&fit=crop&q=70",  
      "https://images.unsplash.com/photo-1604335399105-a0b5b6f0bd1b?w=1200&auto=format&fit=crop&q=70",  
      "https://images.unsplash.com/photo-1610632380989-680d349c36a7?w=1200&auto=format&fit=crop&q=70",
    ],
    stock: 50,
  },
  {
    id: 2,
    slug: "yemeni-roasted-beans",
    name: "بن يمني محمص",
    category: "قهوة",
    price: 85,
    unit: "500غ",
    description:
      "بن يمني عالي الجودة بطحن وتحميص طازجين، بطعم غني ورائحة فواحة.",
    images: [
      "/بن.jpg",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1200&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1503481766315-7a586b20f66f?w=1200&auto=format&fit=crop&q=70",
    ],
    stock: 35,
  },
  {
    id: 3,
    slug: "mixed-spices",
    name: "بهارات مشكلة",
    category: "بهارات",
    price: 25,
    unit: "100غ",
    description:
      "خليط مختار من البهارات المتناسقة لإضافة نكهة مميزة لأطباقك.",
    images: [
      "/بهارات.png",
      "https://images.unsplash.com/photo-1505575967455-40e256f73376?w=1200&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1604908812838-310b3eaf6f2f?w=1200&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1546549039-49f629a3d4c0?w=1200&auto=format&fit=crop&q=70",
    ],
    stock: 100,
  },
  {
    id: 4,
    slug: "roasted-mixed-nuts",
    name: "مكسرات مشكّلة محمصة",
    category: "مكسرات",
    price: 45,
    unit: "250غ",
    description:
      "تشكيلة مختارة من المكسرات المحمصة بعناية لقرمشة وطعم لذيذ.",
    images: [
      "/مكسرات.webp",
      "https://images.unsplash.com/photo-1601493700629-8334b1b9a392?w=1200&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1572003813681-eb2b95a08a3a?w=1200&auto=format&fit=crop&q=70",
    ],
    stock: 80,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
