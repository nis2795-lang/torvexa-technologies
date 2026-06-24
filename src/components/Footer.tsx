import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { companyInfo } from '../data';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo iconClassName="w-8 h-8 text-sm" textClassName="text-xl" />
            <p className="text-slate-600 text-sm leading-relaxed">
              Empowering your business with high-performance software systems, low-latency trading infrastructure, distributed systems, and modern C++ development in Ahmedabad, India.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our team of experts delivers reliable technology solutions tailored to your business needs, engineered for long-term success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">About Torvexa Technologies</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#industries" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Industries</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">Phone:<br />{companyInfo.whatsapp}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-blue-600 transition-colors text-sm break-words inline-block max-w-full">{companyInfo.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">{companyInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Follow Us</h3>
            <p className="text-slate-600 text-sm mb-4">Stay connected with us for updates and insights!</p>
            <div className="flex items-center gap-4">
              <a 
                href={`https://${companyInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm font-medium">
            &copy; {currentYear} {companyInfo.name}. All Rights Reserved.
          </div>
          <div className="text-slate-500 text-sm">
            {companyInfo.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
