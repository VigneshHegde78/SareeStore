import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function OrderSuccessPage({ params }: Props) {
  const { id } = await params;

  const { data: order } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (!order) return <div>Order not found</div>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-green-600">Order Successful 🎉</h1>

      <p className="mt-4">Order ID: {order.id}</p>
      <p>Status: {order.status}</p>
      <p>Total: ₹{order.total_amount}</p>
    </main>
  );
}
