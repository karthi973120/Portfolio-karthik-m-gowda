"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { buttonHover } from '@/lib/animations';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  viewStyle: 'grid' | 'list';
}

export const ProjectCard = ({ project, viewStyle }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (viewStyle === 'list') {
    return (
      <Card className="overflow-hidden transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 h-60 md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            {project.featured && (
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
                Featured
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex flex-wrap gap-4 mt-4">
                <Button
                  size="sm"
                  className="flex items-center gap-1"
                  asChild
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                  asChild
                >
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <span>View Code</span>
                    <Github size={14} />
                  </a>
                </Button>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 h-full flex flex-col",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pb-[60%] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
            Featured
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs font-normal">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <motion.div
            whileHover="hover"
            variants={buttonHover}
            className="flex-1"
          >
            <Button
              size="sm"
              className="w-full flex items-center justify-center gap-1"
              asChild
            >
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span>
                <ArrowRight size={14} />
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover="hover"
            variants={buttonHover}
          >
            <Button
              size="sm"
              variant="outline"
              className="flex items-center justify-center gap-1"
              asChild
            >
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <Github size={14} />
              </a>
            </Button>
          </motion.div>
        </div>
      </CardFooter>
    </Card>
  );
};