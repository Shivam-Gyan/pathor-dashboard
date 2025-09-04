"use client";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";


export default function DashboardPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    let result = products;
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (search) result = result.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [category, search, products]);

  const ITEMS_PER_PAGE = 10;
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

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
