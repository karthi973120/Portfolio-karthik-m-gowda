"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { TESTIMONIALS } from '@/lib/constants';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="h-8 w-8 text-muted-foreground opacity-20 mb-4" />
                        <p className="italic mb-6">{testimonial.content}</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-auto right-auto mr-2" />
              <CarouselNext className="relative static left-auto right-auto" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};