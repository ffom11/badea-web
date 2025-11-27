"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  // يمكنك استبدالها لاحقًا بصور من public/
  "https://images.unsplash.com/photo-1509043759401-136742328bb3?w=1600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1505575967455-40e256f73376?w=1600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1615486364095-8e8356c212ef?w=1600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?w=1600&auto=format&fit=crop&q=70",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-amber-900/15">
      <div className="relative aspect-[16/6] sm:aspect-[16/5] bg-black/5 dark:bg-white/5">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image src={src} alt={`عرض ${i + 1}`} fill priority className="object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`الانتقال إلى الشريحة ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-amber-800" : "bg-white/70 dark:bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
