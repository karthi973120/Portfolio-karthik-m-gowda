"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { FileText } from 'lucide-react';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.5)}
            className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden"
          >
            <Image
              src="https://media-hosting.imagekit.io/a616fa77b3c14d6f/WhatsApp Image 2025-04-21 at 4.28.22 PM.jpeg?Expires=1839898904&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h3JRezXrF3~a1WDFptaDmaLgSqTPknpQGXb2tYXHD~KhmkHfmKbBY7rh7fGQo4gfk-IgSKHYe2xY4iGaILNEEvyE1N8YtqJnk~PaMEYH6tFJl5w1lIwyr8YxZq8lp2Qn1GlQa6il2geq4TJp6eHRHJmeWZ2uB6KdnXAmQHvwiSmqviRANmnvVi3dLXgLhAFDlnbISTAiesj~sQYPwYmUD8-QUbr~06tUaZtno~1Ck6DGgl2RXbeoqbcc2urQdC98Wog-fHZeuVBIL4jaGzOtN4C0t4c2aN5gtlImsbdM34MmeG4Lrn2ghI5XsNugMy6w2l6jXdEO80VEAZgUUhbnvA__"
              alt="Portrait photo"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 z-10 mix-blend-overlay" />
          </motion.div>

          <motion.div variants={fadeIn('left', 0.5)}>
            <h3 className="text-2xl font-semibold mb-6">
              Crafting digital experiences through code
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software engineer with 7+ years of experience building 
                modern web & mobile applications. My journey in tech started with a deep curiosity 
                about how digital products work and has evolved into expertise across the 
                full development stack.
              </p>
              <p>
                My approach combines solid technical foundations with a keen eye for user 
                experience. I believe the best software seamlessly blends powerful 
                functionality with intuitive interfaces.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open source, writing technical articles, and staying on top of emerging technologies. I'm especially fascinated by how AI and machine learning are reshaping software development. Outside the tech world, you'll often find me playing or watching cricket — a passion that keeps me energized and inspired.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-background rounded-lg p-4 shadow-sm border border-border flex-1 min-w-[180px]">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">7+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm border border-border flex-1 min-w-[180px]">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">10+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm border border-border flex-1 min-w-[180px]">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">15+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            <div className="mt-8">
              
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};