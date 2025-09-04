"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

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
        <Button variant="outline">Category: {value}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories.map((c) => (
          <DropdownMenuItem key={c} onClick={() => onChange(c)}>
            {c}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
