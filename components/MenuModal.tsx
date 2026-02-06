
import React from 'react';
import { Category } from '../types';

interface MenuModalProps {
  category: Category;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ category, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/40 text-stone-900 rounded-full flex items-center justify-center transition-all"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="relative h-48 overflow-hidden">
          <img src={category.image} className="w-full h-full object-cover" alt={category.label} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <h2 className="text-3xl font-serif font-black text-white">{category.label}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-100 text-stone-400 text-xs font-bold uppercase tracking-widest">
            <span>Item Name</span>
            <div className="flex gap-12">
              <span>Half</span>
              <span>Full</span>
            </div>
          </div>

          <div className="space-y-4">
            {category.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="font-semibold text-stone-800 group-hover:text-red-600 transition-colors">
                  {item.name}
                </span>
                <div className="flex items-center gap-10 font-mono text-stone-900">
                  <span className="w-12 text-right">
                    {item.halfPrice ? `₹${item.halfPrice}` : "-"}
                  </span>
                  <span className="w-12 text-right font-bold">
                    ₹{item.fullPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100">
             <p className="text-xs text-stone-400 italic">* All prices are subject to change. Taxes as applicable.</p>
          </div>
        </div>

        <div className="p-6 bg-stone-50 flex gap-4">
          <a 
            href="tel:+919876543210" 
            className="flex-1 bg-red-600 text-white text-center py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
