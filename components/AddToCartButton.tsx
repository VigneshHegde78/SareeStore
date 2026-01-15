"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        console.log("BUTTON CLICKED");
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
        console.log("ITEM ADDED");
      }}
      className="mt-8 bg-black text-white px-6 py-3 rounded"
    >
      Add to Cart
    </button>
  );
}
