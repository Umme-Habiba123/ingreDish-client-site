'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Tag, TrendingUp } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Posts', count: 12 },
    { id: 'recipes', label: 'Recipes', count: 5 },
    { id: 'tips', label: 'Cooking Tips', count: 3 },
    { id: 'events', label: 'Events', count: 2 },
    { id: 'news', label: 'News', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Perfect Pasta: Italian Cooking Secrets',
      excerpt: 'Discover the timeless techniques that transform simple ingredients into extraordinary Italian cuisine.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop',
      category: 'recipes',
      author: 'Chef Marco',
      date: '2025-02-10',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Farm to Table: Our Commitment to Fresh Ingredients',
      excerpt: 'Learn about our partnerships with local farmers and how we source the finest seasonal produce.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      category: 'news',
      author: 'Sarah Johnson',
      date: '2025-02-08',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      title: '10 Essential Knife Skills Every Home Cook Should Master',
      excerpt: 'Elevate your cooking with professional knife techniques that improve speed, safety, and presentation.',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop',
      category: 'tips',
      author: 'Chef Antonio',
      date: '2025-02-05',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Wine Pairing Guide: Enhancing Your Dining Experience',
      excerpt: 'Unlock the secrets of perfect wine pairings to complement every dish on our menu.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
      category: 'tips',
      author: 'Sommelier Emma',
      date: '2025-02-03',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Behind the Scenes: A Day in Our Kitchen',
      excerpt: 'Get an exclusive look at how our culinary team prepares over 200 meals daily with precision and passion.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
      category: 'news',
      author: 'Chef Marco',
      date: '2025-02-01',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 6,
      title: 'Spring Menu Launch: New Seasonal Delights',
      excerpt: 'Explore our new spring menu featuring fresh asparagus, peas, and vibrant herbs from local gardens.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
      category: 'events',
      author: 'Sarah Johnson',
      date: '2025-01-28',
      readTime: '5 min read',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .elegant-title {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .body-text {
          font-family: 'Montserrat', sans-serif;
        }
        
        /* Animations */
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
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
        
        /* Blog card hover effect */
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .blog-card img {
          transition: transform 0.6s ease;
        }
        
        .blog-card:hover img {
          transform: scale(1.1);
        }
      `}</style>

      <div className="min-h-screen bg-black">
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full mb-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
                <TrendingUp className="w-4 h-4" />
                <span className="body-text text-sm font-semibold uppercase tracking-wider">Our Blog</span>
              </div>

              {/* Main Title */}
              <h1 className={`elegant-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                Stories & Recipes from<br />
                Our Kitchen
              </h1>

              {/* Description */}
              <p className={`body-text text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-10 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                Discover culinary inspiration, cooking tips, and behind-the-scenes stories from the Ingredish team.
              </p>

              {/* Search Bar */}
              <div className={`max-w-xl mx-auto ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-neutral border-2 border-gray-700 focus:border-yellow-500 rounded-full body-text text-white placeholder:text-gray-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  
                  {/* Categories */}
                  <div className={`bg-neutral rounded-2xl p-6 border border-gray-800 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
                    <h3 className="elegant-title text-2xl font-bold text-yellow-500 mb-6 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg body-text font-medium transition-all ${
                            selectedCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-black border border-gray-800 text-gray-300 hover:bg-gray-900'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{category.label}</span>
                            <span className="text-sm opacity-60">{category.count}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className={`bg-neutral rounded-2xl p-6 border border-gray-800 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                    <h3 className="elegant-title text-2xl font-bold text-yellow-500 mb-6">
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Italian', 'Pasta', 'Vegetarian', 'Desserts', 'Wine', 'Seasonal'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-black border border-gray-700 text-gray-300 rounded-full text-sm body-text hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Blog Posts Grid */}
              <div className="lg:col-span-3">
                {filteredPosts.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <article
                        key={post.id}
                        className={`blog-card bg-neutral rounded-2xl overflow-hidden shadow-lg border border-gray-800 ${
                          isVisible ? `animate-scale-in delay-${(index + 3) * 100}` : 'opacity-0'
                        } ${post.featured ? 'sm:col-span-2' : ''}`}
                      >
                        {/* Image */}
                        <div className={`relative overflow-hidden ${post.featured ? 'h-96' : 'h-64'}`}>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          {post.featured && (
                            <div className="absolute top-4 left-4 bg-yellow-500 text-black px-4 py-2 rounded-full body-text text-sm font-semibold uppercase tracking-wider">
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 lg:p-8">
                          {/* Meta */}
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400 body-text">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </span>
                            <span className="text-yellow-500 font-medium">
                              {post.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="elegant-title text-2xl lg:text-3xl font-bold text-white mb-3 hover:text-yellow-500 transition-colors">
                            <a 
                              href={`https://www.google.com/search?q=${encodeURIComponent(post.title + ' recipe cooking tips')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {post.title}
                            </a>
                          </h2>

                          {/* Excerpt */}
                          <p className="body-text text-gray-400 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Read More */}
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(post.title + ' recipe cooking tips')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-yellow-500 body-text font-semibold hover:gap-3 transition-all group"
                          >
                            Read More
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="body-text text-xl text-gray-400">
                      No blog posts found. Try a different search or category.
                    </p>
                  </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <div className="join">
                      <button className="join-item btn bg-neutral hover:bg-gray-900 text-white border-gray-800">«</button>
                      <button className="join-item btn bg-yellow-500 hover:bg-yellow-600 text-black border-none">1</button>
                      <button className="join-item btn bg-neutral hover:bg-gray-900 text-white border-gray-800">2</button>
                      <button className="join-item btn bg-neutral hover:bg-gray-900 text-white border-gray-800">3</button>
                      <button className="join-item btn bg-neutral hover:bg-gray-900 text-white border-gray-800">»</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-neutral border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="elegant-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="body-text text-lg text-gray-400 mb-8">
                Get the latest recipes, cooking tips, and restaurant news delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-black border-2 border-gray-800 focus:border-yellow-500 text-white rounded-full body-text focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full body-text font-semibold uppercase tracking-wider transition-all transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}