"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer, cardHover } from '@/lib/animations';
import { PROJECTS } from '@/lib/constants';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/button';
import { GalleryHorizontal, GalleryVertical } from 'lucide-react';

type ViewStyle = 'grid' | 'list';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [viewStyle, setViewStyle] = useState<ViewStyle>('grid');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS.slice(0, 3));
  const [showingAll, setShowingAll] = useState(false);

  const handleViewMore = () => {
    if (showingAll) {
      setVisibleProjects(PROJECTS.slice(0, 3));
    } else {
      setVisibleProjects(PROJECTS);
    }
    setShowingAll(!showingAll);
  };

  return (
    <section
      id="projects"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            Explore a selection of my latest work. Each project represents a unique challenge
            that was solved with creativity and technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          className="flex justify-end mb-8"
        >
          <div className="bg-card border border-border rounded-lg p-1 flex">
            <button
              className={`p-2 rounded-md ${viewStyle === 'grid' ? 'bg-secondary' : ''}`}
              onClick={() => setViewStyle('grid')}
              aria-label="Grid view"
            >
              <GalleryHorizontal size={18} />
            </button>
            <button
              className={`p-2 rounded-md ${viewStyle === 'list' ? 'bg-secondary' : ''}`}
              onClick={() => setViewStyle('list')}
              aria-label="List view"
            >
              <GalleryVertical size={18} />
            </button>
          </div>
        </motion.div>

        <div className={`
          ${viewStyle === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-8'
          }
        `}>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.5 + index * 0.1)}
              whileHover="hover"
              initial="rest"
              animate="rest"
              custom={cardHover}
            >
              <ProjectCard project={project} viewStyle={viewStyle} />
            </motion.div>
          ))}
        </div>

        {PROJECTS.length > 3 && (
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="flex justify-center mt-12"
          >
            <Button onClick={handleViewMore} variant="outline" size="lg">
              {showingAll ? 'Show Less' : 'View More Projects'}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};