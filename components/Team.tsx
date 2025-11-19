import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Elena R.",
    role: "Creative Director",
    image: "https://picsum.photos/400/400?random=10",
  },
  {
    name: "Mateo V.",
    role: "Lead Developer",
    image: "https://picsum.photos/400/400?random=11",
  },
  {
    name: "Sofia L.",
    role: "Growth Specialist",
    image: "https://picsum.photos/400/400?random=12",
  },
  {
    name: "Javier M.",
    role: "Project Manager",
    image: "https://picsum.photos/400/400?random=13",
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-transparent border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold italic text-white mb-4">El Equipo</h2>
          <p className="text-neutral-300 font-normal">Mentes creativas detrás de cada pixel.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                group bg-white/5 backdrop-blur-xl 
                p-4 rounded-2xl border border-white/10 
                hover:border-white/20 hover:bg-white/10
                hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.15)]
                transition-all duration-300
              "
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-neutral-800 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-brand-yellow transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-brand-green transition-colors">
                        <Twitter size={18} />
                    </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-yellow transition-colors">{member.name}</h3>
              <p className="text-sm italic text-neutral-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;