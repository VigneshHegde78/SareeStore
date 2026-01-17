import AddToCartButton from "@/components/AddToCartButton";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

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

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="p-10 grid md:grid-cols-2 gap-10">
      <div className="bg-gray-100 h-96 flex items-center justify-center">
        <Image
          src={product.image_url == null ? "/placeholder.png" : product.image_url[0]}
          alt={product.name}
          width={400}
          height={500}
          className="object-fill mb-3"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 mt-2">{product.category}</p>
        <p className="text-2xl font-semibold mt-4">₹{product.price}</p>
        <p className="mt-6">{product.description}</p>

        <AddToCartButton product={product} />
      </div>
    </main>
  );
}
