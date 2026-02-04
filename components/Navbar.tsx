
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-stone-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform -rotate-3">
            K
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-stone-900 leading-tight">KING</h1>
            <p className="text-[10px] tracking-widest text-red-600 font-bold uppercase">Chinese & Kebab</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#menu" className="hover:text-red-600 transition-colors">Menu</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2">
           <a 
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <i className="fas fa-phone"></i>
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
