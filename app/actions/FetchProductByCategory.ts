"use server";

import axios from "axios";

export interface Product {
  id: number;
  vendor: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  category?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getBestDeals(category: string): Promise<Product[]> {
  try {
    // https://your-api.com/best-deals?category=${category}
    const response = await axios.get(
      `${BASE_URL}/products/category/${category}`,
      {
        params: { category },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response?.data?.data;
  } catch (error: any) {
    console.error("Best deals fetch error:", error?.message);
    throw new Error("Failed to fetch best deals");
  }
}
