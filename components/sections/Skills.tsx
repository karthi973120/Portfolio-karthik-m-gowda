"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { SKILLS } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Code, Server, FileCode, Layers, Database, Github as Git, Terminal, Cloud, LayoutGrid, AlertCircle } from 'lucide-react';

const SkillIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    'React': <Code className="w-5 h-5" />,
    'Next.js': <Layers className="w-5 h-5" />,
    'TypeScript': <FileCode className="w-5 h-5" />,
    'CSS/SCSS': <LayoutGrid className="w-5 h-5" />,
    'Tailwind CSS': <LayoutGrid className="w-5 h-5" />,
    'Node.js': <Server className="w-5 h-5" />,
    'Express': <Server className="w-5 h-5" />,
    'MongoDB': <Database className="w-5 h-5" />,
    'PostgreSQL': <Database className="w-5 h-5" />,
    'GraphQL': <Database className="w-5 h-5" />,
    'Git': <Git className="w-5 h-5" />,
    'Docker': <Terminal className="w-5 h-5" />,
    'AWS': <Cloud className="w-5 h-5" />,
    'CI/CD': <Terminal className="w-5 h-5" />,
    'Testing': <AlertCircle className="w-5 h-5" />,
  };

  return icons[name] || <Code className="w-5 h-5" />;
};

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            Here are my technical skills and areas of expertise that I've developed and refined
            over the course of my professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="space-y-6">
              {SKILLS.frontend.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="mr-2"><SkillIcon name={skill.name} /></span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2"  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 0.5)} 
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                <Server className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="space-y-6">
              {SKILLS.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="mr-2"><SkillIcon name={skill.name} /></span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2"  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 0.6)} 
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3">
                <Terminal className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold">DevOps & Tools</h3>
            </div>
            <div className="space-y-6">
              {SKILLS.other.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="mr-2"><SkillIcon name={skill.name} /></span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2"  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};