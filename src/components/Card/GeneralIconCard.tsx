"use client";
import { LucideIcon } from "lucide-react";
import { AnimatedDiv } from "../Animation";

interface GeneralIconCardProps {
  item: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}



const GeneralIconCard = ({ item }: GeneralIconCardProps) => {
  const { icon: Icon, title, description } = item;

  return (
    <AnimatedDiv
      variant="slideUp"
      transition={{ duration: 0.4, type: "spring" }}
    >
      <div className="group border-stroke-stroke shadow-three hover:shadow-feature-2 dark:border-stroke-dark dark:bg-bg-color-dark relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300">
        {/* Icon container */}
        <div className="text-primary mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-105 dark:text-primary dark:group-hover:bg-primary/20">
          <Icon size={32} />
        </div>

        <div className="flex flex-grow flex-col text-center">
          <h3 className="text-dark mb-3 text-xl font-bold dark:text-white">
            {title}
          </h3>
          <p className="text-body-color dark:text-body-color-dark mb-4 flex-grow text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative element */}
        <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"></div>
      </div>
    </AnimatedDiv>
  );
};

export default GeneralIconCard;