'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32">
      <div className="section-container">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.div variants={fadeIn('up', 0)} className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[rgb(var(--accent-cyan))]" />
            <span className="text-xs font-mono font-medium text-[rgb(var(--accent-cyan))] tracking-widest uppercase">Contact</span>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.1)} className="mb-14 max-w-2xl">
            <h2 className="section-heading mb-4">Let's build something <span className="gradient-text">great together.</span></h2>
            <p className="text-[rgb(var(--text-muted))]">
              I'm currently open to Senior Software Engineer, Staff Engineer, and Frontend Architect opportunities. If you're working on something interesting or want to connect — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <motion.div variants={fadeIn('up', 0.15)} className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">{SITE_CONFIG.availability}</span>
              </div>
              {[
                { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: Phone, label: 'Phone', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { icon: MapPin, label: 'Location', value: SITE_CONFIG.location, href: null },
              ].map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[rgb(var(--accent-cyan))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[rgb(var(--text-muted))]">{item.label}</p>
                      <p className="text-sm font-medium text-[rgb(var(--text-primary))]">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? <a key={item.label} href={item.href} className="block">{inner}</a> : <div key={item.label}>{inner}</div>;
              })}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-[rgb(var(--text-muted))] mb-3">Find me on</p>
                <div className="flex gap-3">
                  {[{ icon: Github, href: SITE_CONFIG.socialLinks.github, label: 'GitHub' }, { icon: Linkedin, href: SITE_CONFIG.socialLinks.linkedin, label: 'LinkedIn' }, { icon: Twitter, href: SITE_CONFIG.socialLinks.twitter, label: 'Twitter' }].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-cyan))] hover:border-[rgba(0,212,255,0.2)] transition-all duration-200"><Icon size={18} /></a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.2)} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' }, { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' }].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-[rgb(var(--text-muted))] mb-2">{label}</label>
                      <input type={type} required value={form[key as keyof typeof form]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/[0.08] text-sm text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgba(0,212,255,0.4)] focus:bg-[rgba(0,212,255,0.03)] transition-all duration-200" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[rgb(var(--text-muted))] mb-2">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} placeholder="Tell me about your project, role, or just say hi..." className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/[0.08] text-sm text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] focus:outline-none focus:border-[rgba(0,212,255,0.4)] focus:bg-[rgba(0,212,255,0.03)] transition-all duration-200 resize-none" />
                </div>
                <button type="submit" disabled={status !== 'idle'} className="w-full btn-primary justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'idle' && <><Send size={16} /> Send Message</>}
                  {status === 'sending' && <>Sending...</>}
                  {status === 'sent' && <><CheckCircle size={16} /> Message Sent!</>}
                </button>
                <p className="text-xs text-center text-[rgb(var(--text-muted))]">Or email me directly at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[rgb(var(--accent-cyan))] hover:underline">{SITE_CONFIG.email}</a></p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
