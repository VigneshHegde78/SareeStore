import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satisfy.className} suppressHydrationWarning>
      <body>
        <CartProvider>
          <Headline />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
