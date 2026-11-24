'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowRight, Download, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';

const ROLES = [
  'Senior Software Engineer',
  'Frontend Architect',
  'React & React Native Specialist',
  'AI/ML & Agentic Workflows',
];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-mono font-semibold">
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite] opacity-80">|</span>
    </span>
  );
};

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(0,212,255,0.05)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(139,92,246,0.05)] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content (7 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Availability badge */}
            <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.06)] text-xs font-medium text-[rgb(var(--accent-cyan))]">
                <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-cyan))] animate-pulse" />
                <span>Open to Senior, Staff & Architect Roles</span>
              </div>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={fadeIn('up', 0.1)}>
              <p className="text-[rgb(var(--text-muted))] text-xs font-mono mb-2 tracking-widest uppercase">
                Staff / Senior Frontend Architect
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[rgb(var(--text-primary))] leading-tight">
                Karthik <span className="gradient-text">M Gowda</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={fadeIn('up', 0.2)} className="text-xl md:text-2xl font-medium text-[rgb(var(--text-secondary))] h-8 flex items-center">
              <TypewriterText />
            </motion.div>

            {/* Headline statement */}
            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-base md:text-lg text-[rgb(var(--text-muted))] max-w-xl leading-relaxed"
            >
              Building scalable digital experiences through engineering, architecture and innovation.
              <span className="text-[rgb(var(--text-secondary))]"> 8+ years across enterprise platforms at Morgan Stanley, Flipkart & GE Healthcare.</span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeIn('up', 0.35)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-white/[0.06]"
            >
              {[
                { value: '8+ Yrs', label: 'Engineering Exp.' },
                { value: '90K+', label: 'DAU Scaled' },
                { value: '99.9%', label: 'Crash-Free Rate' },
                { value: '₹100 Cr+', label: 'GMV Workflows' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-bold gradient-text">{s.value}</span>
                  <span className="text-xs text-[rgb(var(--text-muted))]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeIn('up', 0.4)} className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work <ArrowRight size={16} />
              </button>
              <a
                href={SITE_CONFIG.resumeUrl}
                download
                className="btn-outline"
              >
                <Download size={16} /> Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                <Mail size={16} /> Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeIn('up', 0.45)} className="flex items-center gap-4 text-xs pt-1">
              <a
                href={SITE_CONFIG.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <div className="w-px h-3.5 bg-white/10" />
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-cyan))] transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <div className="w-px h-3.5 bg-white/10" />
              <span className="text-[rgb(var(--text-muted))] flex items-center gap-1">
                <MapPin size={13} /> Bengaluru, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Code Terminal & Architecture Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col gap-4 items-center"
          >
            {/* Terminal Card */}
            <div className="w-full max-w-md glass-card border border-white/[0.08] shadow-2xl rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-[rgb(var(--text-muted))]">architect-profile.ts</span>
                </div>
                <Sparkles size={14} className="text-[rgb(var(--accent-cyan))]" />
              </div>

              <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5">
                <p>
                  <span className="text-[rgb(var(--accent-violet))]">interface</span>{' '}
                  <span className="text-[rgb(var(--accent-cyan))]">ArchitectProfile</span> {'{'}
                </p>
                <p className="pl-4 text-[rgb(var(--text-muted))]">
                  name: <span className="text-green-400">"{SITE_CONFIG.name}"</span>;
                </p>
                <p className="pl-4 text-[rgb(var(--text-muted))]">
                  experience: <span className="text-amber-400">"8+ years"</span>;
                </p>
                <p className="pl-4 text-[rgb(var(--text-muted))]">
                  enterpriseClients: [<span className="text-green-400">"Morgan Stanley"</span>, <span className="text-green-400">"Flipkart"</span>, <span className="text-green-400">"GE"</span>];
                </p>
                <p className="pl-4 text-[rgb(var(--text-muted))]">
                  coreStack: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"React Native"</span>, <span className="text-green-400">"TypeScript"</span>];
                </p>
                <p className="pl-4 text-[rgb(var(--text-muted))]">
                  aiFrontier: [<span className="text-green-400">"Agent UI"</span>, <span className="text-green-400">"RAG"</span>, <span className="text-green-400">"FastAPI"</span>, <span className="text-green-400">"MCP"</span>];
                </p>
                <p className="pl-4 text-[rgb(var(--text-muted))]">
                  metrics: {'{'} crashFree: <span className="text-cyan-400">99.9%</span>, dau: <span className="text-cyan-400">90000</span> {'}'};
                </p>
                <p>{'}'};</p>
              </div>

              <div className="px-5 py-3 border-t border-white/[0.06] bg-[rgba(0,212,255,0.03)] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[rgb(var(--text-muted))]">status: Available for hire</span>
                <span className="text-[rgb(var(--accent-cyan))] font-semibold">● Production Ready</span>
              </div>
            </div>

            {/* Quick architectural badges */}
            <div className="w-full max-w-md grid grid-cols-2 gap-2 text-xs">
              <div className="glass-card p-3 border border-white/[0.06] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-cyan))]" />
                <span className="text-[rgb(var(--text-secondary))] font-medium">Enterprise UI at Scale</span>
              </div>
              <div className="glass-card p-3 border border-white/[0.06] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-violet))]" />
                <span className="text-[rgb(var(--text-secondary))] font-medium">React Native 99.9% Clean</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
