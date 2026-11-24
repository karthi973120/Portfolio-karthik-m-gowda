// Framer Motion animation variants

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0) => ({
  hidden: {
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const textVariant = (delay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 0.8, delay },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', duration: 0.6, delay },
  },
});

export const slideInFromLeft = (delay = 0) => ({
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export const slideInFromRight = (delay = 0) => ({
  hidden: { x: 60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});
