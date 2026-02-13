'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PremiumHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .hero-section {
          font-family: 'Montserrat', sans-serif;
        }
        
        .elegant-title {
          font-family: 'Cormorant Garamond', serif;
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 1.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
        
        /* Decorative stars */
        .star {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }
        
        /* Image overlay gradient */
        .image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
        
        /* Premium badge */
        .premium-badge {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(234, 179, 8, 0.3);
        }
        
        /* Button glow effect */
        .btn-glow {
          position: relative;
          overflow: hidden;
        }
        
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(234, 179, 8, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .btn-glow:hover::before {
          width: 300px;
          height: 300px;
        }
        
        /* Ribbon decoration */
        .ribbon-decoration {
          position: relative;
        }
        
        .ribbon-decoration::before,
        .ribbon-decoration::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 2px;
          background: #eab308;
          top: 50%;
          opacity: 0.5;
        }
        
        .ribbon-decoration::before {
          left: -120px;
        }
        
        .ribbon-decoration::after {
          right: -120px;
        }
        
        @media (max-width: 768px) {
          .ribbon-decoration::before,
          .ribbon-decoration::after {
            display: none;
          }
        }
      `}</style>

      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        
        {/* Background Image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className={`w-full h-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Premium food background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="image-overlay absolute inset-0"></div>
          </div>
        </div>

        {/* Subtle yellow background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Decorative Stars - Yellow */}
            <div className={`flex justify-center gap-2 mb-6 ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
              <svg className="star text-yellow-500 animate-float" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <svg className="star text-yellow-500 animate-float" style={{ animationDelay: '0.3s' }} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <svg className="star text-yellow-500 animate-float" style={{ animationDelay: '0.6s' }} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            {/* Main Heading with Yellow Accent */}
            <h1 className={`elegant-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              Ing<span className="text-yellow-500">redi</span>sh
            </h1>

            {/* Premium Badge with Yellow Border */}
            <div className={`inline-flex items-center gap-3 premium-badge px-6 py-3 rounded-full mb-8 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-yellow-500">
                Premium Goods
              </span>
              <span className="w-px h-4 bg-yellow-500/30"></span>
              <span className="text-xs sm:text-sm font-light italic text-gray-300">
                Bon Appétit
              </span>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
              Experience the finest culinary delights crafted with passion and precision. 
              Where exceptional ingredients meet extraordinary taste.
            </p>

            {/* CTA Buttons - Updated with Yellow Theme */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <Link 
                href="/menu"
                className="btn-glow inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black border-none px-8 lg:px-12 py-3 text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                Explore Menu
              </Link>
              <Link 
                href="/reservation"
                className="btn-glow inline-flex items-center justify-center bg-transparent hover:bg-yellow-500/10 text-white border-2 border-yellow-500 px-8 lg:px-12 py-3 text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                Make Reservation
              </Link>
            </div>

            {/* Decorative Scroll Indicator with Yellow */}
            <div className={`mt-16 lg:mt-20 ${isVisible ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-light text-gray-400">Scroll to Discover</span>
                <svg 
                  className="w-6 h-6 animate-bounce text-yellow-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Corner Ornaments in Yellow */}
        <div className="absolute top-8 left-8 opacity-30 pointer-events-none hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-yellow-500">
            <path d="M30 0L35 15L50 10L40 25L55 30L40 35L50 50L35 45L30 60L25 45L10 50L20 35L5 30L20 25L10 10L25 15L30 0Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 opacity-30 pointer-events-none hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-yellow-500">
            <path d="M30 0L35 15L50 10L40 25L55 30L40 35L50 50L35 45L30 60L25 45L10 50L20 35L5 30L20 25L10 10L25 15L30 0Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Additional Yellow Decorative Elements */}
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </>
  );
}