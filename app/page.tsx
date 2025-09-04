"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto h-[80vh] px-6">
      {/* Left Section - Text */}
      <div className="text-center lg:text-left space-y-6 max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
          Welcome to <span className="text-blue-600">Pathor Dashboard</span>
        </h1>
        <p className="text-lg text-gray-600">
          Explore products, search easily, filter by category, and manage your
          cart with a seamless shopping experience.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="mt-4 cursor-pointer">
            🚀 Go to Dashboard
          </Button>
        </Link>
      </div>

      {/* Right Section - Illustration */}
      <div className="mt-10 lg:mt-0">
        <Image
          src="https://img.pikbest.com/png-images/20191028/push-shopping-cart-to-woman-gif_2515298.png!c1024wm0"
          alt="Shopping Lady with Cart"
          width={320}
          height={320}
          className="w-80 lg:w-[28rem] object-contain drop-shadow-lg"
        />
      </div>
    </main>
  );
}
