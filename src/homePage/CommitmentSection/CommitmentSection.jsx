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
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
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
        
        /* Year badge */
        .year-badge {
          position: absolute;
          top: -30px;
          right: 20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f4e4c1 0%, #e6d5a8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }
        
        @media (max-width: 768px) {
          .year-badge {
            width: 80px;
            height: 80px;
            font-size: 1.25rem;
            top: -20px;
            right: 10px;
          }
        }
        
        /* Image hover effects */
        .image-card {
          overflow: hidden;
          border-radius: 12px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        
        .image-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
        }
        
        .image-card img {
          transition: transform 0.6s ease;
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
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.5s ease;
        }
        
        .learn-more-btn:hover::before {
          left: 100%;
        }
      `}</style>

      <section 
        id="discover-story-section"
        className="relative py-16 lg:py-24 bg-white dark:bg-neutral overflow-hidden"
      >
        {/* Year Badge */}
        <div className={`year-badge ${isVisible ? 'animate-scale-in delay-100' : 'opacity-0'}`}>
          2025
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Top Left Image */}
              <div className={`image-card ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Fresh ingredients and vegetables"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className={`image-card mt-8 lg:mt-12 ${isVisible ? 'animate-fade-in-left delay-300' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Gourmet grilled skewers"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Small Title */}
              <div className={`${isVisible ? 'animate-fade-in-right delay-400' : 'opacity-0'}`}>
                <p className="elegant-script text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
                  Discover Our Story
                </p>
              </div>

              {/* Main Heading */}
              <h2 className={`elegant-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight ${isVisible ? 'animate-fade-in-right delay-500' : 'opacity-0'}`}>
                Our commitment to<br />
                freshness and quality
              </h2>

              {/* Description */}
              <p className={`body-text text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl ${isVisible ? 'animate-fade-in-right delay-600' : 'opacity-0'}`}>
                We believe exceptional dining begins with the finest ingredients. That's why we source only the freshest produce, and high-quality spices—often from trusted local farmers.
              </p>

              {/* Learn More Button */}
              <div className={`pt-4 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                <Link 
                  href="/about"
                  className="learn-more-btn inline-flex items-center gap-3 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-black dark:text-white px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-semibold uppercase tracking-wider transition-all duration-300 relative group"
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
              </div>

              {/* Decorative Line */}
              <div className={`pt-8 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                <div className="w-24 h-px bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-200/50 dark:bg-gray-800/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gray-200/50 dark:bg-gray-800/30 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </>
  );
}