'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('light', !next);
      return next;
    });
  };

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[rgb(var(--accent-cyan))] to-[rgb(var(--accent-violet))] flex items-center justify-center font-mono font-bold text-sm text-black shadow-lg group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300">
                KG
              </div>
              <span className="hidden sm:block font-semibold text-sm text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors">
                Karthik M Gowda
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[rgb(var(--accent-cyan))] bg-[rgba(0,212,255,0.08)]'
                      : 'hover:text-[rgb(var(--text-primary))] hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] hover:bg-white/[0.06] transition-all duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Resume download */}
              <a
                href={SITE_CONFIG.resumeUrl}
                download
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-cyan))] hover:bg-[rgba(0,212,255,0.06)] border border-transparent hover:border-[rgba(0,212,255,0.2)] transition-all duration-200"
              >
                <Download size={14} />
                Resume
              </a>

              {/* Hire Me CTA */}
              <button
                onClick={() => scrollTo('#contact')}
                className="hidden md:flex btn-primary text-xs px-4 py-2"
              >
                Hire Me
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileOpen((v) => !v)}
                className="lg:hidden p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] hover:bg-white/[0.06] transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 bg-[rgb(var(--bg-secondary))] border-b border-white/[0.08] p-6">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-[rgb(var(--accent-cyan))] bg-[rgba(0,212,255,0.08)]'
                        : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex gap-3">
                <a
                  href={SITE_CONFIG.resumeUrl}
                  download
                  className="flex-1 btn-outline text-center text-sm py-2.5"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="flex-1 btn-primary text-sm py-2.5"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
