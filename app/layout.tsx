import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
