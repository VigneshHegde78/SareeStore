import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true);

  return (
    <main>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
