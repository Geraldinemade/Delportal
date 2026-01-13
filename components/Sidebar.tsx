
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isExpanded, setIsExpanded }) => {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'promos', label: 'Promociones', icon: '🏷️' },
    { id: 'shop', label: 'Compra en Línea', icon: '🛒' },
    { id: 'recipes', label: 'Recetas', icon: '🍳' },
    { id: 'suppliers', label: 'Proveedores', icon: '🤝' },
    { id: 'careers', label: 'Trabaja con nosotros', icon: '💼' },
    { id: 'news', label: 'Noticias', icon: '📰' },
    { id: 'contact', label: 'Contáctanos', icon: '📞' },
  ];

  return (
    <aside 
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`hidden md:flex fixed left-0 top-0 h-screen z-50 bg-white border-r border-gray-200 flex-col transition-all duration-300 ease-in-out ${isExpanded ? 'w-64 shadow-2xl' : 'w-20'}`}
    >
      <div className="p-6 flex items-center justify-center mb-4">
        {isExpanded ? (
          <h1 className="text-2xl font-black text-green-900 tracking-tighter">DELPORTAL</h1>
        ) : (
          <span className="text-2xl font-black text-green-900">DP</span>
        )}
      </div>

      <nav className="flex-1 flex flex-col px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as View)}
            className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
              currentView === item.id 
              ? 'bg-green-800 text-white' 
              : 'text-gray-500 hover:bg-green-50 hover:text-green-800'
            }`}
          >
            <span className="text-xl min-w-[32px] text-center">{item.icon}</span>
            <span className={`ml-4 font-semibold whitespace-nowrap transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className={`flex items-center ${isExpanded ? 'px-2' : 'justify-center'}`}>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold border-2 border-green-200">
            JD
          </div>
          {isExpanded && (
            <div className="ml-3">
              <p className="text-xs font-bold text-gray-900">Juan Delportal</p>
              <p className="text-[10px] text-gray-500">Premium Member</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
