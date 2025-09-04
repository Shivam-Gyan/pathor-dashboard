"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react"; // optional icon

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function CategoryFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-lg border-gray-300 shadow-sm hover:bg-gray-100"
        >
          <span className="capitalize">{value}</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="rounded-lg border bg-white p-1 shadow-lg"
        align="start"
      >
        {categories.map((c) => (
          <DropdownMenuItem
            key={c}
            onClick={() => onChange(c)}
            className="cursor-pointer rounded-md px-3 py-2 capitalize text-sm hover:bg-gray-100"
          >
            {c}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

