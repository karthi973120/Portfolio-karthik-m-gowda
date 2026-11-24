'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ShoppingBag, Smartphone, Heart, Trophy, Brain, Car, Package } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';

const ICON_MAP: Record<string, any> = {
  ShoppingBag, Smartphone, Heart, Trophy, Brain, Car, Package,
};

const COLOR_MAP: Record<string, { accent: string; border: string; glow: string; bg: string }> = {
  cyan: { accent: 'text-[rgb(var(--accent-cyan))]', border: 'hover:border-[rgba(0,212,255,0.3)]', glow: 'shadow-[0_0_30px_rgba(0,212,255,0.08)]', bg: 'bg-[rgba(0,212,255,0.08)]' },
  violet: { accent: 'text-[rgb(var(--accent-violet))]', border: 'hover:border-[rgba(139,92,246,0.3)]', glow: 'shadow-[0_0_30px_rgba(139,92,246,0.08)]', bg: 'bg-[rgba(139,92,246,0.08)]' },
  amber: { accent: 'text-[rgb(var(--accent-amber))]', border: 'hover:border-[rgba(245,158,11,0.3)]', glow: 'shadow-[0_0_30px_rgba(245,158,11,0.08)]', bg: 'bg-[rgba(245,158,11,0.08)]' },
};

export const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-[rgba(17,17,24,0.5)]">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">Featured Projects</span>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.1)} className="mb-16">
            <h2 className="section-heading mb-4">Work that <span className="gradient-text">ships and scales.</span></h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl">Enterprise-grade projects from production environments — real impact, real metrics, real users.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {featured.map((project, i) => {
              const Icon = ICON_MAP[project.icon] || Package;
              const c = COLOR_MAP[project.color] || COLOR_MAP.cyan;
              return (
                <motion.div key={project.id} variants={fadeIn('up', 0.1 * i)} className={`glass-card p-6 flex flex-col gap-4 transition-all duration-300 hover:translate-y-[-3px] ${c.border} ${c.glow}`}>
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg}`}><Icon size={18} className={c.accent} /></div>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[rgb(var(--text-muted))]">{project.type}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[rgb(var(--text-primary))] mb-0.5">{project.title}</h3>
                    <p className="text-xs text-[rgb(var(--text-muted))]">{project.subtitle}</p>
                  </div>
                  <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((m) => <span key={m} className="metric-pill">{m}</span>)}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => <span key={tag} className="skill-badge text-[11px]">{tag}</span>)}
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                    {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-xs font-medium ${c.accent} hover:opacity-80 transition-opacity`}><Github size={14} /> Source</a>}
                    {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-xs font-medium ${c.accent} hover:opacity-80 transition-opacity`}><ExternalLink size={14} /> Live</a>}
                    {!project.links.github && !project.links.live && <span className="text-xs text-[rgb(var(--text-muted))] italic">Enterprise — private codebase</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((project, i) => {
              const Icon = ICON_MAP[project.icon] || Package;
              const c = COLOR_MAP[project.color] || COLOR_MAP.amber;
              return (
                <motion.div key={project.id} variants={fadeIn('up', 0.15 + 0.1 * i)} className={`glass-card p-5 flex flex-col gap-3 transition-all duration-300 hover:translate-y-[-2px] ${c.border}`}>
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${c.bg}`}><Icon size={16} className={c.accent} /></div>
                    <div className="flex gap-1.5">
                      {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors"><Github size={15} /></a>}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[rgb(var(--text-primary))]">{project.title}</h3>
                    <p className="text-xs text-[rgb(var(--text-muted))] mt-1 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.metrics.map((m) => <span key={m} className="metric-pill text-[10px]">{m}</span>)}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((t) => <span key={t} className="skill-badge text-[10px] py-0.5">{t}</span>)}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeIn('up', 0.4)} className="mt-8 glass-card p-5 border border-[rgba(0,212,255,0.12)] bg-[rgba(0,212,255,0.03)] flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Brain size={20} className="text-[rgb(var(--accent-cyan))] shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-[rgb(var(--text-primary))] mb-0.5">AI/ML Projects (In Progress)</p>
              <p className="text-xs text-[rgb(var(--text-muted))]">Building AI/ML projects as part of the Great Lakes PGP — including Tourism Package Prediction, Medical AI Assistant, and Super Kart. Available on GitHub.</p>
            </div>
            <a href="https://github.com/karthi973120" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4 shrink-0"><Github size={14} /> View on GitHub</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
