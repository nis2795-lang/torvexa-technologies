import React from 'react';
import { motion } from 'motion/react';
import { industries, techStack, companyInfo } from '../data';
import { CheckCircle2, Target, Activity, TrendingUp, Handshake, CalendarDays, Users, ArrowRight } from 'lucide-react';

export function Features() {
  return (
    <>
      <section className="py-24 bg-white" id="industries">
        <div className="container mx-auto px-6">
        
        {/* Industries Section */}
        <div className="mb-32">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">Delivering specialized solutions across domains.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                  <p className="text-slate-600">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      {/* Why Businesses Trust Us */}
      <section className="py-24 bg-[linear-gradient(135deg,#1e3a8a_0%,#2563eb_100%)] relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Businesses Trust Us</h2>
            <p className="text-xl text-blue-100">
              We don't just build software. We build long-term partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: '30%', text: 'Boost in Productivity', icon: Target },
              { stat: '24/7', text: 'Real-time Insights', icon: Activity },
              { stat: '2x', text: 'Faster Fulfillment', icon: TrendingUp },
              { stat: '95%', text: 'Client Retention', icon: Handshake }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/20 transition-all shadow-lg"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/30 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3">{item.stat}</div>
                <div className="text-sm font-medium text-blue-100 uppercase tracking-wide">{item.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              'On-Time Delivery',
              'Dedicated Project Manager',
              'Post-Launch Support',
              'NDA & IP Protection'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="font-medium text-white/90">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation & Tech Stack */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Consultation Let's Discuss */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6 uppercase tracking-wider text-sm">
                Free 30-Minute Consultation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Let's Discuss Your <span className="text-blue-600">Next Big Project</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Book a free consultation with our IT experts. No commitment, no pressure - just a conversation about how technology can accelerate your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={`https://wa.me/${companyInfo.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 group">
                  Book Your Meeting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap gap-6 items-center border-t border-slate-200 pt-8">
                {[
                  { text: 'Free 30-min consultation', icon: CalendarDays },
                  { text: 'No commitment', icon: CheckCircle2 },
                  { text: 'Expert IT advisors', icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Technology Stack</h2>
              <div className="space-y-6">
                {techStack.map((tech, i) => (
                  <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <h3 className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-3">{tech.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
