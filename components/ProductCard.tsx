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
    <div className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
      
      {/* Clickable Image Area */}
      <Link href={`/product/${product.id}`} className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Optional: Low Stock Badge */}
        {product.stock <= 5 && product.stock > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Low Stock
            </span>
        )}
      </Link>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`} className="block">
          <h2 className="font-medium text-gray-900 line-clamp-1 hover:text-black transition-colors" title={product.name}>
            {product.name}
          </h2>
          <p className="text-gray-500 text-xs mb-2 capitalize">{product.category}</p>
        </Link>

        {/* Price & Action Row */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <p className="text-lg font-bold text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          
          {/* Prevent navigation when clicking the button by wrapping in a div that stops propagation if needed, 
              but since it's a sibling to the Link, it's safe. */}
          <div className="scale-90 origin-right">
             <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}