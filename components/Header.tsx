"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import "../app/styles/globals.css";
import { LuShoppingBag } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
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
    <header className={`flex bg-bg justify-between items-center px-10 py-4`}>
      <Link href="/" className="flex space-x-5 items-center">
        <Image
          src={"/logo.png"}
          alt="Matrika Angan Logo"
          width={30}
          height={30}
        />

        <h1 className={`text-3xl font-bold ${dancingScript.className}`}>
          Matrika Angan
        </h1>
      </Link>

      <span className="text-sm text-gray-500 border flex w-1/3 justify-start items-center rounded-lg">
        <BiSearch size={20} className="m-1" />
        Search...
      </span>

      <span className="flex space-x-6">
        <BsPersonFill size={20} className="cursor-pointer" />

        <Link href="/cart" className="relative">
          <LuShoppingBag size={20} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
              {count}
            </span>
          )}
        </Link>
      </span>
    </header>
  );
}
