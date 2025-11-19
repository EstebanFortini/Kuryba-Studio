import React from 'react';
import { Instagram, Linkedin, ArrowUpRight, Circle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-brand-yellow/15 via-black/90 to-black backdrop-blur-xl border-t border-brand-yellow/10 pt-20 pb-10 text-sm relative z-10 shadow-[0_-10px_50px_-20px_rgba(253,185,19,0.2)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
             <img 
                src="https://kurybastudio.com/wp-content/uploads/2025/06/Logo-Kuryba-Studio-sin-fondo-e1750883023105.webp" 
                alt="Kūryba Studio" 
                className="h-20 w-auto object-contain -ml-2" 
              />
             <p className="text-neutral-400 text-base leading-relaxed max-w-sm font-light">
               Ayudamos a empresas visionarias a construir un legado digital. Diseño estratégico, desarrollo robusto y crecimiento medible.
             </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Explorar</h4>
            <ul className="space-y-4">
              {['Servicios', 'Portafolio', 'Proceso', 'Planes'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Portafolio' ? 'portfolio' : item === 'Planes' ? 'pricing' : item.toLowerCase()}`} className="text-neutral-400 hover:text-brand-yellow transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Conectar</h4>
            <div className="flex flex-col gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-brand-yellow/50 group-hover:text-brand-yellow transition-colors">
                  <Instagram size={18} />
                </div>
                <span>Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-brand-yellow/50 group-hover:text-brand-yellow transition-colors">
                  <Linkedin size={18} />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-neutral-500 font-normal italic text-xs">
            © {new Date().getFullYear()} Kūryba Studio. Todos los derechos reservados.
          </div>
          
          {/* System Status - The added Polish detail */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
             </span>
             <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">System: Operational</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Política de Privacidad</a>
            <a href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;