
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Inmersión Estratégica",
    subtitle: "Análisis & Definición",
    desc: "No empezamos escribiendo código, sino entendiendo tu negocio. Analizamos tu competencia, definimos tus KPIs y trazamos un roadmap claro que garantice el retorno de inversión.",
    icon: <Search size={32} />,
    color: "text-brand-yellow",
    // Ultra subtle gradient (5%) to avoid banding
    bgGradient: "from-brand-yellow/5 to-transparent", 
    borderColor: "border-brand-yellow/50",
    shadow: "shadow-[0_0_80px_-30px_rgba(253,185,19,0.15)]" // Wider, softer shadow
  },
  {
    id: "02",
    title: "Arquitectura & Diseño",
    subtitle: "UX/UI & Prototipado",
    desc: "Traducimos la estrategia en una experiencia visual tangible. Creamos wireframes y diseños de alta fidelidad centrados en la conversión, asegurando que cada click sea intuitivo.",
    icon: <PenTool size={32} />,
    color: "text-brand-green",
    bgGradient: "from-brand-green/5 to-transparent",
    borderColor: "border-brand-green/50",
    shadow: "shadow-[0_0_80px_-30px_rgba(0,122,51,0.15)]"
  },
  {
    id: "03",
    title: "Desarrollo & Ingeniería",
    subtitle: "Código & Infraestructura",
    desc: "Construimos el activo digital con tecnología robusta. Código limpio, optimizado para SEO y alto rendimiento (Core Web Vitals), asegurando velocidad y escalabilidad futura.",
    icon: <Code2 size={32} />,
    color: "text-brand-red",
    bgGradient: "from-brand-red/5 to-transparent",
    borderColor: "border-brand-red/50",
    shadow: "shadow-[0_0_80px_-30px_rgba(193,39,45,0.15)]"
  },
  {
    id: "04",
    title: "Lanzamiento & Escala",
    subtitle: "Deploy & Growth",
    desc: "El despliegue es solo el comienzo. Configuramos analíticas avanzadas, optimizamos la indexación y te acompañamos en la fase de crecimiento para maximizar resultados.",
    icon: <Rocket size={32} />,
    color: "text-brand-yellow",
    bgGradient: "from-brand-yellow/5 to-transparent",
    borderColor: "border-brand-yellow/50",
    shadow: "shadow-[0_0_80px_-30px_rgba(253,185,19,0.15)]"
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Improved Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.5; // Trigger point at 50% of screen height

      // Find which step is currently engaging with the center of the screen
      let currentStep = activeStep;
      
      // Iterate through refs to find the one in view
      stepsRef.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // If the top of the element is above the center, and the bottom is below the center
          // Or if it's the last element and visible
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentStep = index;
          }
        }
      });

      if (currentStep !== activeStep) {
        setActiveStep(currentStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  return (
    <section id="process" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold italic text-white mb-6"
          >
            Nuestra Metodología
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300 max-w-2xl text-lg font-normal"
          >
            Transformamos la complejidad en resultados predecibles a través de un proceso estructurado, transparente y ágil.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Sticky Control Panel (Desktop) */}
          <div className="hidden lg:flex flex-col justify-center h-[calc(100vh-12rem)] sticky top-32 self-start">
            <div className="relative w-full max-w-md">
               {/* Animated Background Blob - significantly softened for better monitor rendering */}
               <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.15, scale: 1 }} // Reduced opacity to 15%
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1.2 }} // Slower, smoother transition
                  className={`absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[160px] -z-10 bg-gradient-to-br ${steps[activeStep].bgGradient}`}
                />
               </AnimatePresence>

               <div className="space-y-8">
                  {/* Number & Icon Transition */}
                  <div className="relative h-32">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <div className="flex items-center gap-6">
                          <span className="text-8xl font-extrabold text-white/10 leading-none select-none">
                            {steps[activeStep].id}
                          </span>
                          <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${steps[activeStep].color} ${steps[activeStep].shadow}`}>
                            {steps[activeStep].icon}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Title Transition */}
                  <div className="relative h-28">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <h3 className="text-4xl font-bold text-white mb-2">
                          {steps[activeStep].title}
                        </h3>
                        <p className={`text-xl font-medium italic ${steps[activeStep].color}`}>
                          {steps[activeStep].subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Progress Bar Indicators */}
                  <div className="flex items-center gap-3 mt-8">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const element = stepsRef.current[idx];
                          if (element) {
                            const y = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (element.clientHeight / 2);
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          idx === activeStep 
                            ? `w-16 ${steps[activeStep].color.replace('text-', 'bg-')}` 
                            : 'w-4 bg-neutral-800 hover:bg-neutral-700'
                        }`}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Scrollable Content */}
          <div className="flex flex-col gap-12 lg:gap-0 lg:py-[10vh]">
             {steps.map((step, index) => (
               <motion.div
                 key={index}
                 ref={(el) => { stepsRef.current[index] = el; }}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ margin: "-10% 0px -10% 0px" }}
                 transition={{ duration: 0.5 }}
                 className={`
                   min-h-[50vh] lg:min-h-[60vh] flex items-center group transition-opacity duration-500
                   ${activeStep === index ? 'opacity-100' : 'lg:opacity-40'}
                 `}
               >
                  <div className={`
                    relative w-full p-8 md:p-12 rounded-3xl border transition-all duration-500 
                    bg-white/5 backdrop-blur-md shadow-lg
                    ${activeStep === index 
                      ? 'border-white/20 shadow-[0_0_50px_-20px_rgba(255,255,255,0.05)]' 
                      : 'border-white/5 hover:border-white/10'
                    }
                  `}>
                    {/* Mobile Header (Visible only on mobile) */}
                    <div className="lg:hidden flex items-center gap-4 mb-6">
                      <span className={`text-4xl font-extrabold ${step.color}`}>{step.id}</span>
                      <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${step.color}`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Mobile Title (Visible only on mobile) */}
                    <div className="lg:hidden mb-4">
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      <p className={`text-sm font-medium italic ${step.color}`}>{step.subtitle}</p>
                    </div>

                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed relative z-10 font-normal">
                      {step.desc}
                    </p>

                    {/* Subtle Gradient Line at bottom - Opacity reduced */}
                    <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${step.bgGradient} opacity-30`}></div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
