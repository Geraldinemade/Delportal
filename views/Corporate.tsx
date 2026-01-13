
import React from 'react';
import { View } from '../types';

const NEWS = [
  {
    id: 1,
    title: 'Delportal Villa Club se renueva para ofrecerte una experiencia superior',
    date: 'Ene 5, 2026',
    tag: 'Renovacion',
    image: 'https://res.cloudinary.com/dilzkmcsl/image/upload/v1768246973/remodelacionvc_lfkmsj.jpg',
    excerpt: 'Estimados Clientes, les comunicamos que del 5 al 18 de Enero nuestro supermercado se encuentra en proceso de Remodelación por lo que no tendremos atencion durante estos días. Agradecemos su compresión.'
  },
  {
    id: 2,
    title: 'Certificación EDGE Advanced en Machala',
    date: 'Oct 24, 2025',
    tag: 'Sostenibilidad',
    image: 'https://res.cloudinary.com/dilzkmcsl/image/upload/v1768245389/EDGE-1001561730-Delportal-Machala-EDGE-Advanced-Final-2-pdf-232x300_m4dyxh.jpg',
    excerpt: 'Delportal Machala recibió la certificación EDGE Advanced por su diseño sostenible.'
  },
  {
    id: 3,
    title: 'Inauguración Supermercado en Machala',
    date: 'Sep 12, 2024',
    tag: 'Inauguración',
    image: 'https://res.cloudinary.com/dilzkmcsl/image/upload/v1768247264/1_kzcprl.jpg',
    excerpt: 'El jueves 12 de septiembre aperturamos nuestro primer Supermercado Delportal fuera de Guayaquil, en la Av. 25 de Junio de la ciudad de Machala.'
  }
];

interface CorporateProps { view: View; }

const Corporate: React.FC<CorporateProps> = ({ view }) => {
  const renderContent = () => {
    switch (view) {
      case 'suppliers':
        return (
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-black text-green-900">¿Quieres ser proveedor?</h1>
              <p className="text-xl text-gray-500">Crezcamos juntos. Delportal es el mejor aliado para tu marca en Ecuador.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Gran Alcance', desc: 'Más de 500k clientes mensuales.', icon: '🌍' },
                { title: 'Pagos Ágiles', desc: 'Transparencia y puntualidad financiera.', icon: '💰' },
                { title: 'Soporte VIP', desc: 'Gestores de cuenta dedicados.', icon: '🤝' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 text-center shadow-sm">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <form className="bg-green-50 p-8 rounded-[40px] space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nombre de la empresa" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10" />
                <input type="text" placeholder="RUC / Identificación" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10" />
              </div>
              <input type="email" placeholder="Correo electrónico corporativo" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10" />
              <textarea placeholder="Cuéntanos sobre tus productos..." rows={4} className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10"></textarea>
              <button className="w-full bg-green-800 text-white font-black py-4 rounded-2xl text-lg hover:bg-green-900 transition-colors">Enviar Solicitud</button>
            </form>
          </div>
        );
      case 'careers':
        return (
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-black text-green-900 leading-tight">Únete a la familia <br/> Delportal</h1>
                <p className="text-lg text-gray-600">En Supermercados DELPORTAL creemos que nuestra actividad es un negocio en constante crecimiento gracias a los colaboradores que conforman nuestra empresa, por lo cual toda nuestra gestión interna gira en torno a ellos, su bienestar y desarrollo.</p>
                <button className="bg-green-800 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-green-800/20">Ver Vacantes</button>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://res.cloudinary.com/dilzkmcsl/image/upload/v1768244813/fachada-villa-club-nueva-1_ugkavx.jpg" className="rounded-3xl shadow-lg" alt="Team at store" />
                <img src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=400&h=400&auto=format&fit=crop" className="rounded-3xl shadow-lg mt-8" alt="Store environment" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-green-900">Vacantes Abiertas</h2>
              {[
                { role: 'Cajero / Servicio al Cliente', area: 'Operaciones', loc: 'Guayaquil' },
                { role: 'Fullstack Developer', area: 'Tecnología', loc: 'Remoto' },
                { role: 'Especialista en Marketing Digital', area: 'Marketing', loc: 'Samborondón' }
              ].map((job, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer group">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-green-800">{job.role}</h3>
                    <p className="text-sm text-gray-500 font-medium">{job.area} • {job.loc}</p>
                  </div>
                  <button className="bg-gray-100 text-gray-800 font-bold px-6 py-2 rounded-xl group-hover:bg-green-800 group-hover:text-white transition-colors">Aplicar</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-black text-green-900 mb-4">Noticias Delportal</h1>
                <p className="text-gray-500">Mantente al día con nuestras aperturas, consejos de nutrición y eventos corporativos.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {NEWS.map(news => (
              <article
                  key={news.id}
                  className="bg-white rounded-[40px] overflow-hidden border border-gray-100 group cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  >
                <div className="h-56 overflow-hidden">
                  <img
                    src={news.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    alt={news.title}
                  />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded-md font-bold uppercase">
                      {news.tag}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">
                      {news.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-green-900 leading-tight">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {news.excerpt}
                  </p>

                  <span className="text-green-800 font-bold inline-flex items-center gap-2">
                    Leer más →
                  </span>
                </div>
              </article>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-4xl font-black text-green-900">¿En qué podemos ayudarte?</h1>
              <p className="text-lg text-gray-600">Nuestro equipo está listo para escucharte. Escríbenos o llámanos directamente.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Atención Telefónica</p>
                    <p className="text-lg font-bold text-green-900">1-800-DELPORTAL</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.008L0 24l6.151-1.613a11.82 11.82 0 005.895 1.577c6.635 0 12.032-5.394 12.035-12.032 0-3.216-1.252-6.24-3.525-8.514z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp Directo</p>
                    <p className="text-lg font-bold text-green-900">+593 999 999 999</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[40px] shadow-2xl shadow-green-900/5 space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="bg-gray-50 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10" />
                  <input type="text" placeholder="Apellido" className="bg-gray-50 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10" />
               </div>
               <input type="email" placeholder="Correo" className="w-full bg-gray-50 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10" />
               <select className="w-full bg-gray-50 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10 text-gray-400">
                  <option>Motivo del contacto</option>
                  <option>Reclamo / Queja</option>
                  <option>Sugerencia</option>
                  <option>Felicitación</option>
               </select>
               <textarea placeholder="Mensaje..." rows={4} className="w-full bg-gray-50 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-green-800/10"></textarea>
               <button className="w-full bg-green-800 text-white font-black py-4 rounded-2xl text-lg hover:bg-green-900 transition-colors shadow-xl shadow-green-800/20">Enviar Mensaje</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8 animate-fadeIn">
      {renderContent()}
    </div>
  );
};

export default Corporate;
