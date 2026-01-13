
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { View, Product, CartItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './views/Home';
import OnlineShop from './views/OnlineShop';
import Recipes from './views/Recipes';
import Corporate from './views/Corporate';
import Promos from './views/Promos';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentView]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const cartTotal = useMemo(() => 
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  [cart]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} onAddToCart={addToCart} />;
      case 'shop':
        return <OnlineShop onAddToCart={addToCart} activeCategory={null} />;
      case 'promos':
        return <Promos onAddToCart={addToCart} />;
      case 'recipes':
        return <Recipes onAddToCart={addToCart} />;
      case 'suppliers':
      case 'careers':
      case 'news':
      case 'contact':
        return <Corporate view={currentView} />;
      default:
        return <Home onNavigate={setCurrentView} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 flex-col">
      {/* Top Header with Navigation */}
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenCart={() => setIsCartOpen(true)} 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pb-20 md:pb-0">
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          {renderView()}
        </div>

        {/* Global Footer */}
        <Footer onNavigate={setCurrentView} />
      </main>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        total={cartTotal}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Mobile Navigation (App-like) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-around items-center py-3 shadow-lg px-2">
        <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center ${currentView === 'home' ? 'text-green-800' : 'text-gray-400'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-xs font-medium mt-1">Inicio</span>
        </button>
        <button onClick={() => setCurrentView('shop')} className={`flex flex-col items-center ${currentView === 'shop' ? 'text-green-800' : 'text-gray-400'}`}>
          <span className="text-xl">🛒</span>
          <span className="text-xs font-medium mt-1">Comprar</span>
        </button>
        <button onClick={() => setCurrentView('promos')} className={`flex flex-col items-center ${currentView === 'promos' ? 'text-green-800' : 'text-gray-400'}`}>
          <span className="text-xl">🏷️</span>
          <span className="text-xs font-medium mt-1">Promos</span>
        </button>
        <button onClick={() => setIsCartOpen(true)} className="flex flex-col items-center text-gray-400 relative">
          <span className="text-xl">📦</span>
          <span className="text-xs font-medium mt-1">Carrito</span>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
        <button onClick={() => setCurrentView('contact')} className={`flex flex-col items-center ${currentView === 'contact' ? 'text-green-800' : 'text-gray-400'}`}>
          <span className="text-xl">📞</span>
          <span className="text-xs font-medium mt-1">Ayuda</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
