
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import { MENU_CATEGORIES, RESTAURANT_INFO } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-100 selection:text-red-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Features / Quick Info */}
        <section className="py-12 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <i className="fas fa-motorcycle text-xl"></i>
                </div>
                <h4 className="font-bold text-stone-900">Fast Delivery</h4>
                <p className="text-sm text-stone-500">Across Kurla East/West</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <h4 className="font-bold text-stone-900">Halal Certified</h4>
                <p className="text-sm text-stone-500">100% Fresh Meat</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <i className="fas fa-pepper-hot text-xl"></i>
                </div>
                <h4 className="font-bold text-stone-900">Authentic Taste</h4>
                <p className="text-sm text-stone-500">Chef's Secret Masala</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <i className="fas fa-wallet text-xl"></i>
                </div>
                <h4 className="font-bold text-stone-900">Pocket Friendly</h4>
                <p className="text-sm text-stone-500">Best Value Deals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-4 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-600 font-extrabold tracking-widest text-sm uppercase mb-3 block">Our Delicious Menu</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-stone-900 mb-6">Explore the King's Kitchen</h2>
              <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {MENU_CATEGORIES.map((category) => (
                <MenuCard 
                  key={category.id} 
                  category={category} 
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4 bg-stone-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="font-serif text-4xl font-black text-stone-900 mb-4">Visit Our Outlet</h2>
                  <p className="text-stone-600 text-lg">Come experience the royal treatment in person. Our Kurla outlet is designed for families and food enthusiasts alike.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-red-600 border border-stone-100">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Address</h4>
                      <p className="text-stone-600">{RESTAURANT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-red-600 border border-stone-100">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Phone</h4>
                      <p className="text-stone-600">{RESTAURANT_INFO.phone}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95"
                >
                  <i className="fas fa-directions text-xl"></i>
                  Get Precise Directions
                </a>
              </div>
              
              <div className="flex-1 w-full h-[450px] bg-stone-200 rounded-[40px] overflow-hidden relative shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  alt="Location"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-md p-8 rounded-[32px] shadow-2xl text-center max-w-xs border border-white/50">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-lg shadow-red-600/40">
                        <i className="fas fa-map-pin text-2xl"></i>
                      </div>
                      <p className="font-bold text-stone-900 text-lg leading-tight">We are located at Shop 11, Kurla</p>
                      <p className="text-sm text-stone-500 mt-2">Open Daily: 11:30 AM - 1:00 AM</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {selectedCategory && (
        <MenuModal 
          category={selectedCategory} 
          onClose={() => setSelectedCategory(null)} 
        />
      )}

      {/* Floating Action Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-[60]">
        <a 
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace('+', '')}`}
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
        <a 
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all"
        >
          <i className="fas fa-phone text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
