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

export async function getNewArrivals(): Promise<Product[]> {
  try {
    const response = await axios.get(
      "https://mm-assesment-server.vercel.app/api/v1/products",
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
