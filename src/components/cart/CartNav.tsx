"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartNav() {
  const { count } = useCart();
  return (
    <Link href="/cart" className="relative px-3 py-1.5 rounded-full border border-black/15 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/5">
      السلة
      {count > 0 && (
        <span className="absolute -top-2 -left-2 min-w-5 h-5 px-1 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}
