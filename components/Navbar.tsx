
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Servicios', href: '#services', id: 'services' },
  { name: 'Casos', href: '#portfolio', id: 'portfolio' },
  { name: 'Proceso', href: '#process', id: 'process' },
  { name: 'Planes', href: '#pricing', id: 'pricing' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  // Changed breakpoint to 1024px (lg) to treat Tablets as "Mobile" regarding navigation style
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind 'lg' breakpoint is 1024px. 
      // We want the "Side Menu" ONLY on Large Desktop screens.
      // Tablets and Mobile will keep the Top Navbar always.
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Mode Toggle Threshold
      if (scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy Logic
      const sections = ['hero', ...navLinks.map(link => link.id), 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Logic: If the section is roughly in the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleResize();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Variants
  const topNavVariants = {
    visible: { y: 0, opacity: 1, pointerEvents: "auto" as const },
    hidden: { y: -100, opacity: 0, pointerEvents: "none" as const }
  };

  const sideNavVariants = {
    visible: { x: 0, opacity: 1, pointerEvents: "auto" as const },
    hidden: { x: 50, opacity: 0, pointerEvents: "none" as const }
  };

  // Determining visibility logic
  // Desktop: Show TopNav if NOT scrolled. Hide if Scrolled.
  // Mobile/Tablet: Show TopNav ALWAYS.
  const showTopNav = !isDesktop || (isDesktop && !isScrolled);
  
  // Side Nav only for Desktop Scrolled
  const showSideNav = isDesktop && isScrolled;

  // Dynamic Styles for the Navbar Container
  // 1. Mobile/Tablet: 92% width
  // 2. Desktop: "calc(100% - 3rem)" matches the 'mx-auto px-6' logic of the content sections
  const navWidth = !isDesktop 
    ? "92%" 
    : "calc(100% - 3rem)"; 

  // Max Width Logic
  // 1. Mobile: Standard 7xl cap
  // 2. Desktop: "calc(80rem - 3rem)" matches 'max-w-7xl' minus 'px-6' (padding).
  const navMaxWidth = !isDesktop
    ? "1280px"
    : "calc(80rem - 3rem)";

  const navTop = !isDesktop 
    ? "1rem" // Mobile/Tablet top spacing
    : "2.5rem"; // Desktop top spacing

  return (
    <>
      {/* ============================================== */}
      {/* 1. TOP NAVBAR (Responsive "Island")            */}
      {/* ============================================== */}
      <motion.nav
        initial="visible"
        animate={showTopNav ? "visible" : "hidden"}
        variants={topNavVariants}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="
          fixed z-[100] 
          left-0 right-0 mx-auto 
          border overflow-hidden flex flex-col
        "
        style={{
          width: navWidth,
          maxWidth: navMaxWidth,
          top: navTop,
          borderRadius: isOpen ? "32px" : "9999px",
          paddingTop: (!isDesktop || isScrolled) ? "0.75rem" : "1.25rem",
          paddingBottom: isOpen ? "1.5rem" : ((!isDesktop || isScrolled) ? "0.75rem" : "1.25rem"),
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          backgroundColor: (isOpen || !isDesktop || isScrolled) ? "rgba(10, 10, 10, 0.90)" : "rgba(10, 10, 10, 0.3)", 
          borderColor: (isOpen || !isDesktop || isScrolled) ? "rgba(253, 185, 19, 0.2)" : "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)"
        }}
      >
        <div className="w-full flex items-center justify-between relative shrink-0">
          {/* Logo */}
          <a href="#" className="block shrink-0 relative z-10">
            <motion.img 
              src="https://kurybastudio.com/wp-content/uploads/2025/06/Logo-Kuryba-Studio-sin-fondo-e1750883023105.webp" 
              alt="Kūryba Studio" 
              animate={{ height: !isDesktop ? "48px" : "76px" }} 
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-auto object-contain drop-shadow-[0_0_15px_rgba(253,185,19,0.1)]" 
            />
          </a>

          {/* Desktop Nav Links (Visible only on LG+) */}
          <div className="hidden lg:flex items-center gap-8 mx-8 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-neutral-200 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop Only) - Unified Glow */}
          <div className="hidden lg:block shrink-0 relative z-10">
            <a
              href="#contact"
              className="
                group relative px-6 py-3 rounded-full 
                bg-white text-black 
                text-[10px] font-black uppercase tracking-[0.2em] 
                transition-all duration-300 
                hover:bg-brand-yellow hover:text-black
                shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_30px_-5px_rgba(253,185,19,0.6)]
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              <span className="relative z-10">Hablemos</span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button (Visible on < LG) */}
          <button
            className="lg:hidden text-white p-2 relative z-10 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} className="text-brand-yellow" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden w-full relative z-10"
            >
              <div className="flex flex-col pt-8 pb-2 gap-6 items-center border-t border-white/10 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium italic text-neutral-200 hover:text-brand-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full px-6 py-4 bg-brand-yellow text-black font-bold uppercase tracking-wider text-center rounded-xl shadow-[0_0_20px_rgba(253,185,19,0.4)]"
                >
                  Empezar Ahora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ============================================== */}
      {/* 2. SIDE NAVIGATION (Desktop Scrolled ONLY)     */}
      {/* ============================================== */}
      <motion.div
        initial="hidden"
        animate={showSideNav ? "visible" : "hidden"}
        variants={sideNavVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col items-center gap-6"
      >
        <div className="
          flex flex-col items-center gap-4 py-6 px-3
          bg-black/40 backdrop-blur-xl border border-white/10
          rounded-full shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]
        ">
          {/* Mini Logo / Home */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="
              p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all
              border border-transparent hover:border-white/10 mb-2 group relative
            "
          >
             <ArrowUp size={20} />
             <span className="
               absolute right-full mr-4 top-1/2 -translate-y-1/2 
               bg-black/90 text-white text-[10px] font-bold uppercase tracking-widest 
               px-3 py-1.5 rounded-md border border-white/10 whitespace-nowrap
               opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
             ">
               Inicio
             </span>
          </button>

          {/* Section Bullets */}
          <div className="flex flex-col gap-4 items-center w-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center justify-center w-4 h-4"
                  aria-label={link.name}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      backgroundColor: isActive ? "#FDB913" : "rgba(255, 255, 255, 0.2)",
                      borderColor: isActive ? "rgba(253, 185, 19, 0.5)" : "transparent"
                    }}
                    className={`
                      w-2.5 h-2.5 rounded-full transition-all duration-300
                      border group-hover:bg-white group-hover:scale-125
                      ${isActive ? 'shadow-[0_0_10px_rgba(253,185,19,0.6)]' : ''}
                    `}
                  />
                  <span className="
                    absolute right-full mr-6 top-1/2 -translate-y-1/2 
                    text-xs font-bold uppercase tracking-widest text-right
                    text-white opacity-0 -translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300 pointer-events-none whitespace-nowrap
                  ">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="w-1/2 h-px bg-white/10 my-2"></div>

          {/* Mini CTA / Contact */}
          <a 
            href="#contact"
            className={`
              p-2 rounded-full transition-all duration-300
              group relative
              ${activeSection === 'contact' 
                ? 'bg-brand-yellow text-black shadow-[0_0_15px_rgba(253,185,19,0.4)]' 
                : 'bg-white text-black hover:bg-brand-yellow'
              }
            `}
          >
             <Mail size={18} />
              <span className="
               absolute right-full mr-4 top-1/2 -translate-y-1/2 
               bg-black/90 text-white text-[10px] font-bold uppercase tracking-widest 
               px-3 py-1.5 rounded-md border border-white/10 whitespace-nowrap
               opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
             ">
               Hablemos
             </span>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
