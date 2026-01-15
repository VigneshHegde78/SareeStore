"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center px-10 py-4 border-b">
      <Link href="/">
        <h1 className="text-xl font-bold">Saree Store</h1>
      </Link>

      <Link href="/cart" className="relative">
        <span className="text-lg">🛒</span>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </Link>
    </header>
  );
}
