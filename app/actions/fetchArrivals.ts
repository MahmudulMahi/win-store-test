"use server";

import axios from "axios";

export interface Product {
  id: number;
  vendor: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getNewArrivals(): Promise<Product[]> {
  try {
    const response = await axios.get(
      `${BASE_URL}/products`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    console.log("New Arrivals data:", response.data);

    // যদি API data response.data.data এর মধ্যে থাকে
    return response.data.data || response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
}
