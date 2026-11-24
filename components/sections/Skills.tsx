'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, Server, Layers, Cloud, ShieldCheck, Brain, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';

const ICON_MAP: Record<string, any> = {
  Monitor, Smartphone, Server, Layers, Cloud, ShieldCheck, Brain, Wrench,
};

const COLOR_MAP: Record<string, { icon: string; ring: string; bg: string }> = {
  cyan: { icon: 'text-[rgb(var(--accent-cyan))]', ring: 'border-[rgba(0,212,255,0.2)]', bg: 'bg-[rgba(0,212,255,0.08)]' },
  violet: { icon: 'text-[rgb(var(--accent-violet))]', ring: 'border-[rgba(139,92,246,0.2)]', bg: 'bg-[rgba(139,92,246,0.08)]' },
  amber: { icon: 'text-[rgb(var(--accent-amber))]', ring: 'border-[rgba(245,158,11,0.2)]', bg: 'bg-[rgba(245,158,11,0.08)]' },
};

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">Technical Skills</span>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.1)} className="mb-16">
            <h2 className="section-heading mb-4">
              A <span className="gradient-text">full-stack</span> approach to engineering.
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl">
              Eight categories of expertise, built over 8+ years across frontend, mobile, backend, DevOps, and AI/ML. No arbitrary percentages — just honest groupings of what I build with.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SKILL_CATEGORIES.map((category, idx) => {
              const Icon = ICON_MAP[category.icon] || Monitor;
              const c = COLOR_MAP[category.color] || COLOR_MAP.cyan;
              return (
                <motion.div
                  key={category.id}
                  variants={fadeIn('up', 0.05 * idx)}
                  className="glass-card p-5 hover:translate-y-[-2px] transition-transform duration-300 group"
                >
                  {/* Category header */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${c.ring} ${c.bg}`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <h3 className="font-semibold text-sm text-[rgb(var(--text-primary))] mb-3">{category.label}</h3>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
