"use client";

import { useEffect, useState } from "react";
// import { Product, getBestDeals } from "@/app/actions/getBestDeals";
import ProductCard from "./ProductCard";
import { getBestDeals, Product } from "../actions/FetchProductByCategory";
import ProductCardNew from "./ProductCardNew";

const tabs = [
  "jewelery",
  "electronics",
  "men's clothing",
  "women's clothing",
  
];

export default function BestDealsTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getBestDeals(activeTab);
      setProducts(data);
      setLoading(false);
    };

    loadData();
  }, [activeTab]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-sky-500">
          Best <span className="text-black">Deals</span>
        </h2>

        <div className="flex gap-6 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 transition ${
                activeTab === tab
                  ? "border-sky-500 text-sky-500"
                  : "border-transparent text-gray-500 hover:text-sky-500"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      {loading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCardNew key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
