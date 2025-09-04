"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";

type Product = { id: number; title: string; price: number; image: string };
type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
}

type Action =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: number }
  | { type: "INCREMENT"; id: number }
  | { type: "DECREMENT"; id: number };

const CartContext = createContext<{
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  totalItems: number;
  totalPrice: number;
}>({
  state: { items: [] },
  addToCart: () => {},
  removeFromCart: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  totalItems: 0,
  totalPrice: 0,
});

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.product.id);
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { ...action.product, quantity: 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        items: state.items
          .map((i) =>
            i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0), // remove if quantity hits 0
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product: Product) => dispatch({ type: "ADD", product });
  const removeFromCart = (id: number) => dispatch({ type: "REMOVE", id });
  const incrementItem = (id: number) => dispatch({ type: "INCREMENT", id });
  const decrementItem = (id: number) => dispatch({ type: "DECREMENT", id });

  const totalItems = state.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
