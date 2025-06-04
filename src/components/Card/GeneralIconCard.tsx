"use client";
import { LucideIcon } from "lucide-react";
import { AnimatedDiv } from "../Animation";
import { useEffect, useState } from "react";

interface GeneralIconCardProps {
  item: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

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

const GeneralIconCard = ({ item }: GeneralIconCardProps) => {
  const { icon: Icon, title, description } = item;
  const isDark = useIsDark();

  return (
    <AnimatedDiv
      variant="slideUp"
      transition={{ duration: 0.4, type: "spring" }}
      whileHover={{
        y: -5,
        boxShadow: isDark
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
          : "0 10px 25px -5px rgba(6, 8, 15, 0.1)",
      }}
    >
      <div className="group border-stroke-stroke shadow-three hover:shadow-feature-2 dark:border-stroke-dark dark:bg-bg-color-dark relative flex h-full flex-col overflow-hidden rounded-lg border bg-white p-6 transition-all duration-300">
        {/* Icon container with better contrast */}
        <div
          className={`mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-lg transition-all duration-300 ${isDark ? "bg-dark/20 text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.3)]" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(230,57,70,0.2)]"}`}
        >
          <Icon size={32} />
        </div>

        <div className="flex flex-grow flex-col text-center">
          <h3 className="mb-3 text-xl font-semibold text-black dark:text-gray-100">
            {title}
          </h3>
          <p className="text-body-color dark:text-body-color-dark mb-4 flex-grow text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Subtle animated border */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${isDark ? "bg-primary/80" : "bg-primary"}`}
        ></div>
      </div>
    </AnimatedDiv>
  );
};

export default GeneralIconCard;
