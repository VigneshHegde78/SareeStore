import Image from "next/image";
import type { Product } from "@/types";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc =
    product.image_url && product.image_url.length > 0
      ? product.image_url[0]
      : "/placeholder.png";

  return (
    <Link
      href={`/product/${product.id}`}
      className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
    >
      <div className="card border-soft hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={product.name}
          width={400}
          height={500}
          className="object-cover"
        />
      </div>

      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p className="text-primary font-semibold text-lg">₹{product.price}</p>
    </Link>
  );
}
