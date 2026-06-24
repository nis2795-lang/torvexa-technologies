import React from 'react';
import { motion } from 'motion/react';
import { companyInfo } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
                About Torvexa Technologies
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-xl mb-12">
                <p>
                  Torvexa Technologies was founded with a simple vision: <strong className="text-slate-900 font-medium">{companyInfo.foundedVision}</strong>
                </p>
                <p>
                  Our expertise spans high-performance trading infrastructure, distributed systems, custom business applications, CRM platforms, dashboards, enterprise software, and performance optimization.
                </p>
                <p>
                  Whether you're building a new product, modernizing existing infrastructure, solving complex technical problems, or scaling a growing business, we bring engineering discipline and practical execution to every project.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
              <p className="text-2xl md:text-3xl font-medium text-blue-700 leading-snug">
                We don't just write code.<br />
                We engineer solutions that create measurable business impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
