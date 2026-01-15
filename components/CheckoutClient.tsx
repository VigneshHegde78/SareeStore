"use client";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function CheckoutClient() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  async function placeOrder() {
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

    if (error) {
      console.error(error);
      return;
    }

    router.push(`/payment/${data.id}`);
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <p className="mb-6">Total: ₹{total}</p>

      <button
        onClick={placeOrder}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Proceed to Pay
      </button>
    </main>
  );
}
