"use client";

import dynamic from "next/dynamic";

const CheckoutClient = dynamic(() => import("@/components/CheckoutClient"), {
  ssr: false,
});

export default function CheckoutShell() {
  return <CheckoutClient />;
}
