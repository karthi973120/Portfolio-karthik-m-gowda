"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { EXPERIENCE } from '@/lib/constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            My professional journey has equipped me with a diverse skill set and experience across
            various technologies and business domains.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.4 + index * 0.1)}
                className={cn(
                  "relative z-10 flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                <div className={cn(
                  "absolute top-0 left-8 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform translate-y-1.5 -translate-x-1/2 z-20",
                  "ring-4 ring-background"
                )} />
                
                <div className={cn(
                  "pl-16 md:pl-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                )}>
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-muted-foreground" />
                      <h3 className="font-semibold">{exp.position}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="mb-4 bg-secondary/50 px-3 py-2 rounded-md inline-block">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer div for alternate layout */}
                <div className={cn(
                  "hidden md:block md:w-1/2",
                )} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};