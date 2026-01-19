import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
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

      <div className="m-5 font-extrabold text-[#194869] text-2xl">
        Our Products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mx-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
