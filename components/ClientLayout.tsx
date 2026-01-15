"use client";

import dynamic from "next/dynamic";
import { CartProvider } from "@/context/CartContext";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
  );
}
