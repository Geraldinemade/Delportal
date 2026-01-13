
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES, PRODUCTS, SUBCATEGORIES } from '../data';
import ProductCard from '../components/ProductCard';

interface OnlineShopProps {
  onAddToCart: (p: Product) => void;
}

const OnlineShop: React.FC<OnlineShopProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<number>(100);
  
  const pastPurchases = useMemo(() => {
    return PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      const categoryMatch = filter === 'all' || p.category === filter;
      const priceMatch = p.price <= priceRange;
      return categoryMatch && priceMatch;
    });

    if (sortBy === 'low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [filter, priceRange, sortBy]);

  const handleAddAllPast = () => {
    pastPurchases.forEach(p => onAddToCart(p));
  };

  return (
    <div className="space-y-6 md:space-y-10 animate-fadeIn w-full max-w-full overflow-hidden px-1">
      {/* "Repite tu orden" Module - Wrapped Grid for Mobile to avoid overflow */}
      <section className="bg-white rounded-3xl md:rounded-[32px] p-4 md:p-6 border border-gray-100 shadow-sm w-full box-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-full md:w-auto">
            <h2 className="text-lg md:text-xl font-black text-gray-900 flex items-center gap-2">
              <span className="text-xl md:text-2xl">🔄</span> Repite tu orden
            </h2>
            <p className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-tight">Tus favoritos recientes</p>
          </div>
          {pastPurchases.length > 0 && (
            <button 
              onClick={handleAddAllPast}
              className="w-full md:w-auto text-[11px] md:text-sm font-black text-green-700 hover:text-green-800 bg-green-50 px-4 py-3 md:py-2 rounded-xl transition-colors text-center"
            >
              Agregar todo el pedido
            </button>
          )}
        </div>

        {pastPurchases.length === 0 ? (
          <div className="py-8 text-center border-2 border-dashed border-gray-100 rounded-2xl">
            <p className="text-gray-400 font-bold italic text-sm px-4">Aún no tienes compras anteriores.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 w-full">
            {pastPurchases.map(product => (
              <div 
                key={product.id} 
                className="flex bg-gray-50 p-3 rounded-2xl items-center gap-3 border border-transparent hover:border-green-200 transition-all shadow-sm overflow-hidden"
              >
                <img src={product.image} className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover bg-white shadow-sm flex-shrink-0" alt={product.name} />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs font-bold text-gray-800 truncate">{product.name}</p>
                  <p className="text-xs md:text-sm font-black text-green-800">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="mt-1 text-[9px] md:text-[10px] font-black uppercase text-green-700 hover:underline py-1 touch-manipulation"
                  >
                    + Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full max-w-full">
        {/* Sidebar Filters - Replaced scrolling with wrap on mobile */}
        <aside className="w-full lg:w-64 space-y-6 md:space-y-10 flex-shrink-0 box-border">
          <div className="w-full overflow-hidden">
  <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">
    Categorías
  </h3>

  <div className="flex flex-wrap lg:flex-col gap-2 px-1 w-full">
    {/* TODOS */}
    <button 
      onClick={() => {
        setFilter('all');
        setActiveCategory(null);
        setActiveSubcategory(null);
      }}
      className={`px-3 py-2 md:py-3 rounded-xl md:rounded-2xl text-left font-bold transition-all whitespace-nowrap text-[11px] md:text-sm
        ${filter === 'all'
          ? 'bg-green-800 text-white shadow-lg'
          : 'bg-white text-gray-500 border border-gray-100'}
      `}
    >
      Todos
    </button>

    {/* CATEGORÍAS */}
    {CATEGORIES.map(cat => (
      <div key={cat.id}>
        <button
          onClick={() => {
            setActiveCategory(activeCategory === cat.id ? null : cat.id);
            setActiveSubcategory(null);
            setFilter(cat.id);
          }}
          className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2
            ${filter === cat.id
              ? 'bg-green-600 text-white'
              : 'hover:bg-gray-100'}
          `}
        >
          <span className="text-base md:text-lg">{cat.icon}</span>
          <span className="truncate">{cat.name}</span>
        </button>

        {/* SUBCATEGORÍAS */}
        {activeCategory === cat.id && (
          <div className="ml-6 mt-2 space-y-1">
            {SUBCATEGORIES
              .filter(sub => sub.categoryId === cat.id)
              .map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubcategory(sub.id)}
                  className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition
                    ${activeSubcategory === sub.id
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-500 hover:bg-gray-50'}
                  `}
                >
                  {sub.name}
                </button>
              ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
          <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-[24px] border border-gray-100 shadow-sm w-full box-border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Presupuesto</h3>
              <span className="text-[10px] md:text-xs font-black text-green-800 bg-green-50 px-3 py-1.5 rounded-lg">
                Max: ${priceRange.toFixed(0)}
              </span>
            </div>
            <div className="w-full px-1">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                value={priceRange}
                onChange={(e) => setPriceRange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-800 touch-pan-y"
              />
              <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-tighter mt-4">
                <span>$0.00</span>
                <span>$100.00+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid - Forced to contain within viewport */}
        <div className="flex-1 space-y-4 md:space-y-6 w-full max-w-full box-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full px-1 overflow-hidden">
            <div className="w-full sm:w-auto">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-none mb-1 truncate">
                {filter === 'all' ? 'Catálogo' : CATEGORIES.find(c => c.id === filter)?.name}
              </h2>
              <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">
                {filteredProducts.length} productos
              </p>
            </div>
            
            <div className="w-full sm:w-auto bg-white p-1 rounded-xl border border-gray-100 shadow-sm">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto bg-transparent font-bold text-[11px] md:text-xs outline-none px-3 py-2 cursor-pointer text-gray-700"
              >
                <option value="featured">Ordenar por: Relevancia</option>
                <option value="low">Menor precio</option>
                <option value="high">Mayor precio</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 w-full max-w-full">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-16 md:py-24 text-center space-y-4 bg-white rounded-3xl md:rounded-[40px] border border-dashed border-gray-200 w-full box-border px-4">
              <div className="text-5xl md:text-6xl grayscale opacity-50">🛒</div>
              <div>
                <h3 className="text-lg font-black text-gray-900">Sin resultados</h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Ajusta tus filtros.</p>
              </div>
              <button 
                onClick={() => { setPriceRange(100); setFilter('all'); }}
                className="bg-green-800 text-white px-8 py-3 rounded-xl font-black text-xs shadow-lg"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnlineShop;
