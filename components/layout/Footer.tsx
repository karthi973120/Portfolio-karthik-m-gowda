'use client';

import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="border-t border-white/[0.06] bg-[rgba(10,10,15,0.8)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgb(var(--accent-cyan))] to-[rgb(var(--accent-violet))] flex items-center justify-center font-mono font-bold text-xs text-black">KG</div>
            <div>
              <p className="font-semibold text-sm text-[rgb(var(--text-primary))]">{SITE_CONFIG.name}</p>
              <p className="text-xs text-[rgb(var(--text-muted))]">{SITE_CONFIG.title}</p>
            </div>
          </div>
          <p className="text-sm text-[rgb(var(--text-muted))] order-last md:order-none">© {new Date().getFullYear()} Karthik M Gowda. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] hover:bg-white/[0.06] transition-all duration-200" aria-label="GitHub"><Github size={18} /></a>
            <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-cyan))] hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] hover:bg-white/[0.06] transition-all duration-200" aria-label="Twitter"><Twitter size={18} /></a>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <button onClick={scrollToTop} className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-cyan))] hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200" aria-label="Back to top"><ArrowUp size={18} /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
