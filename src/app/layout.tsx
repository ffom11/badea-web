import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import CartNav from "@/components/cart/CartNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-arabic-sans",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "محمصة وعطارة البادية",
  description: "قهوة، بهارات، مكسرات، وأعشاب. العنوان: DMMC4274، 4274 صخر بن العيله البجلي، 6504، حي السلام، المدينة المنورة 42354. اطلب الآن عبر واتساب.",
  metadataBase: new URL("https://albadea-salam-medina.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://albadea-salam-medina.netlify.app/",
    siteName: "محمصة وعطارة البادية",
    title: "محمصة وعطارة البادية",
    description:
      "قهوة، بهارات، مكسرات، وأعشاب في المدينة المنورة — حي السلام.",
  },
  twitter: {
    card: "summary_large_image",
    title: "محمصة وعطارة البادية",
    description:
      "قهوة، بهارات، مكسرات، وأعشاب في المدينة المنورة — حي السلام.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoKufi.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)]`}
      >
        <CartProvider>
          <header className="border-b border-black/10 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
              <a href="/" className="text-xl font-semibold">محمصة وعطارة البادية</a>
              <nav className="flex items-center gap-4 text-sm">
                <a href="/products" className="hover:opacity-80">المنتجات</a>
                <a href="/about" className="hover:opacity-80">عنّا</a>
                <a href="/contact" className="hover:opacity-80">تواصل</a>
                <a href="/map" className="hover:opacity-80">الخريطة</a>
                <a href="/policies" className="hover:opacity-80">السياسات</a>
                <CartNav />
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">
            {children}
          </main>
          <footer className="mt-12 border-t border-black/10 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm opacity-80 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
              <p>© {new Date().getFullYear()} محمصة وعطارة البادية</p>
              <p>DMMC4274، 4274 صخر بن العيله البجلي، 6504، حي السلام، المدينة المنورة 42354</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
