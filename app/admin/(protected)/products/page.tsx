"use client";

import { supabase } from "@/lib/supabase";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function fetchProducts() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    setProducts(data || []);
  }

  async function addProduct() {
    if (!name || price <= 0) return;

    await supabase.from("products").insert({
      name,
      price,
      stock,
      category,
      image_url: imageUrl ? [imageUrl] : null,
      is_active: true,
    });

    setName("");
    setPrice(0);
    setStock(0);
    setCategory("");
    setImageUrl(null);

    fetchProducts();
  }

  useEffect(() => {
    const load = async () => {
      await fetchProducts();
    };
    load();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* ADD PRODUCT */}
      <div className="border p-4 mb-8">
        <h2 className="font-semibold mb-4">Add New Product</h2>

        <input
          className="border p-2 mr-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 mr-2"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          className="border p-2 mr-2"
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />

        <input
          className="border p-2 mr-2"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="file"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const filePath = `${Date.now()}-${file.name}`;

            await supabase.storage
              .from("product-images")
              .upload(filePath, file, {
                contentType: file.type,
                upsert: true,
              });

            const { data } = supabase.storage
              .from("product-images")
              .getPublicUrl(filePath);

            setImageUrl(data.publicUrl);
          }}
        />

        <button onClick={addProduct} className="bg-black text-white px-4 py-2">
          Add
        </button>
      </div>

      {/* PRODUCT LIST */}
      {products.map((p) => (
        <div key={p.id} className="border p-4 mb-3 flex justify-between">
          <div>
            <p className="font-semibold">{p.name}</p>
            <p>₹{p.price}</p>
            <p>Stock: {p.stock}</p>
            <p className="text-sm text-gray-500">{p.category}</p>
          </div>

          <input
            type="number"
            className="border px-2 py-1 mr-2"
            value={p.price}
            onChange={async (e) => {
              await supabase
                .from("products")
                .update({ price: Number(e.target.value) })
                .eq("id", p.id);
              fetchProducts();
            }}
          />

          <input
            type="number"
            className="border px-2 py-1 mr-2"
            value={p.stock}
            onChange={async (e) => {
              await supabase
                .from("products")
                .update({ stock: Number(e.target.value) })
                .eq("id", p.id);
              fetchProducts();
            }}
          />

          <button
            onClick={async () => {
              await supabase
                .from("products")
                .update({ is_active: !p.is_active })
                .eq("id", p.id);

              fetchProducts();
            }}
            className="text-sm underline"
          >
            {p.is_active ? "Disable" : "Enable"}
          </button>
        </div>
      ))}
    </div>
  );
}
