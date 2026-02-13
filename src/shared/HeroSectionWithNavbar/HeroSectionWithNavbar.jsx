'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronDown,
  Calendar,
  Clock,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HeroSectionWithNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    person: '',
    date: '',
    time: ''
  });

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop',
      title: 'Ingredish experience flavors sizzle',
      subtitle: 'Welcome To Ingredish'
    },
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop',
      title: 'Premium ingredients, exceptional taste',
      subtitle: 'Culinary Excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop',
      title: 'Where dining becomes an art',
      subtitle: 'Experience Luxury'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation:', formData);
    alert('Table reservation submitted!');
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
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
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 1.5s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
        .delay-700 { animation-delay: 0.7s; opacity: 0; }
        
        /* Slide transition */
        .slide-transition {
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
        
        /* Year badge */
        .year-badge {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f4e4c1 0%, #e6d5a8 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .year-badge {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>

      <div className="relative min-h-screen overflow-hidden bg-black dark:bg-neutral">
        
        {/* Navbar */}
        <nav className={`absolute top-0 left-0 right-0 z-50 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 lg:h-24">
              
              {/* Left Menu - Desktop */}
              <div className="hidden lg:flex items-center gap-8">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors body-text font-medium flex items-center gap-1">
                  Home <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/pages" className="text-white hover:text-gray-300 transition-colors body-text font-medium flex items-center gap-1">
                  Pages <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/reservation" className="text-white hover:text-gray-300 transition-colors body-text font-medium">
                  Reservation
                </Link>
                <Link href="/blog" className="text-white hover:text-gray-300 transition-colors body-text font-medium flex items-center gap-1">
                  Blog <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/shop" className="text-white hover:text-gray-300 transition-colors body-text font-medium flex items-center gap-1">
                  Shop <ChevronDown className="w-4 h-4" />
                </Link>
              </div>

              {/* Center Logo */}
              <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg transform rotate-45">
                  <span className="elegant-title text-2xl lg:text-3xl font-bold text-black block transform -rotate-45">
                    Ingredish
                  </span>
                </div>
              </Link>

              {/* Right Icons - Desktop */}
              <div className="hidden lg:flex items-center gap-6">
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    0
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10">
              <div className="container mx-auto px-4 py-6 space-y-4">
                <Link href="/" className="block text-white hover:text-gray-300 transition-colors body-text">Home</Link>
                <Link href="/pages" className="block text-white hover:text-gray-300 transition-colors body-text">Pages</Link>
                <Link href="/reservation" className="block text-white hover:text-gray-300 transition-colors body-text">Reservation</Link>
                <Link href="/blog" className="block text-white hover:text-gray-300 transition-colors body-text">Blog</Link>
                <Link href="/shop" className="block text-white hover:text-gray-300 transition-colors body-text">Shop</Link>
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <button className="text-white"><Search className="w-5 h-5" /></button>
                  <button className="text-white relative">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Slider */}
        <div className="relative h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 slide-transition ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
          ))}

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                {/* Subtitle */}
                <p className={`elegant-script text-2xl sm:text-3xl lg:text-4xl text-yellow-400 mb-4 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                  {slides[currentSlide].subtitle}
                </p>

                {/* Main Title */}
                <h1 className={`elegant-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                  {slides[currentSlide].title}
                </h1>

                {/* Reservation Form */}
                <div className={`${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="elegant-title text-xl sm:text-2xl text-yellow-400 font-semibold">
                      Book a Dish
                    </h3>
                    <div className="h-px flex-1 bg-white/30 max-w-xs"></div>
                    <p className="text-white/80 text-sm body-text hidden sm:block">
                      Reserve your dish today for the perfect Ingredish experience.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="form-control w-full sm:w-auto">
                      <input
                        type="number"
                        placeholder="Person*"
                        min="1"
                        max="20"
                        value={formData.person}
                        onChange={(e) => setFormData({...formData, person: e.target.value})}
                        className="input bg-transparent border-2 border-white/30 focus:border-yellow-400 text-white placeholder:text-white/60 w-full sm:w-40"
                        required
                      />
                    </div>

                    <div className="form-control w-full sm:w-auto">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="input bg-transparent border-2 border-white/30 focus:border-yellow-400 text-white w-full sm:w-48"
                        required
                      />
                    </div>

                    <div className="form-control w-full sm:w-auto">
                      <input
                        type="time"
                        placeholder="Time*"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="input bg-transparent border-2 border-white/30 focus:border-yellow-400 text-white placeholder:text-white/60 w-full sm:w-40"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 border-none text-black font-bold uppercase tracking-wider px-8 w-full sm:w-auto"
                    >
                      Book a Dish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 right-8 z-30 flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-12 bg-yellow-400' 
                    : 'w-8 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}