
import React from 'react';
import { Category } from '../types';

interface MenuCardProps {
  category: Category;
  onClick: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ category, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-100"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={category.image} 
          alt={category.label}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
          {category.label}
        </h3>
        <p className="text-stone-300 text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View all items
        </p>
        <div className="h-1 w-8 bg-red-600 rounded-full mt-2 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default MenuCard;
