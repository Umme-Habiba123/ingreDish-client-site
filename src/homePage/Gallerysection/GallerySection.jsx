'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Home, Cake, BookOpen, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
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
      { threshold: 0.1 }
    );

    const section = document.getElementById('art-gallery-section');
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
    { id: 'all', label: 'All', icon: ImageIcon },
    { id: 'food', label: 'Food & Drinks', icon: Coffee },
    { id: 'interior', label: 'Interior', icon: Home },
    { id: 'desserts', label: 'Desserts', icon: Cake },
    { id: 'recipes', label: 'Recipes', icon: BookOpen }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
      category: 'food',
      alt: 'Perfectly cooked steak'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
      category: 'food',
      alt: 'Gourmet pancakes with honey'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
      category: 'interior',
      alt: 'Restaurant interior dining'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
      category: 'food',
      alt: 'Grilled food platter'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
      category: 'interior',
      alt: 'Modern restaurant interior'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
        
        /* Gallery image hover effect */
        .gallery-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }
        
        .gallery-image-wrapper img {
          transition: transform 0.6s ease;
        }
        
        .gallery-image-wrapper:hover img {
          transform: scale(1.1);
        }
        
        .gallery-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .gallery-image-wrapper:hover .gallery-image-overlay {
          opacity: 1;
        }
        
        /* Category tab active state */
        .category-tab {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .category-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: currentColor;
        }
      `}</style>

      <section 
        id="art-gallery-section"
        className="py-16 lg:py-24 bg-black dark:bg-neutral"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            
            {/* Title */}
            <div className={`${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              <h2 className="elegant-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Art Gallery
              </h2>
            </div>

            {/* Category Tabs */}
            <div className={`flex flex-wrap gap-4 lg:gap-6 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`category-tab flex items-center gap-2 body-text text-sm lg:text-base font-medium transition-all duration-300 pb-2 ${
                      activeCategory === category.id
                        ? 'active text-yellow-400'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* See Full Gallery Button */}
            <div className={`${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <Link 
                href="/gallery"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 lg:px-8 py-3 body-text font-semibold uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105"
              >
                <ImageIcon className="w-5 h-5" />
                See Full Gallery
              </Link>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`gallery-image-wrapper ${
                  isVisible ? `animate-scale-in delay-${(index + 4) * 100}` : 'opacity-0'
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="gallery-image-overlay"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Show message if no images */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/60 body-text text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}