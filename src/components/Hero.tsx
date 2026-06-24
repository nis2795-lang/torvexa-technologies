import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { companyInfo, capabilitiesDetails } from '../data';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-50 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Engineering Systems <br className="hidden md:block" />
              <span className="text-blue-700">
                Where Performance Matters
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
              {companyInfo.shortDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm hover:shadow"
            >
              Schedule a Consultation
              <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-xl font-medium border border-slate-200 transition-all shadow-sm hover:shadow"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
