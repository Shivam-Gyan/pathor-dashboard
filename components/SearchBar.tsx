"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative w-full max-w-sm">
      {/* Icon inside input */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

      <Input
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
      />
    </div>
  );
}
