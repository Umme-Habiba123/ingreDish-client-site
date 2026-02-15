"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

export default function ProductCard({ product }) {
  // Ensure product exists and has required fields
  if (!product) {
    return null;
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

        .product-card-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          background: #000;
        }

        .product-card-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        .product-card-wrapper img {
          transition: transform 0.6s ease;
        }

        .product-card-wrapper:hover img {
          transform: scale(1.1);
        }

        .product-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
        }

        .product-card-wrapper:hover .product-card-overlay {
          opacity: 1;
        }

        .category-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(251, 191, 36, 0.95);
          color: #000;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 10;
        }

        .price-tag {
          font-family: "Cormorant Garamond", serif;
          font-size: 32px;
          font-weight: 700;
          color: #fbbf24;
        }

        .view-btn {
          background: rgba(255, 255, 255, 0.95);
          color: #000;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .view-btn:hover {
          background: #fbbf24;
          transform: scale(1.05);
        }
      `}</style>

      <div className="product-card-wrapper">
        {/* Category Badge */}
        {product.category && (
          <div className="category-badge body-text">{product.category}</div>
        )}

        {/* Product Image */}
        <div className="aspect-[4/3] relative">
          <img
            src={product.image || "/placeholder-food.jpg"}
            alt={product.title || "Dish"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop";
            }}
          />

          {/* Overlay - shows on hover */}
          <div className="product-card-overlay">
            <h3 className="elegant-title text-2xl font-bold text-white mb-2">
              {product.title || "Untitled Dish"}
            </h3>

            <p className="body-text text-sm text-white/80 mb-4 line-clamp-2">
              {product.shortDescription || "A delicious dish crafted with care"}
            </p>

            <div className="flex items-center justify-between">
              <div className="price-tag">
                $
                {typeof product.price === "number"
                  ? product.price.toFixed(2)
                  : Number(product.price || 0).toFixed(2)}
              </div>

              <Link
                href={`/products/${product._id}`}
                className="view-btn body-text"
              >
                <Eye className="w-4 h-4" />
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}