'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { EXPERIENCE } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 bg-[rgba(17,17,24,0.5)]">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          {/* Section header */}
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">Career Timeline</span>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.1)} className="mb-16">
            <h2 className="section-heading mb-4">Professional <span className="gradient-text">Experience</span></h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl">
              8+ years of building production systems at enterprise scale — from e-commerce platforms serving millions to cross-platform mobile applications.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(0,212,255,0.4)] via-[rgba(139,92,246,0.3)] to-transparent" />

            <div className="space-y-10">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeIn('up', 0.1 + index * 0.1)}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={cn(
                    'absolute left-4 md:left-8 top-6 w-4 h-4 rounded-full border-2 border-[rgb(var(--bg-primary))] -translate-x-1/2 z-10',
                    index === 0
                      ? 'bg-[rgb(var(--accent-cyan))] shadow-[0_0_12px_rgba(0,212,255,0.6)] animate-pulse-glow'
                      : index === 1
                      ? 'bg-[rgb(var(--accent-violet))]'
                      : 'bg-[rgb(var(--accent-amber))]'
                  )} />

                  {/* Card */}
                  <div className="glass-card p-6 md:p-8 hover:border-[rgba(0,212,255,0.15)] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-[rgb(var(--text-muted))]" />
                          <h3 className="font-bold text-lg text-[rgb(var(--text-primary))]">{exp.position}</h3>
                          {index === 0 && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[rgb(var(--accent-cyan))]">
                              <span className="w-1 h-1 rounded-full bg-[rgb(var(--accent-cyan))] animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                          <span className="font-medium text-[rgb(var(--text-secondary))]">{exp.company}</span>
                          {exp.client && (
                            <>
                              <ChevronRight size={14} />
                              <span className="font-semibold text-[rgb(var(--accent-cyan))]">@ {exp.client}</span>
                              <span className="text-xs px-2 py-0.5 rounded bg-[rgba(255,255,255,0.05)] border border-white/[0.08]">{exp.type}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[rgb(var(--text-muted))] shrink-0">
                        <Calendar size={14} />
                        <span className="font-mono text-xs">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[rgb(var(--text-muted))] mb-5 leading-relaxed">{exp.description}</p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.metrics.map((m) => (
                        <span
                          key={m.label}
                          className={m.type === 'amber' ? 'metric-pill metric-pill-amber' : 'metric-pill'}
                        >
                          {m.label}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[rgb(var(--text-muted))]">
                          <div className="w-1 h-1 rounded-full bg-[rgb(var(--accent-cyan))] mt-2 shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="skill-badge text-xs py-1 px-2.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
