"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) {
    return <p className="p-10">Checking admin access…</p>;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        <p className="font-bold mb-4">Admin Panel</p>
        <ul className="space-y-2">
          <li
            className="cursor-pointer"
            onClick={() => router.push("/admin/products")}
          >
            Products
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/admin/orders")}
          >
            Orders
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
