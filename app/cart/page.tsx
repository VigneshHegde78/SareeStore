"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuTrash2, LuShoppingBag } from "react-icons/lu";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // --- Empty State ---
  if (cart.length === 0) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <LuShoppingBag size={48} className="text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8 max-w-xs mx-auto">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
        >
          Start Shopping
        </button>
      </main>
    );
  }

  // --- Cart List State ---
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
          >
            {/* Image Section */}
            <div className="relative w-full sm:w-24 h-32 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={item.image_url?.[0] || "/placeholder.png"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full text-center sm:text-left">
              <h2 className="font-semibold text-lg text-gray-900">{item.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Unit Price: ₹{item.price}</p>
            </div>

            {/* Controls Section (Quantity + Remove) */}
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0 border-t sm:border-t-0 pt-4 sm:pt-0">
              
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500 sr-only">Quantity</label>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 border border-gray-300 rounded-lg px-2 py-1.5 text-center text-sm focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div className="text-right">
                <p className="font-bold text-lg w-24">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                aria-label="Remove item"
              >
                <LuTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="mt-10 bg-gray-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 mb-1">Subtotal</p>
          <p className="text-3xl font-bold text-gray-900">₹{total.toLocaleString("en-IN")}</p>
          <p className="text-xs text-gray-400 mt-1">Shipping & taxes calculated at checkout</p>
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-transform active:scale-95 shadow-lg"
        >
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}