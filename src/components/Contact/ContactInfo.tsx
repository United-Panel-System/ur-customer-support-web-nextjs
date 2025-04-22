import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
  label?: string;
  href?: string;
  className?: string;
  iconClassName?: string;
}

export const ContactNoHref: React.FC<ContactInfoProps> = ({
  icon,
  text,
  label,
  className = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={`mb-4 flex items-center gap-4 text-sm text-gray-700 sm:text-base dark:text-gray-300 ${className}`}
    >
      <div
        className={`bg-primary/10 dark:bg-primary/20 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md p-2 text-gray-800 shadow-sm dark:text-gray-200 ${iconClassName}`}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center leading-relaxed">
        <span className="block h-[18px] text-xs font-semibold text-gray-500 dark:text-gray-400">
          {label ?? ""}
        </span>
        <span className="text-sm text-gray-700 sm:text-base dark:text-gray-300">
          {text}
        </span>
      </div>
    </div>
  );
};

export const ContactInfoWithHref: React.FC<ContactInfoProps> = ({
  icon,
  text,
  label,
  href,
  className = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={`mb-4 flex items-start gap-4 text-sm text-gray-700 sm:text-base dark:text-gray-300 ${className}`}
    >
      <div
        className={`bg-primary/10 dark:bg-primary/20 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md p-2 text-gray-800 shadow-sm dark:text-gray-200 ${iconClassName}`}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center leading-relaxed">
        <span className="block h-[18px] text-xs font-semibold text-gray-500 dark:text-gray-400">
          {label ?? ""}
        </span>
        <a
          href={href}
          className="hover:text-primary dark:hover:text-primary text-sm text-gray-700 transition-colors sm:text-base dark:text-gray-300"
        >
          {text}
        </a>
      </div>
    </div>
  );
};
