
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}assets/logos.png`}
            alt="logo"
            className="w-full h-full object-contain p-1 rotate-3"
          />
        </div>
            <div>
              <h2 className="text-white text-xl font-bold tracking-tight">KING CHINESE</h2>
              <p className="text-xs text-red-500 font-bold tracking-widest uppercase">& Kebab</p>
            </div>
          </div>
          <p className="leading-relaxed">
            Serving Mumbai's most delicious Indo-Chinese and Middle Eastern fusion for over a decade. We pride ourselves on taste, quality, and hygiene.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold">Quick Links</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">View Menu</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Order Online</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <i className="fas fa-map-marker-alt text-red-600 mt-1"></i>
              <p>{RESTAURANT_INFO.address}</p>
            </div>
            <div className="flex gap-4">
              <i className="fas fa-phone text-red-600 mt-1"></i>
              <p>{RESTAURANT_INFO.phone}</p>
            </div>
            <div className="flex gap-4">
              <i className="fas fa-clock text-red-600 mt-1"></i>
              <p>Daily: 11:30 AM - 1:00 AM</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} King Chinese & Kebab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
