'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Tag, TrendingUp } from 'lucide-react';

export default function Blog() {
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

      <div className="min-h-screen bg-white dark:bg-neutral">
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-neutral dark:to-base-300 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full mb-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
                <TrendingUp className="w-4 h-4" />
                <span className="body-text text-sm font-semibold uppercase tracking-wider">Our Blog</span>
              </div>

              {/* Main Title */}
              <h1 className={`elegant-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white mb-6 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                Stories & Recipes from<br />
                Our Kitchen
              </h1>

              {/* Description */}
              <p className={`body-text text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
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
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-base-100 border-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white rounded-full body-text text-black dark:text-white placeholder:text-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  
                  {/* Categories */}
                  <div className={`bg-gray-50 dark:bg-base-200 rounded-2xl p-6 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
                    <h3 className="elegant-title text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
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
                              ? 'bg-black dark:bg-white text-white dark:text-black'
                              : 'bg-white dark:bg-base-100 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-base-300'
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
                  <div className={`bg-gray-50 dark:bg-base-200 rounded-2xl p-6 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                    <h3 className="elegant-title text-2xl font-bold text-black dark:text-white mb-6">
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Italian', 'Pasta', 'Vegetarian', 'Desserts', 'Wine', 'Seasonal'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white dark:bg-base-100 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm body-text hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
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
                        className={`blog-card bg-white dark:bg-base-200 rounded-2xl overflow-hidden shadow-lg ${
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
                            <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full body-text text-sm font-semibold uppercase tracking-wider">
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 lg:p-8">
                          {/* Meta */}
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400 body-text">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </span>
                            <span className="text-black dark:text-white font-medium">
                              {post.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="elegant-title text-2xl lg:text-3xl font-bold text-black dark:text-white mb-3 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h2>

                          {/* Excerpt */}
                          <p className="body-text text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Read More */}
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-2 text-black dark:text-white body-text font-semibold hover:gap-3 transition-all group"
                          >
                            Read More
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="body-text text-xl text-gray-500 dark:text-gray-400">
                      No blog posts found. Try a different search or category.
                    </p>
                  </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <div className="join">
                      <button className="join-item btn btn-ghost border border-gray-200 dark:border-gray-700">«</button>
                      <button className="join-item btn bg-black dark:bg-white text-white dark:text-black border-none">1</button>
                      <button className="join-item btn btn-ghost border border-gray-200 dark:border-gray-700">2</button>
                      <button className="join-item btn btn-ghost border border-gray-200 dark:border-gray-700">3</button>
                      <button className="join-item btn btn-ghost border border-gray-200 dark:border-gray-700">»</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-black dark:bg-base-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="elegant-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="body-text text-lg text-gray-300 mb-8">
                Get the latest recipes, cooking tips, and restaurant news delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white dark:bg-base-100 text-black dark:text-white rounded-full body-text focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full body-text font-semibold uppercase tracking-wider transition-all transform hover:scale-105"
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