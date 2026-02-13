'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CommitmentSection() {
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

    const section = document.getElementById('discover-story-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .elegant-script {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
        }
        
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
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
        
        /* Image hover effects */
        .image-card {
          overflow: hidden;
          border-radius: 12px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .image-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          border-color: rgba(234, 179, 8, 0.3);
        }
        
        .image-card img {
          transition: transform 0.6s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .image-card:hover img {
          transform: scale(1.1);
        }
        
        /* Button animation */
        .learn-more-btn {
          position: relative;
          overflow: hidden;
        }
        
        .learn-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.5s ease;
          z-index: 1;
        }
        
        .learn-more-btn:hover::before {
          left: 100%;
        }
      `}</style>

      <section 
        id="discover-story-section"
        className="relative py-16 lg:py-24 bg-black"
      >
        {/* Subtle background pattern with yellow tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Three Images in Creative Layout */}
            <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
              {/* Top Left Image */}
              <div className="col-span-2 sm:col-span-1">
                <div className={`image-card ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Fresh ingredients and vegetables"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                </div>
              </div>

              {/* Top Right Image */}
              <div className="col-span-2 sm:col-span-1">
                <div className={`image-card ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Gourmet grilled skewers"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative yellow element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Small Title with Yellow-500 Accent */}
              <div className={`${isVisible ? 'animate-fade-in-right delay-500' : 'opacity-0'}`}>
                <p className="elegant-script text-xl sm:text-2xl text-yellow-500">
                  ✦ Discover Our Story ✦
                </p>
              </div>

              {/* Main Heading - White with Yellow-500 Accent Word */}
              <h2 className={`elegant-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight ${isVisible ? 'animate-fade-in-right delay-500' : 'opacity-0'}`}>
                Our commitment to<br />
                <span className="text-yellow-500">freshness</span> and quality
              </h2>

              {/* Description - Light Gray for readability */}
              <p className={`body-text text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl ${isVisible ? 'animate-fade-in-right delay-600' : 'opacity-0'}`}>
                We believe exceptional dining begins with the finest ingredients. That's why we source only the freshest produce, and high-quality spices—often from trusted local farmers.
              </p>

              {/* Stats with Yellow-500 Numbers */}
              <div className={`grid grid-cols-3 gap-4 pt-4 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                <div className="text-center sm:text-left">
                  <p className="elegant-title text-3xl font-bold text-yellow-500">15+</p>
                  <p className="body-text text-xs text-gray-400 mt-1">Years of Excellence</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="elegant-title text-3xl font-bold text-yellow-500">50+</p>
                  <p className="body-text text-xs text-gray-400 mt-1">Local Partners</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="elegant-title text-3xl font-bold text-yellow-500">100%</p>
                  <p className="body-text text-xs text-gray-400 mt-1">Fresh Ingredients</p>
                </div>
              </div>

              {/* Learn More Button with Yellow-500 */}
              <div className={`pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
                <Link 
                  href="/about"
                  className="learn-more-btn inline-flex items-center gap-3 border-2 border-yellow-500 bg-yellow-500 hover:bg-transparent text-black hover:text-yellow-500 px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-semibold uppercase tracking-wider transition-all duration-300 relative group"
                >
                  <span className="relative z-10">Learn More</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                {/* Secondary link */}
                <Link 
                  href="/menu"
                  className="text-gray-400 hover:text-yellow-500 text-sm font-medium transition-colors duration-300"
                >
                  View Our Menu →
                </Link>
              </div>

              {/* Decorative Line with Yellow-500 Gradient */}
              <div className={`pt-4 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
                <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements - Yellow tinted */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-500/3 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </>
  );
}