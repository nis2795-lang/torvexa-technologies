import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Database, Code2, Bot, Building2 } from 'lucide-react';
import { portfolioCategories } from '../portfolioData';

const categoryIcons = {
  "Financial Services & Banking Systems": Building2,
  "Low-Latency & High-Performance Systems": Code2,
  "Distributed Backend Platforms": Database,
  "AI Automation Solutions": Bot,
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-sm font-mono text-blue-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Enterprise Solutions that <span className="text-blue-600">Drive Growth</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From high-performance trading engines to custom distributed platforms — explore how we've helped businesses achieve their digital ambitions through tailored software solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-2 mb-12 lg:mb-16 pb-4 lg:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {portfolioCategories.map((category, idx) => {
            const Icon = categoryIcons[category.title as keyof typeof categoryIcons] || Code2;
            const isActive = activeCategory === idx;
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(idx)}
                className={`snap-center shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:bg-blue-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioCategories[activeCategory].projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all group flex flex-col h-full"
                >
                  <div className="mb-6 flex flex-col shrink-0">
                    <div className="h-8 mb-4">
                      {project.industry && (
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase">
                          {project.industry}
                        </span>
                      )}
                    </div>
                    
                    <div className="h-[60px] xl:h-[56px] mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="h-[96px] md:h-[116px] xl:h-[96px]">
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                        <strong className="text-slate-900">Problem Solved: </strong>
                        {project.problem}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-1 mt-0">
                      <strong className="text-sm text-slate-900 uppercase tracking-wider block mb-3">Highlights</strong>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-blue-600 mt-1 shrink-0 text-xs">◆</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
