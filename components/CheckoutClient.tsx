"use client";

import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutClient() {
  const { cart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  async function placeOrder() {
    if (cart.length === 0) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .insert({
        items: cart,
        total_amount: total,
        status: "pending",
        payment_mode: "FAKE",
      })
      .select()
      .single();

    setLoading(false);

    if (error) {
      console.error(error);
      return;
    }

    router.push(`/payment/${data.id}`);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT: PRODUCT SUMMARY */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <h1 className="text-2xl font-semibold mb-6">Review your order</h1>

          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-4 last:border-b-0">
                {/* Image */}
                <div className="relative w-24 h-32 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.name}</p>

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>

                  <p className="mt-2 font-medium text-gray-800">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PAYMENT SUMMARY */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order summary</h2>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-semibold text-lg border-t pt-4 mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            disabled={loading || cart.length === 0}
            className="w-full rounded-xl bg-black py-4 text-white font-medium
                       transition hover:bg-gray-900
                       disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Placing Order..." : "Proceed to Pay"}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Secure checkout • No extra charges
          </p>
        </div>
      </div>
    </main>
  );
}
