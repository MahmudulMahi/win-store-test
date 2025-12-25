"use client";

import { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

export default function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#03484D] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex  items-center justify-between gap-3 ">
          <div className="flex gap-10">
            {/* Left */}
            {/* <div className="flex items-center gap-4">
              <img src="/logo/logo.png" alt="Win Store" className="h-10" />
            </div> */}
            <div className="flex items-center gap-4">
              <Image
                src="/logo/logo.png"
                alt="Win Store"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Search */}
            <div className="hidden md:flex w-xl">
              <select className="bg-[#FFFFFF] text-gray-700 px-3 py-2 rounded-l-md outline-none border-r border-[#AEAEAE]">
                <option>All categories</option>
              </select>
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 outline-none text-black bg-[#FFFFFF]"
              />
              <button className="bg-[#B6B6B6] px-4 rounded-r-md ">
                <FiSearch size={18} />
              </button>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4 text-sm ">
            <div className="hidden md:block ">
              <p className="text-xs">Call Us Now</p>
              <p className="font-semibold">+011 5827918</p>
              <p className="text-xs">Sign In</p>
            </div>

            <FiUser size={20} />
            <FiHeart size={20} />

            <div className="relative">
              <FiShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#0E3B3E] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-2">
          {/* Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="flex items-center gap-1">
              <FiMenu /> Browse By Category
            </a>
            <a href="#">Home</a>
            <a href="#">Easy Monthly Installments</a>
            <a href="#">Shop by Brands</a>
            <a href="#">Become a Vendor</a>
          </nav>

          {/* Social */}
          <div className="hidden md:flex gap-4 text-2xl">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#083f41] px-4 pb-4 space-y-3 text-sm">
            <a href="#" className="block">
              Browse By Category
            </a>
            <a href="#" className="block">
              Home
            </a>
            <a href="#" className="block">
              Easy Monthly Installments
            </a>
            <a href="#" className="block">
              Shop by Brands
            </a>
            <a href="#" className="block">
              Become a Vendor
            </a>

            <div className="flex gap-4 pt-2 ">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
