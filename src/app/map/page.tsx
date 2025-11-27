export default function MapPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">موقعنا على الخريطة</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">العنوان: DMMC4274، 4274 صخر بن العيله البجلي، 6504، حي السلام، المدينة المنورة 42354. الخريطة تقريبية إلى أن تزودنا برابط Google Maps الدقيق.</p>
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
        <iframe
          title="محامص وعطارية البادية"
          src="https://www.google.com/maps?q=24.4686,39.6142&z=14&output=embed"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
