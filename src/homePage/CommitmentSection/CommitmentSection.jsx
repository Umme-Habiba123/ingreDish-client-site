'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CommitmentSection() {
  return (
    <section className="bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/assets/food1.jpg"
                alt="Fresh ingredients"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[120px]">
              <img
                src="/assets/food2.jpg"
                alt="Quality dish"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

          </div>

          {/* Content */}
          <div className="text-center lg:text-left">

            <span className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400">
              Discover Our Story
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-black dark:text-white">
              Our commitment to <br /> freshness and quality
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe exceptional dining begins with the finest ingredients. 
              That’s why we source only the freshest produce and high-quality spices 
              from trusted local farmers.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 rounded-full"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}
