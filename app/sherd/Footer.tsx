import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-gray-300">
      {/* Main Footer */}
      <div className=" lg:w-[1205px] mx-auto pt-14 grid grid-cols-1 md:grid-cols-4 gap-10 lg:place-items-center px-5">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-4">
            <img src="/logo/logo.png" alt="Win Store" className="h-10" />
          </div>

          <p className="text-cyan-400 mb-2">Got questions? Call us 24/7!</p>

          <p className="text-sm">03 11 666 144</p>
          <p className="text-sm mb-4">0317 1777015</p>

          <p className="text-cyan-400">Contact info</p>
          <p className="text-sm mb-4">info@winstore.pk</p>

          <div className="flex gap-4 text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* Trending */}
        <div>
          <h3 className="text-cyan-400 mb-4 text-lg">Trending</h3>
          <ul className="space-y-2 text-sm">
            <li>Installments</li>
            <li>Electronics</li>
            <li>Grocery</li>
            <li>Health & Beauty</li>
            <li>Home Appliances</li>
            <li>Mobile Accessories</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-cyan-400 mb-4 text-lg">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Return</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-cyan-400 mb-4 text-lg">Customer Care</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Recently Viewed</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Become a Vendor</li>
          </ul>
        </div>
        {/* Payments */}
      </div>


      <div className="
  flex flex-wrap gap-3
  justify-center md:justify-end
  max-w-[220px] md:max-w-none
  mx-auto md:mx-0
  md:pr-44 py-8
">
  <Image
    src="/footerImage/visa.png"
    alt="Visa"
    width={97}
    height={55}
    className="bg-white p-1 rounded"
  />

  <Image
    src="/footerImage/master.png"
    alt="Mastercard"
    width={97}
    height={55}
    className="bg-white p-1 rounded"
  />

  <Image
    src="/footerImage/cash.png"
    alt="Cash"
    width={97}
    height={55}
    className="bg-white p-1 rounded"
  />

  <Image
    src="/footerImage/easy.png"
    alt="Easy Installment"
    width={97}
    height={55}
    className="bg-white p-1 rounded"
  />
</div>


      {/* Bottom Bar */}
      <div className="bg-[#161616] px-20 text-sm py-4 border-t border-gray-600">
        © 2021 Winstore. All Rights Reserved.
      </div>
    </footer>
  );
}
