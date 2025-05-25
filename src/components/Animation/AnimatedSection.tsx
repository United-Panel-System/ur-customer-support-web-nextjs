"use client";
import { motion } from "framer-motion";
import { animationVariants, AnimationVariant } from "./variants";

type AnimatedSectionProps = {
  variant?: AnimationVariant;
} & React.ComponentProps<typeof motion.section>;

export const AnimatedSection = ({
  variant = "slideUp",
  children,
  ...props
}: AnimatedSectionProps) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    variants={animationVariants[variant]}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    {...props}
  >
    {children}
  </motion.section>
);
