
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import MenuSection from './components/MenuSection.tsx';
import Reservation from './components/Reservation.tsx';
import Footer from './components/Footer.tsx';
import Testimonials from './components/Testimonials.tsx';
import Cart from './components/Cart.tsx';
import { MenuItem, CartItem } from './types.ts';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState<'home' | 'menu'>('home');

  useEffect(() => {
    const handleViewSwitch = (e: any) => {
      handleNavClick(e.detail);
    };
    window.addEventListener('switch-view', handleViewSwitch);
    return () => window.removeEventListener('switch-view', handleViewSwitch);
  }, []);

  const handleNavClick = (section: string) => {
    if (section === 'home') {
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'menu') {
      setView('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (view === 'menu') {
        setView('home');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-oops-orange selection:text-black">
      <Navbar onNavClick={handleNavClick} activeView={view} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <MenuSection onAddToCart={addToCart} />
            <Testimonials />
            <Reservation />
          </>
        ) : (
          <div className="pt-32">
            <MenuSection onAddToCart={addToCart} fullMenu />
          </div>
        )}
      </main>

      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Cart Trigger Badge */}
      {cartItems.length > 0 && !isCartOpen && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-24 right-6 z-[90] bg-white text-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <div className="absolute -top-1 -right-1 bg-oops-orange text-black w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-black">
            {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
