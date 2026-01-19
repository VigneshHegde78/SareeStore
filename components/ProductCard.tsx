import Image from "next/image";
import type { Product } from "@/types";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc =
    product.image_url && product.image_url.length > 0
      ? product.image_url[0]
      : "/placeholder.png";

  return (
    <Link
      href={`/product/${product.id}`}
      className="rounded-lg bg-gray-50 border border-gray-300 hover:shadow-lg transition-shadow p-3">
      <Image
        src={imageSrc}
        alt={product.name}
        width={340}
        height={340}
        className="object-cover rounded-lg"
      />

      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p className="text-primary font-semibold text-lg mb-1">
        ₹{product.price}
      </p>
    </Link>
  );
}
