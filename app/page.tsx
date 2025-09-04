"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto h-[80vh] px-6">
      {/* Left Section - Text */}
      <div className="text-center lg:text-left space-y-6 max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
          Welcome to <span className="text-blue-600">Mini Dashboard</span>
        </h1>
        <p className="text-lg text-gray-600">
          Explore products, search easily, filter by category, and manage your
          cart with a seamless shopping experience.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="mt-4">
            🚀 Go to Dashboard
          </Button>
        </Link>
      </div>

      {/* Right Section - Illustration */}
      <div className="mt-10 lg:mt-0">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXp6b2JubnloZ2FndTczZXZsbWpxcXlvajhpcTZzdDJwbTZmMW0wMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JIX9t2j0ZTN9S/giphy.gif"
          alt="Shopping Lady with Cart"
          className="w-80 lg:w-[28rem] object-contain drop-shadow-lg"
        />
      </div>
    </main>
  );
}
