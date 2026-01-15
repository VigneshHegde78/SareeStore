"use client";

import { supabase } from "@/lib/supabase";
import { Order } from "@/types";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function fetchOrders() {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    setOrders(data || []);
  }

  useEffect(() => {
    const load = async () => {
      await fetchOrders();
    };
    load();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      {orders.map((o) => (
        <div key={o.id} className="border p-4 mb-4">
          <p>
            <b>Order ID:</b> {o.id}
          </p>
          <p>
            <b>Status:</b> {o.status}
          </p>
          <p>
            <b>Total:</b> ₹{o.total_amount}
          </p>

          <div className="mt-2">
            <button
              className="mr-2 underline"
              onClick={async () => {
                await supabase
                  .from("orders")
                  .update({ status: "shipped" })
                  .eq("id", o.id);
                fetchOrders();
              }}
            >
              Mark Shipped
            </button>

            <button
              className="underline"
              onClick={async () => {
                await supabase
                  .from("orders")
                  .update({ status: "delivered" })
                  .eq("id", o.id);
                fetchOrders();
              }}
            >
              Mark Delivered
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
