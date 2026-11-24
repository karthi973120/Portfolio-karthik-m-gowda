'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const Blog = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const colorAccent: Record<string, string> = {
    cyan: 'text-[rgb(var(--accent-cyan))] border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)]',
    violet: 'text-[rgb(var(--accent-violet))] border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.05)]',
    amber: 'text-[rgb(var(--accent-amber))] border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)]',
  };

  return (
    <section id="blog" ref={ref} className="py-24 md:py-32 bg-[rgba(17,17,24,0.5)]">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">Writing</span>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.1)} className="mb-16">
            <h2 className="section-heading mb-4">
              Sharing <span className="gradient-text">engineering insights.</span>
            </h2>
            <p className="text-[rgb(var(--text-muted))] max-w-2xl">
              Lessons from production, architecture decisions, and thoughts on the evolving role of AI in software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                variants={fadeIn('up', 0.1 * i)}
                className="glass-card p-6 flex flex-col gap-4 group cursor-not-allowed opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${colorAccent[post.color]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-[rgb(var(--text-muted))]">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-sm text-[rgb(var(--text-primary))] leading-snug">{post.title}</h3>
                <p className="text-xs text-[rgb(var(--text-muted))] leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-mono text-[rgb(var(--text-muted))]">{post.date}</span>
                  <div className="flex items-center gap-1 text-xs text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--accent-cyan))] transition-colors">
                    Read more <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
