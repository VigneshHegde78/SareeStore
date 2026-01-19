"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import Image from "next/image";
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
        <div
          className="btn-primary w-1/6 cursor-pointer text-center mt-6"
          onClick={() => router.push("/")}>
          Start Shopping
        </div>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6"> Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4">
          <Image
            src={
              item.image_url == null ? "/placeholder.png" : item.image_url[0]
            }
            alt={item.name}
            width={100}
            height={100}
            className="object-fill mb-3"
          />
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
            className="text-red-600">
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL + CHECKOUT */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ₹{total}</p>

        <button
          onClick={() => router.push("/checkout")}
          className="bg-black text-white px-6 py-3 rounded">
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
