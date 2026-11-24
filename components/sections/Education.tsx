'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, ExternalLink, CheckCircle } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const Education = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} className="py-24 md:py-32">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">Education</span>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.1)} className="mb-14">
            <h2 className="section-heading mb-4">
              Continuous <span className="gradient-text">learning & growth.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {EDUCATION.map((edu, i) => {
              const colorMap: Record<string, { border: string; bg: string; badge: string; badgeBg: string }> = {
                cyan: {
                  border: 'border-[rgba(0,212,255,0.2)]',
                  bg: 'bg-[rgba(0,212,255,0.04)]',
                  badge: 'text-[rgb(var(--accent-cyan))]',
                  badgeBg: 'bg-[rgba(0,212,255,0.1)] border-[rgba(0,212,255,0.3)]',
                },
                violet: {
                  border: 'border-[rgba(139,92,246,0.2)]',
                  bg: 'bg-[rgba(139,92,246,0.04)]',
                  badge: 'text-[rgb(var(--accent-violet))]',
                  badgeBg: 'bg-[rgba(139,92,246,0.1)] border-[rgba(139,92,246,0.3)]',
                },
              };
              const c = colorMap[edu.color] || colorMap.violet;
              return (
                <motion.div
                  key={edu.id}
                  variants={fadeIn('up', 0.1 + i * 0.1)}
                  className={`glass-card p-6 md:p-8 ${c.border} ${c.bg} relative overflow-hidden`}
                >
                  {/* In-progress decoration */}
                  {edu.status === 'in-progress' && (
                    <div className="absolute top-4 right-4">
                      <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badgeBg} ${c.badge}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {edu.statusLabel}
                      </span>
                    </div>
                  )}
                  {edu.status === 'completed' && (
                    <div className="absolute top-4 right-4">
                      <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${c.badgeBg} ${c.badge}`}>
                        <CheckCircle size={12} />
                        {edu.statusLabel}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.badgeBg}`}>
                      <GraduationCap size={18} className={c.badge} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[rgb(var(--text-primary))] leading-tight">{edu.degree}</h3>
                      <p className={`text-sm font-semibold ${c.badge} mt-0.5`}>{edu.field}</p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[rgb(var(--text-secondary))] mb-1">{edu.institution}</p>
                  <p className="text-xs text-[rgb(var(--text-muted))] font-mono mb-4">{edu.period}</p>
                  <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed mb-5">{edu.description}</p>

                  <div className="space-y-2 mb-5">
                    {edu.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                        <div className={`w-1 h-1 rounded-full ${c.badge.replace('text-', 'bg-')}`} />
                        {h}
                      </div>
                    ))}
                  </div>

                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}
                    >
                      <ExternalLink size={12} /> View ePortfolio
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Certifications */}
          {CERTIFICATIONS.length > 0 && (
            <motion.div variants={fadeIn('up', 0.3)}>
              <h3 className="text-lg font-semibold text-[rgb(var(--text-secondary))] mb-4">Certifications</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="glass-card px-4 py-3 flex items-center gap-3">
                    <CheckCircle size={16} className="text-[rgb(var(--accent-cyan))] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[rgb(var(--text-primary))] truncate">{cert.name}</p>
                      <p className="text-xs text-[rgb(var(--text-muted))]">{cert.issuer} · {cert.year}</p>
                    </div>
                    {cert.status === 'in-progress' && (
                      <span className="text-[10px] text-[rgb(var(--accent-cyan))] animate-pulse shrink-0">In Progress</span>
                    )}
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-cyan))] transition-colors">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
