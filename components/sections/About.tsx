'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Smartphone, Brain, Users, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const highlights = [
  {
    icon: Code2,
    title: 'Enterprise Frontend',
    description: 'Architected production systems serving 90K+ daily active users, handling ₹100Cr+ in workflows with zero-downtime deployment strategies.',
    color: 'cyan',
  },
  {
    icon: Smartphone,
    title: 'Mobile Architecture',
    description: 'Led native-to-React Native migrations, achieving 99.9% crash-free sessions and improving app ratings from 3.x to 4.2 stars.',
    color: 'violet',
  },
  {
    icon: Brain,
    title: 'AI/ML Transition',
    description: 'Currently pursuing a Post Graduate Program in AI & Machine Learning at Great Lakes — bridging 8+ years of engineering with the future of intelligent applications.',
    color: 'amber',
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description: 'Mentored engineers, established frontend standards, led Scrum ceremonies, and drove quarterly planning with cross-functional stakeholders.',
    color: 'cyan',
  },
];

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">About Me</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div variants={fadeIn('up', 0.1)} className="space-y-6">
              <h2 className="section-heading">
                Engineering at the{' '}
                <span className="gradient-text">intersection of scale</span>{' '}
                and craft.
              </h2>
              <div className="space-y-4 text-[rgb(var(--text-muted))] leading-relaxed">
                <p>
                  I'm a Senior Software Engineer based in Bengaluru with <strong className="text-[rgb(var(--text-secondary))]">8+ years</strong> of experience architecting enterprise-scale web and mobile platforms. I currently consult at <strong className="text-[rgb(var(--text-secondary))]">Morgan Stanley via Wissen Technology</strong>, driving frontend architectures for the IDEA Control Layer and AI-driven data enablement workflows, following impactful tenures at <strong className="text-[rgb(var(--text-secondary))]">Flipkart</strong> and <strong className="text-[rgb(var(--text-secondary))]">GE Healthcare</strong>.
                </p>
                <p>
                  My engineering foundation is rooted in <strong className="text-[rgb(var(--text-secondary))]">React.js, React Native, TypeScript, and micro-frontend architecture</strong> — with a rigorous focus on performance, CI/CD, and production reliability (scaling to 90K+ DAU and 99.9% crash-free mobile sessions).
                </p>
                <p>
                  I am actively combining this deep engineering craft with <strong className="text-[rgb(var(--text-secondary))]">AI & agentic development workflows</strong> — having completed the Post Graduate Program in AI & Machine Learning from <strong className="text-[rgb(var(--text-secondary))]">The University of Texas at Austin</strong> (Grade: A). I leverage GitHub Copilot, MCP-based tooling, and agentic workflows to build the next generation of intelligent software systems.
                </p>
              </div>

              <div className="glass-card p-4 border border-[rgba(0,212,255,0.15)] bg-[rgba(0,212,255,0.04)]">
                <div className="flex items-start gap-3">
                  <Brain size={18} className="text-[rgb(var(--accent-cyan))] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-0.5">AI & Machine Learning Specialization</p>
                    <p className="text-sm text-[rgb(var(--text-muted))]">PGP in AI & Machine Learning — The University of Texas at Austin</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="metric-pill text-xs">Dec 2025 – Dec 2026</span>
                      <span className="text-xs text-[rgb(var(--accent-cyan))] font-semibold">Grade: A</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent-cyan))] hover:gap-3 transition-all duration-200"
              >
                See my experience <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                const colorMap: Record<string, { border: string; bg: string; icon: string }> = {
                  cyan: { border: 'rgba(0,212,255,0.15)', bg: 'rgba(0,212,255,0.05)', icon: 'rgb(var(--accent-cyan))' },
                  violet: { border: 'rgba(139,92,246,0.15)', bg: 'rgba(139,92,246,0.05)', icon: 'rgb(var(--accent-violet))' },
                  amber: { border: 'rgba(245,158,11,0.15)', bg: 'rgba(245,158,11,0.05)', icon: 'rgb(var(--accent-amber))' },
                };
                const c = colorMap[item.color];
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeIn('up', 0.1 * i)}
                    className="glass-card p-5 hover:translate-y-[-2px] transition-transform duration-300"
                    style={{ borderColor: c.border, background: c.bg }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: `${c.icon}15` }}>
                      <Icon size={18} style={{ color: c.icon }} />
                    </div>
                    <h3 className="font-semibold text-sm text-[rgb(var(--text-primary))] mb-2">{item.title}</h3>
                    <p className="text-xs text-[rgb(var(--text-muted))] leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
