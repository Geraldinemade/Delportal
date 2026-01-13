
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl p-2.5 md:p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col relative overflow-hidden w-full box-border">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-2 right-2 z-10 bg-red-600 text-white text-[9px] md:text-[11px] font-black px-1.5 py-0.5 md:px-2 md:py-1 rounded-md shadow-sm">
          -{product.discount}%
        </div>
      )}
      
      {/* Category Badge or Freshness */}
      {product.badge && (
        <span className={`absolute top-2 left-2 z-10 px-1.5 py-0.5 text-[8px] md:text-[10px] font-bold uppercase rounded ${
          product.badge === 'Oferta' ? 'bg-orange-500 text-white' : 'bg-green-700 text-white'
        }`}>
          {product.badge}
        </span>
      )}
      
      <div className="aspect-square mb-2 md:mb-3 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center w-full max-w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain md:object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 space-y-0.5 md:space-y-1 overflow-hidden">
        <p className="text-[11px] md:text-sm font-bold text-gray-800 line-clamp-2 min-h-[32px] md:min-h-[40px] leading-tight">{product.name}</p>
        <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-tight"> {product.unit}</p>
        
        <div className="flex flex-col mb-2 md:mb-3">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-base md:text-lg font-black text-green-800">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-[10px] md:text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-white border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white py-2 md:py-2.5 rounded-xl font-black text-[10px] md:text-sm transition-all flex items-center justify-center gap-1 group/btn touch-manipulation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
        </svg>
        <span>Agregar</span>
      </button>
    </div>
  );
};

export default ProductCard;
