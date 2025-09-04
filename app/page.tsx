
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Mini Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6">
        Browse products, search, filter, and manage your cart.
      </p>
      <Link href="/dashboard">
        <Button size="lg">Go to Dashboard</Button>
      </Link>
    </div>
  );
}
