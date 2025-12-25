"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="w-full ">
      <Swiper
        modules={[Pagination, ]}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 4000 }}
        // loop
        className="max-w-[1400px] mx-auto h-[340px] md:h-full"
      >
        {/* Slide */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center px-6 md:px-14  gap-8 bg-[url('/slider/hero-bg.png')] bg-cover  bg-center bg-no-repeat h-full">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left py-5">
              <h1 className="text-3xl md:text-5xl font-light text-gray-900">
                Shop <span className="text-teal-500 font-medium">Computer</span>
              </h1>

              <h2 className="text-3xl md:text-5xl font-light text-teal-500 mt-2">
                & experience
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-md mt-4">
                You Cannot Inspect Quality Into The Product; It Is Already
                There. 
              </p>

              <p className="text-sm md:text-base text-gray-600 max-w-md mt-1">
              I Am Not A Product Of My Circumstances. I Am A Product Of
                My Decisions.
              </p>

              <button className="mt-6 bg-[#14B1F0] text-white px-8 py-2 rounded-md hover:bg-teal-600 transition">
                View More
              </button>
            </div>

            {/* Right Images */}
            <div className="flex-1 relative lg:flex justify-center items-center hidden ">
              {/* Discount Badge */}
              <div className="absolute bottom-5 right-28 bg-orange-400 text-white w-28 h-28 rounded-full flex flex-col items-center justify-center text-xl font-semibold">
                40%
                <span className="text-sm font-normal">Off</span>
              </div>

            </div>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center px-6 md:px-14  gap-8 bg-[url('/slider/hero-bg.png')] bg-cover  bg-center bg-no-repeat">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left py-5">
              <h1 className="text-3xl md:text-5xl font-light text-gray-900">
                Shop <span className="text-teal-500 font-medium">Computer</span>
              </h1>

              <h2 className="text-3xl md:text-5xl font-light text-teal-500 mt-2">
                & experience
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-md mt-4">
                You Cannot Inspect Quality Into The Product; It Is Already
                There. 
              </p>

              <p className="text-sm md:text-base text-gray-600 max-w-md mt-1">
              I Am Not A Product Of My Circumstances. I Am A Product Of
                My Decisions.
              </p>

              <button className="mt-6 bg-[#14B1F0] text-white px-8 py-2 rounded-md hover:bg-teal-600 transition">
                View More
              </button>
            </div>

            
            <div className="flex-1 relative lg:flex justify-center items-center hidden ">
              {/* Discount Badge */}
              <div className="absolute bottom-5 right-28 bg-orange-400 text-white w-28 h-28 rounded-full flex flex-col items-center justify-center text-xl font-semibold">
                40%
                <span className="text-sm font-normal">Off</span>
              </div>

            </div>
          </div>
        </SwiperSlide>

        
        <style jsx>{`
          :global(.swiper-pagination-bullet) {
            width: 40px !important;
            height: 15px !important;
            border-radius: 40px !important; /* square-ish */
            background-color: #38b2ac !important; /* teal-500 */
            opacity: 1 !important;
          }
          :global(.swiper-pagination-bullet-active) {
            background-color: #319795 !important; /* darker teal */
          }
        `}</style>
      </Swiper>
    </section>
  );
}
