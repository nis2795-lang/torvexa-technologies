import React from 'react';
import { companyInfo } from '../data';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function Logo({ className = "", iconClassName = "", textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <img src="/logo.png" alt={companyInfo.name} className={`h-8 w-auto object-contain ${iconClassName}`} />
      <span className={`font-bold text-xl tracking-tight text-slate-900 ${textClassName}`}>
        {companyInfo.name}
      </span>
    </div>
  );
}
