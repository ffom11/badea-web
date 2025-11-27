import Image from "next/image";
import HeroCarousel from "@/components/home/HeroCarousel";

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroCarousel />
      
      <section className="rounded-xl bg-amber-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 p-8 flex flex-col gap-4 items-start">
        <h1 className="text-3xl sm:text-4xl font-bold">محمصة وعطارة البادية</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          قهوة محمصة طازجة، بهارات مختارة، مكسرات وأعشاب عالية الجودة. نخدمكم في المدينة المنورة، حي السلام، خلف الأستاذ الرياضي.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/products" className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-90">تصفح المنتجات</a>
          <a href="/map" className="px-5 py-2.5 rounded-full border border-black/15 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/5">موقعنا على الخريطة</a>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
          <h3 className="font-semibold mb-2">قهوة طازجة</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">أنواع قهوة عربية، تركية، مختصة، وبُن يمني.</p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
          <h3 className="font-semibold mb-2">بهارات فاخرة</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">خليط بهارات منسّق وطحن طازج عند الطلب.</p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
          <h3 className="font-semibold mb-2">مكسرات وأعشاب</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">تشكيلة مكسرات محمصة وأعشاب طبيعية مختارة.</p>
        </div>
      </section>

      <section className="rounded-lg border border-black/10 dark:border-white/10 p-6 flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="font-semibold">اطلب عبر واتساب</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">سنضيف رقم الواتساب لاحقًا. اضغط للبدء في رسالة الطلب.</p>
        </div>
        <a href="https://wa.me/966566166251" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm hover:bg-emerald-700">ابدأ الطلب</a>
      </section>
    </div>
  );
}
