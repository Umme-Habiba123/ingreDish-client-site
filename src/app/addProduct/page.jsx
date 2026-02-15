"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const url = e.target.value;
    setImagePreview(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      image: e.target.photo.value,
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      price: parseFloat(e.target.price.value),
      category: e.target.category.value,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Dish added successfully!",
          showConfirmButton: false,
          timer: 1500,
          background: "#1a1a1a",
          color: "#fff",
        });
        e.target.reset();
        setImagePreview("");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add dish. Please try again.",
        background: "#1a1a1a",
        color: "#fff",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Add New <span className="text-yellow-400">Dish</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Create a delicious addition to your menu
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Section with Preview */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Dish Image URL *
                </label>
                <input
                  type="url"
                  name="photo"
                  required
                  onChange={handleImageChange}
                  placeholder="https://example.com/delicious-dish.jpg"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
                {imagePreview && (
                  <div className="mt-4 rounded-xl overflow-hidden border-2 border-yellow-400/30">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-64 object-cover"
                      onError={() => setImagePreview("")}
                    />
                  </div>
                )}
              </div>

              {/* Title and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Dish Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g., Grilled Salmon with Herbs"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  >
                    <option value="">Select Category</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="main-course">Main Course</option>
                    <option value="dessert">Dessert</option>
                    <option value="beverage">Beverage</option>
                    <option value="salad">Salad</option>
                    <option value="soup">Soup</option>
                  </select>
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Price (USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 text-xl font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    required
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Short Description *
                </label>
                <textarea
                  name="shortDescription"
                  required
                  rows="3"
                  maxLength="150"
                  placeholder="A brief, appetizing description (max 150 characters)"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Description *
                </label>
                <textarea
                  name="fullDescription"
                  required
                  rows="6"
                  placeholder="Provide detailed information about ingredients, preparation, taste profile, and serving suggestions..."
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  🍽️ Add Dish to Menu
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>All fields marked with * are required</p>
        </div>
      </div>
    </div>
  );
}