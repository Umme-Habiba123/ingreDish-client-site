"use client";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white transition-colors duration-300">
      
      {/* Top Subscribe Section with Yellow Accent */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide mb-8">
            LET'S <span className="text-yellow-500">CONNECT</span> WITH US
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-transparent border border-gray-700 focus:border-yellow-500 text-white placeholder-gray-500 outline-none transition-colors"
            />
            <button className="px-8 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors tracking-wider">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Subscribe to get exclusive recipes and cooking tips
          </p>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Ing<span className="text-yellow-500">redi</span>sh
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover delicious recipes crafted from the ingredients you love. 
            Smart cooking made simple and inspiring.
          </p>

          <div className="flex gap-4 mt-6">
  <a href="https://www.instagram.com/mahiya_mimu/" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors" />
  </a>

  <a href="https://www.facebook.com/mahiya.rahman.540132" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors" />
  </a>

  <a href="https://x.com/mahiya_rehman" target="_blank" rel="noopener noreferrer">
    <Twitter className="w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors" />
  </a>
</div>

        </div>

        {/* Information */}
        <div>
          <h4 className="font-semibold mb-4 text-lg text-yellow-500">Information</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Our Recipes</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">FAQ</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg text-yellow-500">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Submit Recipe</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Popular Dishes</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg text-yellow-500">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <MapPin size={16} className="text-yellow-500" /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Mail size={16} className="text-yellow-500" /> habibaislammim@gmail.com
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Phone size={16} className="text-yellow-500" /> +880 0873333199
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom with Yellow Accent */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} <span className="text-yellow-500">Ingredish</span>. All Rights Reserved.</p>
        </div>
      </div>

      {/* Decorative Yellow Elements */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}