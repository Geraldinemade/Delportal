
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

interface PromosProps {
  onAddToCart: (p: Product) => void;
}

const Promos: React.FC<PromosProps> = ({ onAddToCart }) => {
  const [minDiscount, setMinDiscount] = useState<number>(0);

  const promoProducts = useMemo(() => {
    return PRODUCTS.filter(p => (p.discount || 0) >= minDiscount && (p.discount || p.badge === 'Oferta'));
  }, [minDiscount]);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Promo Header Banner */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-red-200">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-red-600 font-black px-3 py-1 rounded-full text-xs uppercase tracking-widest">Flash Deals</span>
            <span className="text-white/80 font-bold text-sm">Actualizado hace 5 min</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            El Portal de las <br/> <span className="text-yellow-300">Súper Ofertas</span>
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 mb-8">
            Ahorra como nunca antes. Hemos seleccionado los mejores descuentos de toda nuestra tienda para ti.
          </p>
          <div className="flex flex-wrap gap-3">
             {[10, 20, 30].map(disc => (
               <button 
                key={disc}
                onClick={() => setMinDiscount(disc)}
                className={`px-6 py-3 rounded-2xl font-black transition-all border-2 ${minDiscount === disc ? 'bg-white text-red-600 border-white' : 'bg-transparent text-white border-white/30 hover:bg-white/10'}`}
               >
                 -{disc}% o más
               </button>
             ))}
             <button 
              onClick={() => setMinDiscount(0)}
              className={`px-6 py-3 rounded-2xl font-black transition-all border-2 ${minDiscount === 0 ? 'bg-white text-red-600 border-white' : 'bg-transparent text-white border-white/30 hover:bg-white/10'}`}
             >
               Ver Todas
             </button>
          </div>
        </div>
        <div className="absolute right-[-5%] top-[-10%] opacity-20 transform rotate-12 hidden lg:block">
           <span className="text-[300px] font-black leading-none select-none">%</span>
        </div>
      </section>

      {/* Promotions Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Stats/Filter Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">Resumen de Hoy</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Productos en oferta</span>
                <span className="text-red-600 font-black">{promoProducts.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Ahorro máximo</span>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-lg font-black">-40%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100">
            <h3 className="text-sm font-black text-yellow-800 uppercase tracking-widest mb-2">Tip de Ahorro</h3>
            <p className="text-xs text-yellow-700 font-medium leading-relaxed">
              Los productos con etiqueta <span className="font-black text-red-600">OFERTA</span> suelen agotarse en menos de 24 horas. ¡No esperes!
            </p>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-gray-900">
              {minDiscount > 0 ? `Ofertas del ${minDiscount}% o más` : 'Todas las Promociones'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {promoProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
            {promoProducts.length === 0 && (
              <div className="col-span-full py-20 text-center space-y-4">
                <div className="text-6xl">💸</div>
                <h3 className="text-xl font-bold text-gray-400">No hay ofertas con este filtro por ahora</h3>
                <button onClick={() => setMinDiscount(0)} className="text-red-600 font-black hover:underline">Ver todos los descuentos</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Urgent Footer Module */}
      <section className="bg-gray-900 rounded-[40px] p-10 text-center relative overflow-hidden">
         <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-black text-white italic">¿Buscas algo más barato?</h2>
            <p className="text-gray-400 font-medium">Suscríbete a nuestro boletín de ofertas exclusivas y recibe cupones de descuento directamente en tu correo cada lunes.</p>
            <div className="flex flex-col sm:flex-row gap-3">
               <input type="email" placeholder="Tu correo electrónico" className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white outline-none focus:ring-4 focus:ring-red-600/30" />
               <button className="bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 rounded-2xl transition-all shadow-xl shadow-red-600/20">Suscribirme</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Promos;
