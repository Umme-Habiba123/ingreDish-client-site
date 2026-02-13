"use client";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
      {/* Top Subscribe Section */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide mb-8">
            LET’S CONNECT WITH US
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-none bg-transparent border-gray-400 focus:border-black dark:focus:border-white"
            />
            <button className="btn rounded-none bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 px-8">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Ingredish
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Discover delicious recipes crafted from the ingredients you love. 
            Smart cooking made simple and inspiring.
          </p>

          <div className="flex gap-4 mt-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-500 transition" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-500 transition" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-500 transition" />
          </div>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Information</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="hover:text-black dark:hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">Our Recipes</li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="hover:text-black dark:hover:text-white cursor-pointer">Submit Recipe</li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">Popular Dishes</li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> habibaislammim@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +880 0873333199
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ingredish. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
