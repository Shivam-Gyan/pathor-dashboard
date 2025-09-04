"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { state, removeFromCart, totalItems, totalPrice } = useCart();
  const { items } = state;

  if (items.length === 0) {
    return <p className="text-center mt-20">Your cart is empty 🛒</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16 w-16" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500">
                  {item.quantity} × ${item.price}
                </p>
              </div>
            </div>
            <Button
              variant="destructive"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-right">
        <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Items: {totalItems}</p>
      </div>
    </div>
  );
}
