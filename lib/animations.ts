import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const scale = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const sentenceAnimation = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};