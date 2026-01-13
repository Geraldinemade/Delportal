
import React, { useState, useEffect } from 'react';
import { View, Product } from '../types';
import { CATEGORIES, PRODUCTS, RECIPES } from '../data';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onNavigate: (v: View) => void;
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    /*{
      title: "Promociones de la semana",
      desc: "Hasta 40% de descuento en marcas seleccionadas de abarrotes y frescos.",
      cta: "Ver promociones",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&h=500&auto=format&fit=crop",
      color: "bg-green-900",
      target: 'promos',
      badge: "Venta Directa"
    },*/
    {
      title: "Compra online, recoge en local",
      desc: "Selecciona la entrega PICKUP, elige el local y horario. Nuevo servicio sin costo.",
      cta: "Comprar online",
      image: "https://res.cloudinary.com/dilzkmcsl/image/upload/v1767885440/pickup_dfbti7.jpg",
      color: "bg-green-800",
      target: 'shop',
      badge: "PICKUP DELPORTAL"
    },
    {
      title: "Prepara más recetas",
      desc: "Encuentra inspiración y compra ingredientes descargando Delportal App.",
      cta: "Descargar app",
      image: "https://res.cloudinary.com/dilzkmcsl/image/upload/v1767891906/Recetas_dt2msv.png",
      color: "bg-orange-600",
      target: 'recipes',
      isApp: true
    }
    {
       title: (
      <>
        Jueves <br />
        de Mascotas
      </>
     ),
      desc: "20% En todos los productos de la categoria. *Aplica para miembros activos del CLub Delportal",
      cta: "Mascotas",
      image: "https://res.cloudinary.com/dilzkmcsl/image/upload/v1767886670/Macotas_yhm8nx.jpg",
      color: "bg-orange-600",
      target: 'Shop',
    }
    {
     title: (
      <>
        La Carne <br />
        Argentina Campeona
      </>
     ),
      desc: (
      <>
      Del Mundo llegó a Delportal <br />
      Entraña - Bife Angosto - Bife Ancho <br />
      Picaña - Colita de Cuadril - Lomo Fino
      </>
  ),
      cta: "Carnes",
      image: "https://res.cloudinary.com/dilzkmcsl/image/upload/v1767900537/parrilleros_lyubbd.jpg",
      color: "bg-orange-600",
      target: 'Shop',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="space-y-12">
      {/* Optimized Main Carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 relative h-[350px] md:h-[450px] rounded-[40px] overflow-hidden group shadow-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 text-white">
                {slide.badge && (
                  <span className="bg-green-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-fit mb-6 shadow-lg">
                    {slide.badge}
                  </span>
                )}
                
                <h2 className="text-4xl md:text-6xl font-black mb-4 leading-[1.1] max-w-xl drop-shadow-md">
                  {slide.title}
                </h2>
                
                <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-md font-medium leading-relaxed drop-shadow-sm">
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button 
                    onClick={() => onNavigate(slide.target as View)}
                    className="bg-white hover:bg-gray-100 text-green-900 font-black px-10 py-4 rounded-2xl transition-all shadow-2xl transform hover:scale-105 active:scale-95"
                  >
                    {slide.cta}
                  </button>

                  {slide.isApp && (
                    <div className="flex items-center gap-3">
                      <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/20 cursor-pointer hover:bg-black transition-colors">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-8" alt="App Store" />
                      </div>
                      <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/20 cursor-pointer hover:bg-black transition-colors">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8" alt="Google Play" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Custom Dots Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full ${i === currentSlide ? 'bg-white w-10 h-2.5' : 'bg-white/40 w-2.5 h-2.5 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>

        {/* Side Info Modules (Amazon Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="relative bg-blue-50 p-6 rounded-3xl border border-blue-100 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group overflow-hidden">
            <div className="relative z-10">
              <span className="text-2xl mb-2 block">📝</span>
              <h3 className="font-black text-blue-900 leading-tight">Envía tu lista y recibe en casa</h3>
            </div>
            <p className="relative z-10 text-[10px] text-blue-700 font-bold uppercase mt-4 group-hover:underline">Empezar lista →</p>
           
          </div>
          <div className="relative bg-orange-50 p-6 rounded-3xl border border-orange-100 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group overflow-hidden" onClick={() => onNavigate('recipes')}>
            <div className="relative z-10">
              <span className="text-2xl mb-2 block">🍳</span>
              <h3 className="font-black text-orange-900 leading-tight">Recetas y menús del día</h3>
            </div>
            <p className="relative z-10 text-[10px] text-orange-700 font-bold uppercase mt-4 group-hover:underline">Ver inspiración →</p>
            
          </div>
          <div className="hidden lg:flex relative bg-purple-50 p-6 rounded-3xl border border-purple-100 flex-col justify-between hover:shadow-md transition-all cursor-pointer group overflow-hidden" onClick={() => onNavigate('careers')}>
            <div className="relative z-10">
              <span className="text-2xl mb-2 block">🚀</span>
              <h3 className="font-black text-purple-900 leading-tight">Únete a nuestro equipo</h3>
            </div>
            <p className="relative z-10 text-[10px] text-purple-700 font-bold uppercase mt-4 group-hover:underline">Postular ahora →</p>
            
          </div>
        </div>
      </div>

      {/* Main Categories */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Categorías Principales</h2>
          <button onClick={() => onNavigate('shop')} className="text-sm font-black text-green-700 hover:underline">Ver pasillos →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <div 
              key={cat.id}
              onClick={() => onNavigate('shop')}
              className="group cursor-pointer flex flex-col items-center bg-white border border-gray-100 p-2 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-gray-50">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-[11px] font-black text-center text-gray-800 uppercase px-1">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Offers & Recommended */}
      <div className="grid lg:grid-cols-4 gap-8">
        <section className="lg:col-span-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-black text-gray-900 mb-6">Recomendados para ti</h3>
          <div className="space-y-6 flex-1">
            {PRODUCTS.filter(p => p.isRecommended).slice(0, 2).map(product => (
               <div key={product.id} className="flex gap-4 group cursor-pointer" onClick={() => onAddToCart(product)}>
                  <img src={product.image} className="w-16 h-16 rounded-lg object-cover bg-gray-50" />
                  <div>
                    <p className="text-xs font-bold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-1">{product.name}</p>
                    <p className="text-sm font-black text-green-800">${product.price.toFixed(2)}</p>
                    <button className="text-[10px] font-bold text-green-700 uppercase mt-1">+ Agregar</button>
                  </div>
               </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border-2 border-gray-100 rounded-xl text-xs font-black text-gray-500 hover:bg-gray-50 uppercase tracking-widest">Ver más</button>
        </section>

        <section className="lg:col-span-3 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🔥</span>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Ofertas Destacadas</h2>
              <p className="className=text-xs font-bold text-red-200 uppercase tracking-widest">Ahorra hoy con Delportal</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.filter(p => p.discount).slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      </div>

      {/* Repurchase Module */}
      <section className="bg-green-800 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black mb-4">¿Te falta algo de tu última compra?</h2>
          <p className="text-green-100 mb-8 font-medium opacity-90">Recompra tus productos favoritos en un solo clic y ahorra tiempo en tu despensa semanal.</p>
          <div className="flex flex-wrap gap-4">
            {PRODUCTS.filter(p => p.isBestSeller).slice(0, 3).map(p => (
              <div key={p.id} className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 pr-4 rounded-2xl border border-white/20">
                <img src={p.image} className="w-10 h-10 rounded-lg object-cover" />
                <span className="text-xs font-bold">{p.name}</span>
                <button onClick={() => onAddToCart(p)} className="bg-white text-green-800 w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">+</button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-30 hidden lg:block">
           <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&h=800&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Recipe Inspiration */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Cocina con Delportal</h2>
            <p className="text-gray-500 text-sm">Todo lo que necesitas para estos platos está en un clic.</p>
          </div>
          <button onClick={() => onNavigate('recipes')} className="text-sm font-black text-green-700 hover:underline">Ver recetario →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RECIPES.map(recipe => (
            <div 
              key={recipe.id}
              onClick={() => onNavigate('recipes')}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all"
            >
              <div className="md:w-1/3 h-48 md:h-full relative overflow-hidden">
                <img src={recipe.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={recipe.title} />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Saludable</span>
                  <span className="text-[10px] font-black uppercase text-gray-400">{recipe.prepTime}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{recipe.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{recipe.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-black text-green-700 uppercase tracking-widest">Ver Receta →</span>
                  <div className="flex -space-x-2">
                    {recipe.productIds.slice(0, 3).map((pid, idx) => {
                      const prod = PRODUCTS.find(p => p.id === pid);
                      return <img key={idx} src={prod?.image} className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
