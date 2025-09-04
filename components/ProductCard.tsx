"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <Card className="p-4 flex flex-col justify-between">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={160}
            height={160}
            className="h-40 object-contain"
          />
          <CardContent className="mt-2 text-center">
            <h3 className="font-bold line-clamp-1">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-semibold">${product.price}</p>
          </CardContent>
        </div>
      </Link>
      <Button onClick={() => addToCart(product)} className="mt-2">
        Add to Cart
      </Button>
    </Card>
  );
}
