
import React, { useState, useRef } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  fullMenu?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, fullMenu = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', 'Burger', 'Sandwich', 'Continental', 'Starter', 'Dessert', 'Drink', 'Wrap', 'Beverage'];

  // Filtering logic
  const filteredMenu = fullMenu 
    ? (activeCategory === 'All' ? MENU_DATA : MENU_DATA.filter(item => item.category === activeCategory))
    : MENU_DATA.filter(item => item.isFeatured);

  return (
    <section id={fullMenu ? "full-catalogue" : "menu-preview"} className={`py-12 md:py-32 ${fullMenu ? 'bg-black' : 'bg-zinc-50'} text-black transition-all duration-700`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-24 gap-6 md:gap-8">
          <div className="flex-1">
            <div className={`w-12 md:w-20 h-1.5 md:h-2 bg-oops-orange mb-4 md:mb-8`}></div>
            <h2 className={`${fullMenu ? 'text-zinc-600' : 'text-zinc-400'} font-syncopate text-[10px] md:text-sm font-bold mb-2 md:mb-4 tracking-[0.5em] uppercase`}>
              {fullMenu ? "Digital Catalogue" : "Curated Selection"}
            </h2>
            <h3 className={`text-4xl md:text-[10rem] font-syncopate font-bold leading-[0.75] uppercase tracking-tighter ${fullMenu ? 'text-white' : 'text-black'}`}>
              {fullMenu ? "THE" : "TOP"}<br />
              <span className="text-oops-orange">{fullMenu ? "MENU" : "PICKS"}</span>
            </h3>
          </div>
          
          {fullMenu && (
            <div className="w-full md:w-auto overflow-hidden bg-zinc-900/50 p-3 md:p-6 border-l-4 md:border-l-8 border-oops-orange shadow-2xl backdrop-blur-md">
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 md:gap-4 font-syncopate text-[8px] md:text-[10px] font-bold overflow-x-auto no-scrollbar -mx-2 px-2"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 md:px-8 py-2.5 md:py-4 transition-all duration-300 tracking-[0.2em] min-w-max whitespace-nowrap border ${
                      activeCategory === cat 
                        ? 'bg-oops-orange text-black border-oops-orange shadow-inner scale-105' 
                        : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!fullMenu && (
            <div className="hidden lg:block text-right pb-4">
              <div className="inline-block p-6 border-r-8 border-black bg-zinc-100 italic">
                <p className="text-zinc-500 font-syncopate text-[11px] font-bold tracking-[0.3em] uppercase leading-loose">
                  ONLY THE BEST OF URBAN OOPS<br />
                  FAISALABAD'S ELITE FLAVORS
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Grid Layout - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-12 md:gap-y-16">
          {filteredMenu.map((item) => (
            <div key={item.id} className={`group flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-700`}>
              
              {/* Image only for Featured Items on Home Page. Removed for Catalogue (fullMenu) */}
              {item.isFeatured && !fullMenu ? (
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200 mb-4 md:mb-8 border-4 md:border-[14px] border-black transition-all duration-700 group-hover:border-oops-orange group-hover:shadow-[0_0_50px_rgba(255,95,31,0.3)]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 bg-black text-oops-orange font-syncopate font-bold px-2 py-1 md:px-6 md:py-4 text-[10px] md:text-2xl border-b border-l md:border-b-4 md:border-l-4 border-oops-orange">
                    Rs {item.price}
                  </div>
                </div>
              ) : (
                /* Catalogue Text-Only View or Non-featured items */
                <div className={`mb-3 md:mb-6 p-4 md:p-8 border-2 md:border-4 ${fullMenu ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-900 bg-zinc-900/10'} group-hover:border-oops-orange transition-colors`}>
                   <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                     <span className="text-oops-orange font-syncopate font-bold text-sm md:text-2xl">Rs {item.price}</span>
                     <span className={`hidden md:block h-[1px] flex-1 bg-zinc-800 group-hover:bg-oops-orange transition-colors mx-4 mb-2 opacity-30`}></span>
                     <span className={`text-[8px] md:text-[10px] font-syncopate font-bold uppercase tracking-widest ${fullMenu ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        {item.category}
                      </span>
                   </div>
                </div>
              )}

              <div className="flex flex-col flex-1">
                <h4 className={`font-syncopate font-bold text-xs md:text-2xl uppercase tracking-tighter transition-colors group-hover:text-oops-orange mb-1 md:mb-2 ${fullMenu ? 'text-white' : 'text-black'}`}>
                  {item.name}
                </h4>
                
                <p className={`text-zinc-500 font-light text-[9px] md:text-base leading-tight md:leading-relaxed mb-4 md:mb-6 italic line-clamp-2 h-8 md:h-12 overflow-hidden`}>
                  {item.description}
                </p>

                <button 
                  onClick={() => onAddToCart(item)}
                  className={`mt-auto relative overflow-hidden font-syncopate font-bold text-[8px] md:text-[10px] py-2.5 md:py-4 tracking-[0.2em] md:tracking-[0.4em] transition-all uppercase border-2 md:border-4 active:scale-95 flex items-center justify-center gap-2 md:gap-3 ${
                    fullMenu 
                      ? 'bg-transparent text-white border-zinc-800 hover:bg-white hover:text-black hover:border-white' 
                      : 'bg-black text-white border-black hover:bg-oops-orange hover:text-black hover:border-oops-orange'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>ADD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!fullMenu && (
          <div className="mt-16 md:mt-32 text-center">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('switch-view', { detail: 'menu' }))} 
              className="group inline-flex flex-col items-center gap-2 md:gap-4"
            >
              <span className="font-syncopate font-bold text-[10px] md:text-sm text-black uppercase tracking-[0.4em] group-hover:text-oops-orange transition-colors">Open Digital Catalogue</span>
              <div className="w-12 h-0.5 md:h-1 bg-black group-hover:w-48 transition-all group-hover:bg-oops-orange"></div>
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default MenuSection;
