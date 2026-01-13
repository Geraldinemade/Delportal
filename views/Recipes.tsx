
import React, { useState } from 'react';
import { Recipe, Product } from '../types';
import { RECIPES, PRODUCTS } from '../data';

interface RecipesProps {
  onAddToCart: (p: Product) => void;
}

const Recipes: React.FC<RecipesProps> = ({ onAddToCart }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const getRecipeTotal = (recipe: Recipe): number => {
  return recipe.productIds.reduce((total, id) => {
    const product = PRODUCTS.find(p => p.id === id);
    return total + (product ? product.price : 0);
  }, 0);
  };

  const handleAddBundle = (recipe: Recipe) => {
    recipe.productIds.forEach(id => {
      const product = PRODUCTS.find(p => p.id === id);
      if (product) onAddToCart(product);
    });
  };

  if (selectedRecipe) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <button 
          onClick={() => setSelectedRecipe(null)}
          className="flex items-center gap-2 text-green-800 font-bold hover:underline"
        >
          ← Volver a recetas
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full aspect-video object-cover" />
            </div>
            <div className="flex gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-xl font-bold text-sm">⏱️ {selectedRecipe.prepTime}</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-xl font-bold text-sm">📊 Dificultad: {selectedRecipe.difficulty}</span>
            </div>
        {/* Proceso de preparación */}
        <div className="bg-white rounded-[32px] p-6 shadow-md space-y-4">
          <h3 className="text-xl font-black text-green-900">
            Proceso de preparación
          </h3>
          <ol className="space-y-3">
            {selectedRecipe.steps.map((step, index) => (
              <li key={index} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900 text-white flex items-center justify-center font-bold">
                {index + 1}
              </span>
          <p className="text-gray-700 leading-relaxed">{step}</p>
        </li>
      ))}
    </ol>
  </div>

          </div>
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl font-black text-green-900">{selectedRecipe.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{selectedRecipe.description}</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-900">Ingredientes necesarios:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 font-medium">
                    <span className="text-green-500">✓</span> {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900 rounded-[32px] p-8 text-white space-y-6 shadow-xl shadow-green-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Compra este combo</h3>
                  <p className="text-green-200 text-sm">Agrega los ingredientes base al carrito</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-green-400 uppercase">Combo Especial</p>
                  <p className="text-2xl font-black">
                    ${getRecipeTotal(selectedRecipe).toFixed(2)}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => handleAddBundle(selectedRecipe)}
                className="w-full bg-green-500 hover:bg-green-400 text-green-900 font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                Agregar ingredientes al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-black text-green-900 mb-2">Recetas Delportal</h2>
        <p className="text-gray-500">Inspiración para tus comidas con los mejores ingredientes de nuestra tienda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RECIPES.map(recipe => (
          <div 
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="group cursor-pointer bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={recipe.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={recipe.title}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-bold text-green-900">
                {recipe.prepTime}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-green-900 mb-3 group-hover:text-green-600 transition-colors">{recipe.title}</h3>
              <p className="text-gray-500 mb-6 line-clamp-2">{recipe.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-green-800 flex items-center gap-2">
                  Ver Receta
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] overflow-hidden">
                        <img src={`https://picsum.photos/50/50?random=${i+100}`} alt="ing" />
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
