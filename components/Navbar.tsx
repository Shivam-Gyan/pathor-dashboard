"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-slate-800">
          🛍️ <span className="max-sm:hidden">Pathor Dashboard</span>
        </Link>

        {/* Right side: Dashboard + Cart */}
        <div className="flex items-center gap-6">
          {/* Dashboard Button */}
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-lg bg-slate-900 text-white hover:bg-slate-700 cursor-pointer hover:text-white">
              Dashboard
            </Button>
          </Link>

          {/* Cart Icon with Badge */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-7 w-7 text-slate-700 hover:text-slate-900 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
