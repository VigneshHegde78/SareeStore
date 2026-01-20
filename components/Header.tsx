"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import "../app/styles/globals.css";
import { LuShoppingBag, LuSearch } from "react-icons/lu"; // Switched to LuSearch for consistency
import { BsPersonFill } from "react-icons/bs";
import Image from "next/image";
import localFont from "next/font/local";

const satisfy = localFont({
  src: "../app/styles/fonts/Satisfy-Regular.ttf",
  variable: "--font-satisfy",
  weight: "700",
  style: "normal",
});

const dancingScript = localFont({
  src: "../app/styles/fonts/DancingScript.ttf",
  variable: "--font-dancingscript",
});

export default function Header() {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4 mx-auto max-w-7xl">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Matrika Angan Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className={`text-2xl md:text-3xl font-bold text-gray-800 ${dancingScript.className}`}>
            Matrika Angan
          </h1>
        </Link>

        {/* Desktop Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex items-center w-1/3 max-w-md bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-gray-200 transition-all">
          <LuSearch size={20} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-transparent border-none outline-none text-sm ml-2 text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 md:gap-6 text-gray-700">
          {/* Search Icon - Visible only on Mobile */}
          <button className="md:hidden p-1 hover:text-black transition-colors">
            <LuSearch size={22} />
          </button>

          <Link href="/account" className="p-1 hover:text-black transition-colors">
            <BsPersonFill size={22} />
          </Link>

          <Link href="/cart" className="relative p-1 hover:text-black transition-colors">
            <LuShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white ring-2 ring-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}