"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/api";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      getProduct(id as string).then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 mx-auto mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-500 mb-2">Category: {product.category}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <p className="mb-6">{product.description}</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  );
}
