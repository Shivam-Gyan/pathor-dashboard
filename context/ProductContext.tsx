"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

interface ProductContextType {
  products: Product[];
  setProducts: (p: Product[]) => void;
  addProduct: (p: Product) => void;
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
  addProduct: () => {},
});

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (p: Product) => {
    setProducts((prev) => [...prev, p]);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
