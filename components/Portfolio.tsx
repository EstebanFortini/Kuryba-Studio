import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight, Tag } from 'lucide-react';

// Defined interface for type safety
interface CaseStudy {
  title: string;
  category: string;
  image: string;
  color: string; // CSS gradient classes
  details: string;
  challenge: string;
  solution: string;
  tags: string[];
  link: string;
}

const cases: CaseStudy[] = [
  {
    title: "Quipu",
    category: "Financial Services",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    color: "from-blue-900 to-blue-600",
    details: "Plataforma corporativa moderna con automatizaciones para servicios financieros.",
    challenge: "La empresa contaba con un sitio web desactualizado que no reflejaba su propuesta de valor moderna, dificultando la interacción con los clientes y la gestión eficiente de leads.",
    solution: "Rediseño total en colaboración con UX/UI para crear una plataforma corporativa de vanguardia. Implementamos múltiples formularios inteligentes, automatizaciones de flujo de trabajo e integraciones directas para agilizar la interacción con el cliente.",
    tags: ["Corporate Dev", "Automations", "UX/UI", "Integrations"],
    link: "https://quipu.com.co/"
  },
  {
    title: "Deep-Light",
    category: "Creative Community",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    color: "from-purple-900 to-indigo-600",
    details: "Plataforma creativa para una comunidad internacional de cinematografía.",
    challenge: "Necesidad de un espacio digital inmersivo para una comunidad global de cineastas, requiriendo animaciones avanzadas y funcionalidades de membresía sin sacrificar el rendimiento.",
    solution: "Construimos un sitio web altamente creativo con animaciones avanzadas en Elementor, un sistema de membresías robusto y plantillas de blog amigables que permiten a los usuarios compartir contenido visual de alta calidad fácilmente.",
    tags: ["Elementor", "Animations", "Membership", "Creative Dev"],
    link: "https://deep-light.com/"
  },
  {
    title: "MDN Arquitectura",
    category: "Architecture & Construction",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop",
    color: "from-stone-800 to-neutral-600",
    details: "Soluciones de arquitectura y construcción con portafolio dinámico.",
    challenge: "El cliente necesitaba mostrar un catálogo complejo de proyectos de arquitectura e ingeniería de manera organizada, visualmente impactante y fácil de administrar.",
    solution: "Desarrollamos un sitio web de portafolio dinámico utilizando WordPress y Elementor. Implementamos Custom Post Types y galerías de productos dinámicas que permiten presentar cada obra arquitectónica con el detalle que merece.",
    tags: ["WordPress", "Custom Post Types", "Dynamic Galleries", "Portfolio"],
    link: "https://mdnconstrucciones.com.ar/"
  },
  {
    title: "Products as a Service",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "from-emerald-900 to-green-600",
    details: "Landing page escalable y optimizada para un concepto SaaS.",
    challenge: "Lanzar un nuevo concepto SaaS (PaaS) requería una infraestructura web que no solo explicara el modelo de negocio, sino que garantizara escalabilidad y posicionamiento SEO inmediato.",
    solution: "Diseñamos e implementamos una solución escalable en WordPress. El desarrollo se centró en SEO técnico avanzado, formularios personalizados de alta conversión y una optimización extrema del rendimiento para tiempos de carga mínimos.",
    tags: ["SaaS", "SEO", "Scalability", "High Performance"],
    link: "https://productsasaservice.com/"
  }
];

const Portfolio: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  return (
    <section id="portfolio" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">Casos de Éxito</h2>
            <p className="text-neutral-300 max-w-lg font-normal">
              Resultados reales para empresas que desafían el status quo. Haz click para ver detalles.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-yellow font-medium italic hover:text-white transition-colors flex items-center gap-2">
            Ver más en GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              onClick={() => setSelectedCase(project)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10] border border-neutral-900 hover:border-white/20 transition-colors shadow-lg hover:shadow-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10`}></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Glass Overlay for text */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent -z-10"></div>
                <span className="text-xs font-light italic text-brand-yellow uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="
                relative w-full max-w-4xl 
                bg-neutral-900/80 backdrop-blur-xl 
                border border-white/10 
                rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] 
                max-h-[90vh] flex flex-col
              "
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-brand-yellow hover:text-black transition-colors border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto custom-scrollbar">
                {/* Header Image */}
                <div className="relative h-64 md:h-80 w-full">
                   <div className={`absolute inset-0 bg-gradient-to-t ${selectedCase.color} opacity-40 mix-blend-multiply`}></div>
                   <img 
                     src={selectedCase.image} 
                     alt={selectedCase.title} 
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-light italic uppercase tracking-wider mb-3 border border-brand-yellow/20 backdrop-blur-sm">
                        {selectedCase.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-extrabold text-white">{selectedCase.title}</h3>
                   </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Left Column: Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h4 className="text-lg font-bold italic text-white mb-2">El Desafío</h4>
                            <p className="text-neutral-300 leading-relaxed font-normal">
                                {selectedCase.challenge}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold italic text-white mb-2">La Solución</h4>
                            <p className="text-neutral-300 leading-relaxed font-normal">
                                {selectedCase.solution}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Details & Stack */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">Tecnologías</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedCase.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-light italic text-neutral-300 flex items-center gap-1">
                                        <Tag size={10} /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <p className="text-sm text-neutral-300 mb-4 italic font-light">
                                "{selectedCase.details}"
                            </p>
                            <a 
                              href={selectedCase.link}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="
                                group w-full py-3 rounded-xl
                                bg-white text-black 
                                font-bold uppercase text-[10px] tracking-[0.2em] 
                                hover:bg-brand-yellow hover:text-black
                                transition-all duration-300
                                flex items-center justify-center gap-2 
                                shadow-[0_0_20px_-5px_rgba(253,185,19,0.05)]
                                hover:shadow-[0_0_40px_-5px_rgba(253,185,19,0.4)]
                              "
                            >
                                <span className="relative z-10 flex items-center gap-2">Visitar Sitio <ArrowRight size={16} /></span>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;