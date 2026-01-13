
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  onOpenCart: () => void;
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  setCurrentView, 
  onOpenCart, 
  cartCount, 
  searchQuery, 
  setSearchQuery 
}) => {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'shop', label: 'Compra en Línea', icon: '🛒' },
    { id: 'promos', label: 'Promociones', icon: '🏷️' },
    { id: 'recipes', label: 'Recetas', icon: '🍳' },
    { id: 'suppliers', label: 'Proveedores', icon: '🤝' },
    { id: 'careers', label: 'Trabaja con nosotros', icon: '💼' },
    { id: 'news', label: 'Noticias', icon: '📰' },
    { id: 'contact', label: 'Contáctanos', icon: '📞' },
  ];

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40 shadow-sm">
      {/* Top Bar: Brand, Search, Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-4 md:gap-8">
        
        {/* Logo */}
        <div 
          onClick={() => setCurrentView('home')} 
          className="flex-shrink-0 cursor-pointer flex items-center gap-2"
        >
         <img
          src="https://res.cloudinary.com/dilzkmcsl/image/upload/v1767882141/Delportal_Logo_Verde_eugwfw.png"
          alt="Delportal"
          className="h-10 md:h-16 w-auto object-contain"
/>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl lg:max-w-3xl">
          <div className="relative group">
            <input
              type="text"
              placeholder="¿Qué quieres comprar hoy? Ej: aguacate, detergente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border-2 border-transparent focus:bg-white focus:border-green-800 focus:ring-4 focus:ring-green-800/10 rounded-2xl py-3 pl-12 pr-4 transition-all outline-none text-sm"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-[10px] uppercase font-bold text-gray-400">Entregando en:</span>
            <span className="text-xs font-semibold text-green-800 flex items-center gap-1 cursor-pointer">
              📍 Guayaquil
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
          </div>

          <button 
            onClick={onOpenCart}
            className="relative p-3 bg-green-50 rounded-2xl text-green-800 hover:bg-green-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          
          <div className="hidden sm:flex items-center gap-2 cursor-pointer bg-gray-50 p-2 rounded-xl border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xs">
              JD
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu Row (Desktop) */}
      <nav className="hidden md:flex border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1 py-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as View)}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap text-sm font-bold ${
                  currentView === item.id 
                  ? 'text-green-800 bg-green-50' 
                  : 'text-gray-500 hover:text-green-800 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2 opacity-80">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
