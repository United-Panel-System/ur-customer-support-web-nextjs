"use client";
import Image from "next/image";
import { AnimatedDiv } from "../Animation";
import { useEffect, useState } from "react";

// Custom hook to detect Tailwind dark mode
function useIsDark() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);
  return isDark;
}

const GeneralIconCard = ({ item }) => {
  const { icon, iconLight, title, description } = item;
  const isDark = useIsDark();

  return (
    <AnimatedDiv
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      whileHover={{
        scale: 1.05,
        boxShadow: isDark
          ? "0px 8px 20px rgba(255, 193, 213, 0.25)"
          : "0px 8px 20px rgba(0, 0, 0, 0.15)",
      }}
      className="dark:bg-dark w-full cursor-pointer p-4"
    >
      <div className="text-primary bg-primary/10 mx-auto mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className="block dark:hidden"
        />
        <Image
          src={iconLight}
          alt={title}
          width={50}
          height={50}
          className="hidden dark:block"
        />
      </div>
      <h3 className="mb-5 text-center text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
        {title}
      </h3>
      <p className="text-body-color dark:text-body-color-dark pr-[10px] text-center text-base leading-relaxed font-medium">
        {description}
      </p>
    </AnimatedDiv>
  );
};

export default GeneralIconCard;
