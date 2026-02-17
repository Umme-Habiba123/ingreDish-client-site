'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Clock, 
  Users, 
  Flame, 
  ChefHat, 
  X, 
  Star,
  Heart,
  Share2,
  Search,
  Plus
} from 'lucide-react';

export default function FoodGallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedFood, setSelectedFood] = useState(null);

  // Food Gallery data - EXTENDED
  const foodItems = [
    {
      id: 1,
      category: 'BREAKFAST',
      image: '/assests/b1.jpg',
      title: 'Fluffy Pancakes',
      description: 'Soft and fluffy homemade pancakes topped with fresh berries and maple syrup. Perfect morning treat .',
      prepTime: '15',
      difficulty: 'Easy',
      serves: '4',
      calories: '320',
      rating: 4.8
    },
    {
      id: 2,
      category: 'LUNCH',
      image: '/assests/l1.jpg',
      title: 'Chicken Biryani',
      description: 'Aromatic basmati rice layered with tender chicken and exotic spices. A traditional favorite.',
      prepTime: '60',
      difficulty: 'Medium',
      serves: '6',
      calories: '450',
      rating: 5.0
    },
    {
      id: 3,
      category: 'DINNER',
      image: '/assests/d1.avif',
      title: 'Creamy Pasta Alfredo',
      description: 'Rich and creamy pasta with garlic, parmesan cheese, and fresh herbs. Comfort food perfection.',
      prepTime: '25',
      difficulty: 'Easy',
      serves: '3',
      calories: '520',
      rating: 4.7
    },
    {
      id: 4,
      category: 'DESSERTS',
      image: '/assests/des1.webp',
      title: 'Chocolate Lava Cake',
      description: 'Decadent chocolate cake with a molten center. Served warm with vanilla ice cream.',
      prepTime: '30',
      difficulty: 'Hard',
      serves: '2',
      calories: '380',
      rating: 4.9
    },
    {
      id: 5,
      category: 'SNACKS',
      image: '/assests/s1.jpg',
      title: 'Crispy Samosas',
      description: 'Golden-fried pastries filled with spiced potatoes and peas. Perfect tea-time snack.',
      prepTime: '40',
      difficulty: 'Medium',
      serves: '8',
      calories: '180',
      rating: 4.6
    },
    {
      id: 6,
      category: 'BEVERAGES',
      image: '/assests/be1.webp',
      title: 'Tropical Smoothie Bowl',
      description: 'Refreshing blend of mango, banana, and coconut topped with fresh fruits and granola.',
      prepTime: '10',
      difficulty: 'Easy',
      serves: '2',
      calories: '210',
      rating: 4.8
    },
    {
      id: 7,
      category: 'BREAKFAST',
      image: '/assests/b2.jpg',
      title: 'Classic Omelette',
      description: 'Fluffy eggs with cheese, vegetables and fresh herbs. Quick and nutritious breakfast.',
      prepTime: '10',
      difficulty: 'Easy',
      serves: '2',
      calories: '240',
      rating: 4.5
    },
    {
      id: 8,
      category: 'LUNCH',
      image: '/assests/l2.jpg',
      title: 'Gourmet Burger',
      description: 'Juicy beef patty with melted cheese, crispy bacon, and special sauce in a toasted bun.',
      prepTime: '20',
      difficulty: 'Easy',
      serves: '4',
      calories: '680',
      rating: 4.7
    },
    {
      id: 9,
      category: 'DINNER',
      image: '/assests/d3.jpg',
      title: 'Butter Chicken',
      description: 'Tender chicken in rich tomato-based curry sauce with aromatic spices and cream.',
      prepTime: '45',
      difficulty: 'Medium',
      serves: '5',
      calories: '420',
      rating: 4.9
    },
    {
      id: 10,
      category: 'SNACKS',
      image: '/assests/s3.webp',
      title: 'Margherita Pizza',
      description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil on crispy crust.',
      prepTime: '35',
      difficulty: 'Medium',
      serves: '4',
      calories: '550',
      rating: 4.8
    },
    {
      id: 11,
      category: 'DESSERTS',
      image: '/assests/des2.webp',
      title: 'Caramel Pudding',
      description: 'Smooth and creamy caramel pudding with vanilla essence. A timeless dessert classic.',
      prepTime: '35',
      difficulty: 'Medium',
      serves: '6',
      calories: '290',
      rating: 4.6
    },
    {
      id: 12,
      category: 'BEVERAGES',
      image: '/assets/be3.png',
      title: 'Fresh Mint Lemonade',
      description: 'Refreshing homemade lemonade with fresh mint leaves and natural sweetness.',
      prepTime: '8',
      difficulty: 'Easy',
      serves: '4',
      calories: '95',
      rating: 4.7
    },
  ];

  const categories = [
    { name: 'ALL', label: 'All Recipes' },
    { name: 'BREAKFAST', label: 'Breakfast' },
    { name: 'LUNCH', label: 'Lunch' },
    { name: 'DINNER', label: 'Dinner' },
    { name: 'SNACKS', label: 'Snacks' },
    { name: 'DESSERTS', label: 'Desserts' },
    { name: 'BEVERAGES', label: 'Beverages' }
  ];

  const filteredItems = activeFilter === 'ALL' 
    ? foodItems 
    : foodItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Header */}
      <div className="bg-black text-white py-20 px-4 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-yellow-500/30">
            <ChefHat className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-500">Homemade Recipes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Food Gallery
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover delicious recipes crafted with love and fresh ingredients
          </p>

          {/* Add Recipe Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-yellow-500/50 inline-flex items-center gap-3 group">
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Add Recipe
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Filter Pills */}
        <div className="bg-gray-900 rounded-2xl shadow-xl p-4 mb-10 border border-gray-800">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                  ${activeFilter === category.name 
                    ? 'bg-yellow-500 text-black shadow-lg scale-105' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105 border border-gray-700'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedFood(item)}
              className="group cursor-pointer bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2 border border-gray-800"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                {/* Next.js Image Component */}
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1.5 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <span className="text-xs font-bold text-gray-800">{item.rating}</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-white mb-2 text-xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                  
                  {/* Quick Info */}
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.prepTime}m</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.serves}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.calories}</span>
                    </div>
                  </div>
                </div>

                {/* View Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                  <div className="bg-yellow-500 rounded-full p-4 shadow-2xl">
                    <Search className="w-6 h-6 text-black" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 bg-gray-900 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {item.difficulty}
                  </span>
                  <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-gray-900 rounded-3xl shadow-lg border border-gray-800">
            <ChefHat className="w-20 h-20 mx-auto text-gray-700 mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-2">No recipes found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-white">Ingredish</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Discover and share delicious homemade recipes with food lovers around the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-gray-400 hover:text-black p-3 rounded-full transition-all">
                  <Share2 className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-gray-400 hover:text-black p-3 rounded-full transition-all">
                  <Heart className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 text-gray-400 hover:text-black p-3 rounded-full transition-all">
                  <Star className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Ingredish. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> by our team
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedFood && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedFood(null)}
        >
          <div 
            className="bg-gray-900 rounded-3xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-80 md:h-96">
              <Image 
                src={selectedFood.image}
                alt={selectedFood.title}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedFood(null)}
                className="absolute top-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-full p-2.5 hover:bg-yellow-500 transition-all shadow-lg hover:scale-110 z-10 border border-gray-700 group"
              >
                <X className="w-5 h-5 text-gray-300 group-hover:text-black" />
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-yellow-500 px-5 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-black uppercase tracking-wide">
                  {selectedFood.category}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(selectedFood.rating) ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-600 text-gray-600'}`} 
                    />
                  ))}
                  <span className="text-white font-bold ml-2">{selectedFood.rating}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                {selectedFood.title}
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {selectedFood.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl p-6 text-center border border-yellow-500/30">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
                  <div className="font-bold text-xl text-white mb-1">{selectedFood.prepTime}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Minutes</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 text-center border border-blue-500/30">
                  <Users className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="font-bold text-xl text-white mb-1">{selectedFood.serves}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Servings</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-6 text-center border border-red-500/30">
                  <Flame className="w-8 h-8 mx-auto mb-3 text-red-400" />
                  <div className="font-bold text-xl text-white mb-1">{selectedFood.calories}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Calories</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 text-center border border-green-500/30">
                  <ChefHat className="w-8 h-8 mx-auto mb-3 text-green-400" />
                  <div className="font-bold text-xl text-white mb-1">{selectedFood.difficulty}</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Level</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-yellow-500 text-black font-bold py-4 rounded-2xl hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/50 flex items-center justify-center gap-2 group">
                  <ChefHat className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Start Cooking
                </button>
                <button className="flex-1 bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save Recipe
                </button>
                <button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-700 transition-all border border-gray-700 flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}