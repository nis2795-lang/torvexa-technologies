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
              Helping businesses transform ideas into scalable digital products through custom software development, enterprise solutions, SaaS platforms, data-driven applications, and technology modernization.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We combine technical expertise with a business-first approach to deliver reliable solutions that support growth, efficiency, and long-term success.
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
                <a 
                  href={`https://wa.me/${companyInfo.whatsapp?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-600 hover:text-green-600 transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0 mt-0.5 text-green-500 group-hover:text-green-600 transition-colors">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-sm">Phone:<br />{companyInfo.whatsapp}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-blue-600 transition-colors text-sm break-words inline-block max-w-full">{companyInfo.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm whitespace-pre-line">{companyInfo.location}</span>
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
