// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { getProduct, getProducts } from "@/lib/api";
// import { useCart } from "@/context/CartContext";
// import Link from "next/link";
// import ProductCard from "@/components/ProductCard";

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<any>(null);
//   const [related, setRelated] = useState<any[]>([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     if (id) {
//       getProduct(id as string).then((data) => {
//         setProduct(data);
//         // Fetch related products by category
//         getProducts().then((all) => {
//           const filtered = all
//             .filter(
//               (p: any) => p.category === data.category && p.id !== data.id
//             )
//             .slice(0, 4); // limit to 4
//           setRelated(filtered);
//         });
//       });
//     }
//   }, [id]);

//   if (!product) {
//     return (
//       <p className="text-center text-gray-500 mt-20 animate-pulse">
//         Loading product details...
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Product Detail Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow p-6">
//         {/* Product Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="h-80 object-contain"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col justify-center">
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <p className="text-sm text-gray-500 mb-2">
//             Category:{" "}
//             <span className="font-medium capitalize">{product.category}</span>
//           </p>
//           <p className="text-2xl font-semibold text-slate-800 mb-4">
//             ${product.price}
//           </p>
//           <p className="text-gray-700 mb-6 leading-relaxed">
//             {product.description}
//           </p>
//           <Button
//             size="lg"
//             className="w-full md:w-48"
//             onClick={() => addToCart(product)}
//           >
//             Add to Cart
//           </Button>
//         </div>
//       </div>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <div className="mt-12">
//           <h2 className="text-2xl font-semibold mb-6">
//             Related Products in{" "}
//             <span className="capitalize">{product.category}</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((item) => (
//               <div key={item.id} >
//                 <ProductCard product={item} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProduct, getProducts } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useProducts();
  const [product, setProduct] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    const localProduct = products.find((p) => p.id === Number(id));
    if (localProduct) {
      setProduct(localProduct);
      setRelated(products.filter((p) => p.category === localProduct.category && p.id !== localProduct.id).slice(0, 4));
    } else {
      // fallback to API
      getProduct(id as string).then((data) => {
        setProduct(data);
        getProducts().then((all) => {
          const filtered = all
            .filter((p: any) => p.category === data.category && p.id !== data.id)
            .slice(0, 4);
          setRelated(filtered);
        });
      });
    }
  }, [id, products]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-20 animate-pulse">
        Loading product details...
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Detail Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow p-6">
        <div className="flex justify-center items-center">
          <img src={product.image} alt={product.title} className="h-80 object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            Category: <span className="font-medium capitalize">{product.category}</span>
          </p>
          <p className="text-2xl font-semibold text-slate-800 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          <Button size="lg" className="w-full md:w-48" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            Related Products in <span className="capitalize">{product.category}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
