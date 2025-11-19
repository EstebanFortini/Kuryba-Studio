
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Server, TrendingUp } from 'lucide-react';

const plans = [
  {
    name: "Visual Impact",
    price: "300",
    currency: "USD",
    paymentType: "Pago único",
    maintenance: "Desde 15 USD / mes",
    desc: "Landing Pages de alto impacto desarrolladas con IA. Velocidad extrema y estética premium para validar ideas o vender productos.",
    roleFocus: "AI Dev + Diseño UI",
    features: [
      "Landing One-Page (React/Next.js)",
      "Diseño Generativo Premium",
      "Entrega Express (48-72hs)",
      "Optimización Móvil Perfecta",
      "Formulario de Contacto",
      "Hosting de Alto Rendimiento"
    ],
    themeColor: "yellow", // #FDB913
    icon: <Sparkles size={20} className="text-brand-yellow" />
  },
  {
    name: "Corporate System",
    price: "500",
    currency: "USD",
    paymentType: "Pago único",
    maintenance: "Desde 25 USD / mes",
    desc: "Sitios corporativos robustos en WordPress. Ideales para empresas que necesitan gestionar su propio contenido y escalar.",
    roleFocus: "WordPress + Arquitectura",
    features: [
      "Sitio Web Multi-página (Hasta 5)",
      "Gestor de Contenidos (WordPress)",
      "Blog / Sección de Noticias",
      "Optimización SEO Estructural",
      "Panel Autoadministrable",
      "Integración con WhatsApp/CRM"
    ],
    themeColor: "green", // #007A33
    recommended: true,
    icon: <Server size={20} className="text-brand-green" />
  },
  {
    name: "Growth Partner",
    price: "A Cotizar",
    currency: "",
    paymentType: "Plan Mensual",
    maintenance: "Servicio Recurrente",
    desc: "Tu equipo de marketing externo. Diseñamos tu estrategia de adquisición y mantenemos tu imagen impecable mes a mes.",
    roleFocus: "Ads + Social + Diseño Gráfico",
    features: [
      "Estrategia de Campañas (Ads)",
      "Gestión de Redes Sociales",
      "Diseño Gráfico On-Demand",
      "Creación de Contenido Visual",
      "Reportes de Rendimiento",
      "Reuniones de Estrategia"
    ],
    themeColor: "red", // #C1272D
    icon: <TrendingUp size={20} className="text-brand-red" />
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold italic text-white mb-6"
          >
            Inversión Estratégica
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300 max-w-2xl mx-auto font-normal"
          >
            Tecnología acelerada por IA o estructuras corporativas robustas. Elige el motor que tu negocio necesita hoy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            // Theme styles for container
            let borderColorClass = "";
            let textColorClass = "text-white";
            let iconColor = "text-neutral-500";
            let glowClass = "";
            let shadowClass = "";
            
            // Button specific styles logic
            let btnClass = "";
            
            if (plan.themeColor === 'yellow') {
                borderColorClass = "border-brand-yellow/20 group-hover:border-brand-yellow/50";
                textColorClass = "text-brand-yellow";
                iconColor = "text-brand-yellow";
                // Yellow: Nice and bright
                glowClass = "hover:shadow-[0_0_50px_-10px_rgba(253,185,19,0.3)]";
                shadowClass = "shadow-[0_0_20px_-5px_rgba(253,185,19,0.05)]";
                
                // Yellow Card: Hover Yellow, Text Black
                btnClass = "bg-white text-black hover:bg-brand-yellow hover:text-black hover:shadow-[0_0_30px_-5px_rgba(253,185,19,0.5)]";

            } else if (plan.themeColor === 'green') {
                borderColorClass = "border-brand-green/20 group-hover:border-brand-green/50";
                textColorClass = "text-brand-green";
                iconColor = "text-brand-green";
                // Green: Needs to be subtle but visible
                glowClass = "hover:shadow-[0_0_50px_-10px_rgba(0,122,51,0.4)]";
                shadowClass = "shadow-[0_0_20px_-5px_rgba(0,122,51,0.05)]";
                
                // Green Card: Hover Green, Text White
                btnClass = "bg-white text-black hover:bg-brand-green hover:text-white hover:shadow-[0_0_30px_-5px_rgba(0,122,51,0.5)]";

            } else if (plan.themeColor === 'red') {
                borderColorClass = "border-brand-red/20 group-hover:border-brand-red/50";
                textColorClass = "text-brand-red";
                iconColor = "text-brand-red";
                // Red: Needs to be subtle
                glowClass = "hover:shadow-[0_0_50px_-10px_rgba(193,39,45,0.4)]";
                shadowClass = "shadow-[0_0_20px_-5px_rgba(193,39,45,0.05)]";
                
                // Red Card: Hover Red, Text White
                btnClass = "bg-white text-black hover:bg-brand-red hover:text-white hover:shadow-[0_0_30px_-5px_rgba(193,39,45,0.5)]";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`
                  relative p-8 rounded-3xl border 
                  bg-white/5 backdrop-blur-xl
                  flex flex-col h-full transition-all duration-500 group
                  ${borderColorClass} ${glowClass} ${shadowClass}
                  ${plan.recommended ? 'md:-translate-y-4 z-10 bg-white/[0.07]' : 'hover:-translate-y-1'}
                `}
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${textColorClass}`}>
                      {plan.name}
                    </h3>
                    {plan.icon && (
                      <div className="p-2 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
                        {plan.icon}
                      </div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                      {plan.name !== "Growth Partner" ? "+ " : ""}{plan.price}
                    </span>
                    <span className="text-lg font-bold text-neutral-500 ml-1">{plan.currency}</span>
                  </div>
                  
                  <div className="text-sm text-neutral-500 mb-4 font-medium italic">
                    {plan.paymentType}
                  </div>

                  {/* Maintenance Badge */}
                  <div className="mb-6 py-2 px-3 bg-black/40 rounded-lg border border-white/5 inline-block">
                     <span className="text-xs text-neutral-400 italic font-light">
                        {plan.maintenance === "Servicio Recurrente" ? "Membresía Mensual" : `Mantenimiento: ${plan.maintenance}`}
                     </span>
                  </div>
                  
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed min-h-[60px] font-normal">
                    {plan.desc}
                  </p>

                  {/* Role Focus Badge */}
                  <div className="inline-block px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-full text-center">
                    <span className="text-xs font-medium italic text-neutral-300 uppercase tracking-wide">
                      {plan.roleFocus}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 group-hover:text-white transition-colors font-normal">
                        <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${iconColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION BUTTON */}
                <a
                  href="#contact"
                  className={`
                    group/btn w-full py-4 px-6 rounded-xl
                    flex items-center justify-center gap-2
                    transition-all duration-300 relative overflow-hidden
                    ${btnClass}
                  `}
                >
                  <span className="relative z-10 text-xs font-black uppercase tracking-[0.15em] transition-colors">
                    {plan.name === "Growth Partner" ? "Cotizar" : "Comenzar"}
                  </span>
                  <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
