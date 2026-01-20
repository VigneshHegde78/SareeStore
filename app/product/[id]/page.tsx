import AddToCartButton from "@/components/AddToCartButton";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  // 1. Better "Not Found" UI
  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <p className="text-gray-500 mt-2">The item you are looking for might have been removed.</p>
        <Link href="/" className="mt-4 text-blue-600 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Helper to handle image array or null safely
  const mainImage = product.image_url && product.image_url.length > 0 
    ? product.image_url[0] 
    : "/placeholder.png";

  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      
      {/* Breadcrumb / Back Link */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors">
          <LuChevronLeft className="mr-1" /> Back to Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* Left Column: Image */}
        <div className="relative w-full aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col h-full justify-center">
          
          {/* Category Badge */}
          <span className="w-fit bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {product.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          <p className="text-2xl font-medium text-gray-900 mt-4">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          {/* Divider */}
          <div className="border-b border-gray-100 my-8" />

          {/* Stock Status Indicator */}
          <div className="flex items-center space-x-2 mb-6">
            <span className={`h-2.5 w-2.5 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`} />
            <p className={`text-sm font-medium ${product.stock > 10 ? "text-gray-600" : "text-red-600"}`}>
              {product.stock <= 10 && product.stock > 0
                ? `Only ${product.stock} left in stock!`
                : product.stock > 0
                ? "In Stock & Ready to Ship"
                : "Out of Stock"}
            </p>
          </div>

          {/* Add to Cart Component */}
          <div className="w-full md:w-auto">
             <AddToCartButton product={product} />
          </div>

        </div>
      </div>
    </main>
  );
}