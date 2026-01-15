export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string | null;
  is_active: boolean;
  image_url: string[] | null;
  created_at: string;
};

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  total_amount: number;
  status: "pending" | "paid" | "shipped" | "delivered";
  payment_mode: string;
  created_at: string;
};
