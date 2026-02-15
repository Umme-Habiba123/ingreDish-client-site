"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  UtensilsCrossed,
  Coffee,
  Cake,
  Soup,
  Salad,
  Plus,
} from "lucide-react";
import ProductCard from "../home/ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("products-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const categories = [
    { id: "all", label: "All Dishes", icon: UtensilsCrossed },
    { id: "appetizer", label: "Appetizers", icon: Soup },
    { id: "main-course", label: "Main Course", icon: UtensilsCrossed },
    { id: "dessert", label: "Desserts", icon: Cake },
    { id: "beverage", label: "Beverages", icon: Coffee },
    { id: "salad", label: "Salads", icon: Salad },
  ];

  const fetchProducts = async (text = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://ingredish-server-site.vercel.app/api/products?search=${text}`,
      );
      const data = await res.json();
      console.log("API Response:", data); // Should show array of products

      // IMPORTANT: Backend returns array directly, NOT { products: [...] }
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(search);
  }, [search]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  console.log("Active category:", activeCategory);
  console.log("Filtered products:", filteredProducts);
  console.log("Total products:", products.length);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap");

        .elegant-title {
          font-family: "Cormorant Garamond", serif;
        }

        .body-text {
          font-family: "Montserrat", sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }
        .delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
        .delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }
        .delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }

        .category-tab {
          position: relative;
          transition: all 0.3s ease;
        }

        .category-tab.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: currentColor;
        }

        .search-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 20px 12px 48px;
          border-radius: 50px;
          width: 100%;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: #fbbf24;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-wrapper {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <section
        id="products-section"
        className="py-16 lg:py-24 bg-black dark:bg-neutral"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div
              className={`${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
            >
              <h2 className="elegant-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Our Menu
              </h2>
            </div>

            <div
              className={`${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"} w-full lg:w-auto`}
            >
              <div className="search-wrapper max-w-md">
                <Search className="search-icon w-5 h-5" />
                <input
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search dishes..."
                  className="search-input body-text"
                />
              </div>
            </div>

            <div
              className={`${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}
            >
              <Link
                href="/addProduct"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 lg:px-8 py-3 body-text font-semibold uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                Add Dish
              </Link>
            </div>
          </div>

          {/* Category Tabs */}
          <div
            className={`flex flex-wrap gap-4 lg:gap-6 mb-12 ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`category-tab flex items-center gap-2 body-text text-sm lg:text-base font-medium transition-all duration-300 pb-2 ${
                    activeCategory === category.id
                      ? "active text-yellow-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20 min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid mx-auto mb-4"></div>
                <p className="text-white/60 body-text text-lg">
                  Loading delicious dishes...
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product._id}
                    className={`${
                      isVisible
                        ? `animate-scale-in delay-${Math.min((index + 5) * 100, 1000)}`
                        : "opacity-0"
                    }`}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-white/60 body-text text-lg">
                    No dishes found{" "}
                    {activeCategory !== "all" && "in this category"}.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}