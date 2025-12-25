"use server";

import axios from "axios";

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(
      "https://mm-assesment-server.vercel.app/api/v1/products/categories",

    );
    

    // console data
    console.log("Categories data:", response?.data?.data);

    return response?.data?.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Failed to fetch categories");
  }
}
