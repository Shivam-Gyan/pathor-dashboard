// context/ProductsContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { getProducts } from "@/lib/api";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

const ProductsContext = createContext<{
  products: Product[];
  addProduct: (p: Product) => void;
  setProducts: (p: Product[]) => void;
} | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load initial products from API
    getProducts().then((data) => setProducts(data));
  }, []);

  const addProduct = (p: Product) => {
    setProducts((prev) => [p, ...prev]);
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductsProvider");
  return ctx;
};
