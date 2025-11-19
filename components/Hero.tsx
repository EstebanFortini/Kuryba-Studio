
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Brand colors exact hex codes
  const brandYellow = "#FDB913";
  const brandGreen = "#007A33";
  const brandRed = "#C1272D";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-36 overflow-hidden bg-transparent">
      {/* Global background handles the atmosphere now. We keep this clean. */}

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 hover:border-white/20 transition-all cursor-default shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] group">
            <motion.span 
              animate={{ backgroundColor: [brandGreen, brandYellow, brandRed, brandGreen] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]"
            ></motion.span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
              Aceptando proyectos 2026
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] sm:leading-[1.1]">
            <span className="block text-neutral-100 drop-shadow-2xl">Soluciones digitales</span>
            
            {/* The "Special" Part */}
            <motion.span 
              className="relative inline-block mt-2 px-4"
              whileHover="hover"
              initial="initial"
            >
              {/* Foreground Text - Clean, No Hover distortion */}
              <motion.span
                className="relative z-10 bg-gradient-to-r from-brand-yellow via-brand-green to-brand-red bg-[200%_auto] bg-clip-text text-transparent pb-2 block"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                a medida.
              </motion.span>

              {/* Thicker Underline (2px) */}
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-brand-yellow via-brand-green to-brand-red opacity-0 rounded-full"
                variants={{
                  hover: { opacity: 1, width: "100%", transition: { duration: 0.4, ease: "easeOut" } },
                  initial: { opacity: 0, width: "0%" }
                }}
              />
            </motion.span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-normal text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ayudamos a marcas ambiciosas a escalar a través de experiencias digitales inmersivas, tecnología robusta y estrategias de crecimiento medibles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Pro Button - White BG to Yellow Hover - UNIFIED GLOW */}
            <a
              href="#contact"
              className="
                group relative w-full sm:w-auto px-8 py-4 
                bg-white text-black rounded-full 
                transition-all duration-300
                hover:bg-brand-yellow
                shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_30px_-5px_rgba(253,185,19,0.6)]
                hover:-translate-y-1
              "
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-xs font-black uppercase tracking-[0.15em]">Iniciar Proyecto</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
            
            {/* Secondary Pro Button */}
            <a
              href="#portfolio"
              className="
                group w-full sm:w-auto px-8 py-4 
                bg-transparent border border-white/20 text-white rounded-full 
                hover:bg-white hover:text-black hover:border-transparent
                transition-all duration-300 backdrop-blur-sm
                hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]
                hover:-translate-y-1
              "
            >
               <span className="text-xs font-black uppercase tracking-[0.15em]">Ver Casos</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-neutral-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-600">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-neutral-800 to-transparent relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
