
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, total, onRemove, onUpdateQuantity }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed right-0 top-0 h-screen w-full sm:w-[400px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-green-900">Tu Carrito</h2>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{cart.length} productos</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl mb-4">🛒</div>
              <p className="text-gray-900 font-bold text-lg">Tu carrito está vacío</p>
              <p className="text-gray-500 text-sm mb-6">¡Agrega algunos productos frescos para comenzar!</p>
              <button onClick={onClose} className="bg-green-800 text-white px-8 py-3 rounded-2xl font-bold">Ver productos</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold text-gray-900">{item.name}</p>
                      <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">${item.price.toFixed(2)} / {item.unit}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-100 rounded-lg p-1">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors">-</button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors">+</button>
                      </div>
                      <p className="font-bold text-green-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-gray-900 font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-green-800">
              <span className="font-medium">Envío</span>
              <span className="font-bold">¡GRATIS!</span>
            </div>
            <div className="flex justify-between items-center text-xl">
              <span className="font-black text-green-900">Total</span>
              <span className="font-black text-green-900">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-800 hover:bg-green-900 text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-800/20">
              PAGAR AHORA
            </button>
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">Checkout Seguro • Delportal 2024</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
