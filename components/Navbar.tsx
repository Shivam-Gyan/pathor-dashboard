"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Mini Dashboard
      </Link>
      <div className="flex gap-6">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/cart">
          Cart <span className="font-semibold">({totalItems})</span>
        </Link>
      </div>
    </nav>
  );
}
