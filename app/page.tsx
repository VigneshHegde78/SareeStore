import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products } = await supabase.from("products").select("*").eq("is_active", true);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Saree Store</h1>
      <p className="mt-4 text-gray-600 mb-6">Authentic Indian Sarees</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
