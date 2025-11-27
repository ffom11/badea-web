"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
  image?: string;
};

type CartContextType = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "albadea_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (product: Product, q: number = 1) => {
    setItems((prev) => {
      const exists = prev.find((it) => it.slug === product.slug);
      if (exists) {
        return prev.map((it) =>
          it.slug === product.slug ? { ...it, quantity: it.quantity + q } : it
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          unit: product.unit,
          quantity: q,
          image: product.images?.[0],
        },
      ];
    });
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((it) => it.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((it) => (it.slug === slug ? { ...it, quantity } : it))
        .filter((it) => it.quantity > 0)
    );
  };

  const clear = () => setItems([]);

  const { count, total } = useMemo(() => {
    const c = items.reduce((s, it) => s + it.quantity, 0);
    const t = items.reduce((s, it) => s + it.price * it.quantity, 0);
    return { count: c, total: t };
  }, [items]);

  const value: CartContextType = { items, count, total, addItem, removeItem, updateQuantity, clear };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
