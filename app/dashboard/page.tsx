"use client";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

// ShadCN UI
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/context/ProductContext";
import { Product } from "@/types/product";

export default function DashboardPage() {
  const { products, addProduct, setProducts } = useProducts();
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  // Form state
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    title: "",
    price: 0,
    image: "",
    category: "electronics",
    description: "",
  });

  useEffect(() => {
    getProducts().then((data: Product[]) => {
      setProducts(data);
      setFiltered(data);
    });
  }, [setProducts]);

  useEffect(() => {
    let result = products;
    if (category !== "all")
      result = result.filter((p) => p.category === category);
    if (search)
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    setFiltered(result);
  }, [category, search, products]);

  const ITEMS_PER_PAGE = 10;
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

  const handleCreateProduct = () => {
    const product: Product = {
      id: Date.now(),
      title: newProduct.title,
      price: newProduct.price,
      image: newProduct.image || "https://via.placeholder.com/150",
      category: newProduct.category,
      description: newProduct.description || "Custom added product",
    };
    addProduct(product);
    setNewProduct({
      title: "",
      price: 0,
      image: "",
      category: "electronics",
      description: "",
    });
  };

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter value={category} onChange={setCategory} />

        {/* Create Product Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto bg-gray-300 text-slate-800 hover:bg-gray-400 cursor-pointer">
              + Create Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input
                placeholder="Title"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, title: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: Number(e.target.value) })
                }
              />
              <Input
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Input
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
              <Button className="w-full mt-2" onClick={handleCreateProduct}>
                Save Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Load More */}
      {paginated.length < filtered.length && (
        <button
          onClick={() => setPage((p) => p + 1)}
          className="block mx-auto mt-6 px-4 py-2 bg-black text-white rounded-lg"
        >
          Load More
        </button>
      )}
    </div>
  );
}
