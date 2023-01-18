const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInAndUp = {
  initial: {
    y: 80,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: { opacity: 0, y: -40, scale: 0.9, transition: { duration: 0.05 } },
};
