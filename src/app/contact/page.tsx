export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">تواصل معنا</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 space-y-2">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">واتساب</div>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-full bg-emerald-600 text-white text-sm hover:bg-emerald-700">راسلنا عبر واتساب</a>
          <p className="text-xs text-zinc-500">سنضيف رقم الواتساب فور استلامه.</p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 space-y-2">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">موقع المتجر</div>
          <a href="/map" className="inline-block px-4 py-2 rounded-full border border-black/15 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/5">الخريطة</a>
          <p className="text-xs text-zinc-500">المدينة المنورة — حي السلام — خلف الأستاذ الرياضي.</p>
        </div>
      </div>
    </div>
  );
}
