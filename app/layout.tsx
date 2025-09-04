// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ProductsProvider } from "@/context/ProductContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pathor Dashboard",
  description: "A dashboard for managing your Pathor products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50" cz-shortcut-listen="true">
        <CartProvider>
          <ProductsProvider>
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
          </ProductsProvider>
        </CartProvider>
      </body>
    </html>
  );
}