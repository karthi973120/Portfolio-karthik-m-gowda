"use client";

import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { Github, Linkedin, Twitter, Mail, ArrowUp,Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              {SITE_CONFIG.description}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm font-medium hover:text-primary transition-colors mb-4"
              aria-label="Back to top"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp size={16} />
            </button>
            <div className="flex space-x-6">
              <a
                href={SITE_CONFIG.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};