
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Palette, Share2, ShieldCheck, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    color: "text-brand-yellow", // #FDB913
    glowColor: "group-hover:border-brand-yellow/50 group-hover:shadow-[0_0_30px_-5px_rgba(253,185,19,0.3)]",
    title: "Desarrollo Web",
    description: "Plataformas de alto rendimiento que actúan como tu mejor activo comercial, convirtiendo visitantes en clientes las 24 horas.",
  },
  {
    icon: <Layout size={32} />,
    color: "text-brand-green", // #007A33
    glowColor: "group-hover:border-brand-green/50 group-hover:shadow-[0_0_30px_-5px_rgba(0,122,51,0.3)]",
    title: "Diseño UX/UI",
    description: "Interfaces intuitivas diseñadas para eliminar la fricción, retener a tus usuarios y maximizar la conversión de cada visita.",
  },
  {
    icon: <Palette size={32} />,
    color: "text-brand-red", // #C1272D
    glowColor: "group-hover:border-brand-red/50 group-hover:shadow-[0_0_30px_-5px_rgba(193,39,45,0.3)]",
    title: "Identidad Visual",
    description: "Construimos una presencia de marca coherente y memorable que transmite confianza y te distingue en un mercado saturado.",
  },
  {
    icon: <Share2 size={32} />,
    color: "text-brand-yellow",
    glowColor: "group-hover:border-brand-yellow/50 group-hover:shadow-[0_0_30px_-5px_rgba(253,185,19,0.3)]",
    title: "Redes Sociales",
    description: "Estrategias de contenido que crean comunidad y amplifican tu voz, conectando tu marca emocionalmente con tu audiencia.",
  },
  {
    icon: <Megaphone size={32} />,
    color: "text-brand-red",
    glowColor: "group-hover:border-brand-red/50 group-hover:shadow-[0_0_30px_-5px_rgba(193,39,45,0.3)]",
    title: "Campañas Ads",
    description: "Tráfico inmediato y cualificado mediante segmentación precisa, optimizando cada centavo de inversión para maximizar tu ROI.",
  },
  {
    icon: <ShieldCheck size={32} />,
    color: "text-brand-green",
    glowColor: "group-hover:border-brand-green/50 group-hover:shadow-[0_0_30px_-5px_rgba(0,122,51,0.3)]",
    title: "Mantenimiento",
    description: "Seguridad y optimización continua para que tu negocio digital nunca se detenga, garantizando velocidad y estabilidad total.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-6">Soluciones Integrales</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto font-normal">
            Más allá del código y el diseño: creamos activos digitales que impulsan el crecimiento real de tu negocio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group p-8 rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 
                hover:bg-white/10 
                transition-all duration-500 
                relative overflow-hidden 
                w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                ${service.glowColor}
              `}
            >
              {/* Inner subtle shine */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500"></div>
              
              <div className={`mb-6 p-3 bg-black/40 rounded-xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-inner ${service.color}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold text-white mb-3 transition-colors group-hover:text-white`}>
                {service.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed font-normal group-hover:text-neutral-200 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
