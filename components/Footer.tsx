
import React from 'react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-zinc-900 pt-16 pb-8 border-t border-zinc-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-center">
            <img
              onClick={() => onNavigate('home')}
              src="https://res.cloudinary.com/dilzkmcsl/image/upload/v1767882141/Delportal_Logo_Verde_eugwfw.png"
              alt="Delportal"
              className="h-[72px] w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

            <p className="text-zinc-700 text-sm leading-relaxed max-w-sm">
              Somos la única cadena de supermercados de cercanía, que ofrecemos una variedad de productos y excelente atención. Queremos que nuestros clientes encuentren todo lo que necesitan, con un servicio rápido y cercano.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'FB', icon: 'facebook' },
                { name: 'IG', icon: 'instagram' },
                { name: 'TW', icon: 'twitter' },
                { name: 'YT', icon: 'youtube' }
              ].map((social) => (
                <div 
                  key={social.name} 
                  className="w-10 h-10 rounded-full bg-zinc-200 hover:bg-green-700 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                >
                  <span className="text-[10px] font-black group-hover:scale-110 transition-transform">{social.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Compra */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-green-700">Comprar</h4>
            <ul className="space-y-3 text-sm text-zinc-600 font-medium">
              <li onClick={() => onNavigate('shop')} className="hover:text-zinc-900 transition-colors cursor-pointer">Catálogo Online</li>
              <li onClick={() => onNavigate('promos')} className="hover:text-zinc-900 transition-colors cursor-pointer">Ofertas del Día</li>
              <li onClick={() => onNavigate('recipes')} className="hover:text-zinc-900 transition-colors cursor-pointer">Recetario</li>
              <li onClick={() => onNavigate('home')} className="hover:text-zinc-900 transition-colors cursor-pointer">Locales y Horarios</li>
              <li onClick={() => onNavigate('shop')} className="hover:text-zinc-900 transition-colors cursor-pointer">Servicio Pickup</li>
            </ul>
          </div>

          {/* Column 3: Institucional */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-green-700">Nosotros</h4>
            <ul className="space-y-3 text-sm text-zinc-600 font-medium">
              <li onClick={() => onNavigate('home')} className="hover:text-zinc-900 transition-colors cursor-pointer">Nuestra Historia</li>
              <li onClick={() => onNavigate('home')} className="hover:text-zinc-900 transition-colors cursor-pointer">Sostenibilidad</li>
              <li onClick={() => onNavigate('careers')} className="hover:text-zinc-900 transition-colors cursor-pointer">Trabaja con nosotros</li>
              <li onClick={() => onNavigate('news')} className="hover:text-zinc-900 transition-colors cursor-pointer">Noticias Corporativas</li>
              <li onClick={() => onNavigate('suppliers')} className="hover:text-zinc-900 transition-colors cursor-pointer">Portal Proveedores</li>
            </ul>
          </div>

          {/* Column 4: Ayuda */}
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-green-700">Servicio</h4>
            <ul className="space-y-3 text-sm text-zinc-600 font-medium">
              <li onClick={() => onNavigate('home')} className="hover:text-zinc-900 transition-colors cursor-pointer">Preguntas Frecuentes</li>
              <li onClick={() => onNavigate('contact')} className="hover:text-zinc-900 transition-colors cursor-pointer">Centro de Ayuda</li>
              <li onClick={() => onNavigate('contact')} className="hover:text-zinc-900 transition-colors cursor-pointer">Libro de Reclamaciones</li>
              <li onClick={() => onNavigate('home')} className="hover:text-zinc-900 transition-colors cursor-pointer">Términos de Uso</li>
              <li onClick={() => onNavigate('home')} className="hover:text-zinc-900 transition-colors cursor-pointer">Privacidad de Datos</li>
            </ul>
          </div>
        </div>

        {/* Apps & Trust Section */}
        <div className="pt-10 border-t border-zinc-300 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-[10px] font-black uppercase text-zinc-700 tracking-widest mb-2 sm:mb-0">Descarga nuestra App:</p>
            <div className="flex gap-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                className="h-9 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
                alt="App Store" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                className="h-9 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
                alt="Google Play" 
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3">
            <p className="text-[10px] font-black uppercase text-zinc-700 tracking-widest">Medios de Pago Seguros:</p>
            <div className="flex gap-3 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {['VISA', 'MASTERCARD', 'AMEX', 'DINERS'].map(card => (
                <div key={card} className="bg-zinc-200 px-2 py-1 rounded text-[8px] font-black border border-zinc-300 text-zinc-800">
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Copyright */}
        <div className="mt-16 text-center">
          <p className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
            © 2024 SUPERMERCADOS DELPORTAL S.A. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-[9px] text-gray-700 font-bold uppercase">
             <span onClick={() => onNavigate('home')} className="cursor-pointer hover:text-zinc-700 transition-colors">Superintendencia de Compañías</span>
             <span onClick={() => onNavigate('home')} className="cursor-pointer hover:text-zinc-700 transition-colors">SRI</span>
             <span onClick={() => onNavigate('contact')} className="cursor-pointer hover:text-zinc-700 transition-colors">Defensa del Consumidor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
