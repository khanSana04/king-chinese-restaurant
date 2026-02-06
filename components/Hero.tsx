
import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO, MENU_CATEGORIES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = MENU_CATEGORIES.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[650px] overflow-hidden bg-stone-900">
      
      {/* Slideshow background */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-40 scale-110' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s ease-in-out, transform 8s linear'
          }}
        />
      ))}

      {/* Content overlay */}
      

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">

        {/* Animated Badge */}


    <div className="mb-8 sm:mb-10 animate-bounce cursor-default">
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transform -rotate-6">
    <img
      src={`${import.meta.env.BASE_URL}assets/logos.png`}
      alt="King Logo"
      className="
        w-full h-full
        object-contain
        rotate-6
        select-none
        drop-shadow-[0_0_18px_rgba(220,38,38,0.45)]
        sm:drop-shadow-[0_0_22px_rgba(220,38,38,0.5)]
        md:drop-shadow-[0_0_26px_rgba(220,38,38,0.55)]
      "
    />
  </div>
</div>



        


        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <span className="flex items-center gap-1 text-yellow-400 font-bold">
            <i className="fas fa-star text-xs"></i>
            {RESTAURANT_INFO.rating}
          </span>
          <span className="w-1 h-1 bg-white/40 rounded-full"></span>
          <span className="text-white text-xs font-medium tracking-wide uppercase">Top Rated in Kurla</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl text-white font-black mb-4 drop-shadow-2xl">
          King <span className="text-red-500">Chinese</span> & <span className="text-red-500">Kebab</span>
        </h1>
        
        <p className="max-w-2xl text-stone-200 text-lg md:text-xl mb-10 drop-shadow-md">
          Authentic Mumbai-style Chinese and charcoal grilled Kebabs. Home of the famous Raan Kepsa and Juicy Shawarma.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
          <a 
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace('+', '')}?text=Hi! I would like to place an order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-500/20 transition-all active:scale-95 group"
          >
            <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
            WhatsApp Order
          </a>
          <a 
            href="#menu"
            className="flex items-center justify-center gap-3 bg-white hover:bg-stone-100 text-stone-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all active:scale-95"
          >
            <i className="fas fa-utensils"></i>
            View Menu
          </a>
        </div>
        
        <div className="mt-8 flex items-center gap-6">
           <a 
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white flex items-center gap-2 transition-colors underline underline-offset-4 decoration-white/20"
          >
            <i className="fas fa-map-marker-alt"></i>
            Get Directions
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-10 bg-red-600' : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
