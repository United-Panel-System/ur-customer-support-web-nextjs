"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { animationVariants, AnimationVariant } from "./variants";

type AnimatedLinkProps = {
  href: string;
  variant?: AnimationVariant;
  transition?: object;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof motion.a>;

export const AnimatedLink = ({
  href,
  variant = "bounce",
  children,
  className = "",
  ...props
}: AnimatedLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <motion.a
      href={href}
      variants={animationVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={props.transition}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
};
