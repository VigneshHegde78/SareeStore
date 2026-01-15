"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty</p>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
          </div>

          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="w-16 border px-2 py-1"
          />

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL + CHECKOUT */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ₹{total}</p>

        <button
          onClick={() => router.push("/checkout")}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
