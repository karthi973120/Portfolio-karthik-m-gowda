"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import { fadeIn, staggerContainer, textVariant, sentenceAnimation, letterAnimation } from '@/lib/animations';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const greeting = "Hello, I'm";
  const titleText = SITE_CONFIG.title;
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isLoaded ? 'show' : 'hidden'}
        className="container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center"
      >
        <motion.p
          variants={textVariant(0.2)}
          className="text-lg md:text-xl text-muted-foreground mb-4"
        >
          {greeting}
        </motion.p>

        <motion.h1
          variants={textVariant(0.4)}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          {SITE_CONFIG.name}
        </motion.h1>

        <motion.div
          variants={sentenceAnimation}
          initial="hidden"
          animate={isLoaded ? 'show' : 'hidden'}
          className="flex justify-center mb-8"
        >
          {titleText.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterAnimation}
              className="text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-medium"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={fadeIn('up', 0.8)}
          className="max-w-2xl text-base md:text-lg text-muted-foreground mb-8"
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          variants={fadeIn('up', 1)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:opacity-90 transition-opacity"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 1.2)}
        initial="hidden"
        animate={isLoaded ? 'show' : 'hidden'}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};