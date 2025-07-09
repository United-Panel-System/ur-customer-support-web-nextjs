import React from "react";

interface ContactItem {
  text: string | React.ReactNode;
  href?: string;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  label?: string; // Category label like "Phone", "Email"
  items: ContactItem[];
  className?: string;
  iconClassName?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  label,
  items,
  className = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={`mb-4 flex items-start gap-4 text-sm text-gray-700 sm:text-base dark:text-gray-300 ${className}`}
    >
      <div
        className={`bg-primary/10 dark:bg-primary flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md p-2 text-gray-800 shadow-sm dark:text-gray-100 ${iconClassName}`}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center leading-relaxed space-y-1">
        {label && (
          <span className="block h-[18px] text-xs font-semibold text-gray-500 dark:text-gray-400">
            {label}
          </span>
        )}
        {items.map((item, index) =>
          item.href ? (
            <a
              key={index}
              href={item.href}
              className="hover:text-primary dark:hover:text-primary text-sm text-gray-700 transition-colors sm:text-base dark:text-gray-300"
            >
              {item.text}
            </a>
          ) : (
            <span
              key={index}
              className="text-sm text-gray-700 sm:text-base dark:text-gray-300"
            >
              {item.text}
            </span>
          )
        )}
      </div>
    </div>
  );
};
