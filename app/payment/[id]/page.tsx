"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function FakePaymentPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { clearCart } = useCart();

  async function confirmPayment() {
    // 1. Fetch order
    const { data: order } = await supabase
      .from("orders")
      .select("*")
      .eq("id", params.id)
      .single();

    if (!order) return;

    // 2. Reduce stock for each item
    for (const item of order.items) {
      const { data: product } = await supabase
        .from("products")
        .select("stock")
        .eq("id", item.id)
        .single();

      if (!product) continue;

      const newStock = product.stock - item.quantity;

      await supabase
        .from("products")
        .update({ stock: newStock })
        .eq("id", item.id);
    }

    // 3. Update order status
    await supabase.from("orders").update({ status: "paid" }).eq("id", order.id);

    // 4. Redirect
    router.push(`/order-success/${order.id}`);
  }

  return (
    <main className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fake Payment Gateway</h1>

      <p className="mb-6 text-gray-600">This simulates a successful payment.</p>

      <button
        onClick={clearCart}
        className="w-full bg-green-600 text-white py-3 rounded">
        Pay ₹ (Fake)
      </button>
    </main>
  );
}
