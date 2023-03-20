import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.5,
    },
  },
};

export const childContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const frameworkContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.5,
    },
  },
};

export const frameworkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const rotationVariants: Variants = {
  startRotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  },
};
