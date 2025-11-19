
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold italic text-white mb-6"
            >
              Hablemos de tu próximo <span className="text-brand-yellow">gran salto.</span>
            </motion.h2>
            <p className="text-neutral-300 mb-12 text-lg font-normal">
              Estamos listos para llevar tu visión al siguiente nivel. Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300 group">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 text-brand-yellow group-hover:border-brand-yellow/50 transition-colors shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 italic font-light uppercase tracking-wider">Email</p>
                  <a href="mailto:hola@kurybastudio.com" className="text-lg font-medium italic hover:text-white transition-colors">hola@kurybastudio.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-300 group">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 text-brand-green group-hover:border-brand-green/50 transition-colors shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 italic font-light uppercase tracking-wider">Teléfono</p>
                  <p className="text-lg font-medium italic">+54 9 113 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-neutral-300 group">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 text-brand-red group-hover:border-brand-red/50 transition-colors shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 italic font-light uppercase tracking-wider">Ubicación</p>
                  <p className="text-lg font-medium italic">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              bg-white/5 backdrop-blur-xl 
              p-8 rounded-3xl border border-white/10 
              shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]
            "
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow focus:shadow-[0_0_20px_-5px_rgba(253,185,19,0.3)] outline-none transition-all placeholder:text-neutral-600 placeholder:font-light placeholder:italic font-normal backdrop-blur-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Empresa</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow focus:shadow-[0_0_20px_-5px_rgba(253,185,19,0.3)] outline-none transition-all placeholder:text-neutral-600 placeholder:font-light placeholder:italic font-normal backdrop-blur-sm"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow focus:shadow-[0_0_20px_-5px_rgba(253,185,19,0.3)] outline-none transition-all placeholder:text-neutral-600 placeholder:font-light placeholder:italic font-normal backdrop-blur-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow focus:shadow-[0_0_20px_-5px_rgba(253,185,19,0.3)] outline-none transition-all placeholder:text-neutral-600 placeholder:font-light placeholder:italic font-normal resize-none backdrop-blur-sm"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="
                  group w-full bg-white text-black 
                  font-black uppercase tracking-[0.2em] text-xs
                  py-4 rounded-xl 
                  transition-all duration-300
                  hover:bg-brand-yellow hover:text-black
                  shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]
                  hover:shadow-[0_0_30px_-5px_rgba(253,185,19,0.6)]
                  hover:-translate-y-1
                  flex items-center justify-center gap-2
                "
              >
                <span className="relative z-10">Enviar Mensaje</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
