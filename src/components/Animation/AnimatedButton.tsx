"use client";
import { motion } from "framer-motion";
import { animationVariants, AnimationVariant } from "./variants";

type AnimatedButtonProps = {
  variant?: AnimationVariant;
  transition?: object;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof motion.button>;

export const AnimatedButton = ({
  variant = "bounce",
  children,
  transition,
  ...props
}: AnimatedButtonProps) => (
  <motion.button
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={animationVariants[variant]}
    transition={transition}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.button>
);
