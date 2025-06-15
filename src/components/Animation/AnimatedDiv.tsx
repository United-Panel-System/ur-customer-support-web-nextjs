"use client";
import {
  HTMLMotionProps,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { animationVariants, AnimationVariant } from "./variants";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type AnimatedDivProps = {
  trigger?: "onLoad" | "onView";
  variant?: AnimationVariant;
  staggerChildren?: number;
  staggerDirection?: 1 | -1;
  className?: string;
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

export const AnimatedDiv = ({
  trigger = "onView",
  variant = "slideUp",
  staggerChildren,
  staggerDirection = 1,
  className,
  children,
  ...props
}: AnimatedDivProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const controls = useAnimation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const parentVariants = staggerChildren
    ? {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
          staggerDirection,
        },
      },
    }
    : animationVariants[variant];

  const childVariants = animationVariants[variant];

  useEffect(() => {
    if (trigger === "onLoad") {
      controls.start("visible");
    } else if (isInView) {
      controls.start("visible");
    }
  }, [controls, trigger, isInView, pathname, searchParams]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      key={pathname}
      className={className}
      initial="hidden"
      animate={hasMounted ? controls : undefined}
      variants={parentVariants}
      {...props}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
          <motion.div key={i} variants={childVariants}>
            {child}
          </motion.div>
        ))
        : children}
    </motion.div>
  );
};
