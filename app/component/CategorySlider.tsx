"use client";

import Image from "next/image";
import Link from "next/link";
// import { Category } from "@/app/actions/getCategories";
import { useRef } from "react";
import { Category } from "../actions/fetchCategories";

interface Props {
  categories: Category[];
}

export default function CategorySlider({ categories }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const categoryImages = [
    "/category/card1.png",
    "/category/card2.png",
    "/category/card3.png",
    "/category/card4.png",
  ];

  return (
    <div className="relative w-full  ">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#F3EDC9] to-white pointer-events-none"></div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2  -translate-y-1/2  rounded-full p-2 text-6xl shadow lg:shadow-none bg-white z-30"
      >
        ‹
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-10 py-4 no-scrollbar"
      >
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="min-w-[280px]  rounded-lg  overflow-hidden relative"
          >
            <div className="relative h-40 ">
              <Image
                src={categoryImages[index % categoryImages.length]}
                alt={cat.name}
                fill
                className="object-cover px-4"
              />
            </div>

            <div className="flex items-center justify-between px-2 py-3 absolute bottom-3 trap bg-white/95  w-full -left-4 z-10  border border-gray-200  transform scale-95 ">
              <h3 className="text-lg font-semibold uppercase">{cat.name}</h3>
              <Link
                href={`/category/${cat.slug}`}
                className="text-sky-500 text-sm font-medium hover:underline"
              >
                Shop
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2  -translate-y-1/2   rounded-full p-2 text-6xl shadow lg:shadow-none bg-white z-30"
      >
        ›
      </button>
    </div>
  );
}
