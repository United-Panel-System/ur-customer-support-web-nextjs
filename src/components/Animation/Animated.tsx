"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ElementType, ReactNode } from "react";

type AnimatedProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & MotionProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof MotionProps>;

const Animated = <T extends ElementType = "div">({
  as,
  children,
  ...rest
}: AnimatedProps<T>) => {
  const Component = motion(as || "div");

  return <Component {...rest}>{children}</Component>;
};

export default Animated;
