import { Variants } from "framer-motion";

export const animationVariants = {
  // Basic
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  },

  // Slide
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  },
  slideLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  slideRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },

  // Scale
  bounce: {
    hidden: { scale: 0.9 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  },
  dropBounce: {
    hidden: { x: 200, y: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      y: [-200, 20, -10, 5, 0],
      transition: {
        x: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        y: {
          duration: 1.2,
          ease: "easeOut",
          times: [0, 0.4, 0.65, 0.85, 1],
        },
        opacity: {
          duration: 0.4,
          ease: "easeIn",
        },
      },
    },
  },

  pop: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  },
  zoomIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  zoomOut: {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },

  // Rotate
  rotateIn: {
    hidden: { rotate: -90, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  rotateOut: {
    hidden: { rotate: 90, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },

  // Special
  flip: {
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },

  // Staggered Children Fade In (use with parent motion.div)
  staggerFadeIn: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  fadeChild: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  },

  // Blur In
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  },

  // Skew In
  skewIn: {
    hidden: { skewX: 10, opacity: 0 },
    visible: {
      skewX: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
} satisfies Record<string, Variants>;

export type AnimationVariant = keyof typeof animationVariants;
