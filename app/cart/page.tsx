"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { state, removeFromCart, incrementItem, decrementItem, totalItems, totalPrice } =
    useCart();
  const { items } = state;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <p className="text-2xl font-semibold text-gray-600">
          Your cart is empty 🛒
        </p>
        <p className="text-gray-400 mt-2">
          Looks like you haven’t added any products yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Shopping Cart</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain rounded-md border p-2 bg-gray-50"
                />
                <div className="flex flex-col">
                  {/* Title */}
                  <p className="font-semibold text-slate-800 line-clamp-1">
                    {item.title}
                  </p>

                  {/* Price + Quantity Controls inline */}
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-base font-medium text-gray-700">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => decrementItem(item.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => incrementItem(item.id)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remove Button - moves below on mobile */}
              <div className="sm:self-end">
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-2 w-full sm:w-auto"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="mt-8 flex flex-col items-end">
        <div className="bg-slate-50 rounded-lg p-6 w-full sm:w-80 shadow-sm">
          <p className="text-lg font-medium text-slate-700 flex justify-between">
            <span>Total Items:</span> <span>{totalItems}</span>
          </p>
          <p className="text-xl font-bold text-slate-800 mt-3 flex justify-between">
            <span>Total Price:</span> <span>${totalPrice.toFixed(2)}</span>
          </p>
          <Button className="w-full mt-6">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
}
