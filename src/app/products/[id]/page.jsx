"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Clock, Users, ChefHat } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://ingredish-server-site.vercel.app/api/products/${params.id}`,
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading dish details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <p className="text-gray-400 text-lg">Product not found</p>
      </div>
    );
  }

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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .product-image {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .product-image img {
          transition: transform 0.6s ease;
        }

        .product-image:hover img {
          transform: scale(1.05);
        }

        .category-badge {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #000;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;
          display: inline-block;
        }

        .price-display {
          font-family: "Cormorant Garamond", serif;
          font-size: 48px;
          font-weight: 700;
          color: #fbbf24;
          text-shadow: 0 2px 10px rgba(251, 191, 36, 0.3);
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .back-button:hover {
          color: #fbbf24;
          transform: translateX(-4px);
        }

        .info-card {
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .info-card-icon {
          width: 40px;
          height: 40px;
          background: rgba(251, 191, 36, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fbbf24;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/products"
            className="back-button body-text mb-8 inline-flex"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Menu
          </Link>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in">
            {/* LEFT SIDE - IMAGE */}
            <div className="product-image">
              <img
                src={product?.image}
                alt={product?.title}
                className="w-full h-[400px] lg:h-[600px] object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop";
                }}
              />

              {/* Category Badge Overlay */}
              <div className="absolute top-6 right-6">
                <div className="category-badge body-text">
                  {product?.category || "Featured"}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Title */}
              <h1 className="elegant-title text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {product?.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="body-text text-gray-400 text-sm">
                  (5.0 / 127 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="price-display">
                $
                {typeof product?.price === "number"
                  ? product.price.toFixed(2)
                  : Number(product?.price || 0).toFixed(2)}
              </div>

              {/* Short Description */}
              <p className="body-text text-xl text-gray-300 leading-relaxed">
                {product?.shortDescription}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>

              {/* Full Description */}
              <div>
                <h3 className="elegant-title text-2xl font-bold text-white mb-3">
                  Description
                </h3>
                <p className="body-text text-gray-400 leading-relaxed">
                  {product?.fullDescription}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="info-card">
                  <div className="info-card-icon">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="body-text text-xs text-gray-500">Prep Time</p>
                    <p className="body-text text-sm font-semibold text-white">
                      15-20 min
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="body-text text-xs text-gray-500">Serves</p>
                    <p className="body-text text-sm font-semibold text-white">
                      2-3 people
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="body-text text-xs text-gray-500">
                      Chef Special
                    </p>
                    <p className="body-text text-sm font-semibold text-white">
                      Recommended
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="body-text text-xs text-gray-500">Rating</p>
                    <p className="body-text text-sm font-semibold text-white">
                      5.0 / 5.0
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-yellow-400/50 body-text">
                  Order Now
                </button>

                <button className="flex-1 bg-gray-700/50 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all duration-200 body-text">
                  Add to Favorites
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
                <p className="body-text text-sm text-yellow-400">
                  🔥 Popular dish! Ordered 47 times this week
                </p>
              </div>
            </div>
          </div>

          {/* Additional Section - You Might Also Like (Optional) */}
          <div className="mt-16">
            <h2 className="elegant-title text-4xl font-bold text-white mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Placeholder for related products - you can fetch and map here */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl h-64 flex items-center justify-center">
                <p className="body-text text-gray-500">Related Product 1</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl h-64 flex items-center justify-center">
                <p className="body-text text-gray-500">Related Product 2</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl h-64 flex items-center justify-center">
                <p className="body-text text-gray-500">Related Product 3</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl h-64 flex items-center justify-center">
                <p className="body-text text-gray-500">Related Product 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}