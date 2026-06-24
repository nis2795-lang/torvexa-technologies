import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-[linear-gradient(135deg,#1e3a8a_0%,#2563eb_100%)] relative overflow-hidden">
      {/* Decorative geometric blobs similar to reference image */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-lg text-blue-100">
            Comprehensive engineering services focused on performance, scalability, and robust architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 border border-white/10 rounded-3xl p-8 hover:bg-white/20 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-blue-500 border-none transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-white/10">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm font-medium text-white/90 flex items-start gap-3">
                        <span className="text-blue-300 mt-0.5 text-xs">◆</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
