"use client";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold">Products</h2>
      <table className="min-w-full mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr><td colSpan={2}>No products found.</td></tr>
          ) : (
            products.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-3">{p.id}</td>
                <td className="px-6 py-3">{p.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
