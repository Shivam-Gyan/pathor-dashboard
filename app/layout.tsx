// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50"  cz-shortcut-listen="true">
        <CartProvider>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}