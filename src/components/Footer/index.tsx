"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FiBriefcase, FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

// Types
type FooterLinkItem = {
  href?: string;
  label: string;
  icon?: JSX.Element;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
  isContact?: boolean;
};

type SocialLink = {
  href: string;
  label: string;
  icon: JSX.Element;
};

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.facebook.com/share/1AND4weQGb/",
    label: "Facebook",
    icon: <FiFacebook className="text-xl" />,
  },
  {
    href: "/",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "/",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { href: "/products", label: "Products" },
      { href: "/news", label: "News" },
      { href: "/projects", label: "Projects" },
      { href: "/services", label: "Services" },
      { href: "/keywords", label: "Keyword Index" },
    ],
  },
  {
    title: "Category",
    links: [
      { href: "/products?category=panel", label: "Panels" },
      {
        href: "/products?category=refrigeration-systems",
        label: "Refrigeration System",
      },
      { href: "/products?category=door", label: "Insulated Doors" },
    ],
  },
  {
    title: "Contact Us",
    isContact: true,
    links: [
      {
        href: "tel:+6075951588",
        label: "+607 5951588",
        icon: <FiPhone className="text-lg" />
      },
      {
        href: "mailto:united@ur.com.my",
        label: "united@ur.com.my",
        icon: <FiMail className="text-lg" />
      },
      {
        label: "PTD 124299, Jalan Kempas Lama, Kampung Seelong Jaya, 81300 Skudai, Johor, Malaysia.",
        icon: <FiMapPin className="text-lg" />
      },
    ],
  },
];

// Components
const FooterLink = ({ href, label, icon }: FooterLinkItem) => (
  <li className="mb-4 flex items-start">
    {href ? (
      <Link
        href={href}
        className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary inline-flex items-start gap-3 text-base duration-300"
      >
        {icon && <span className="mt-0.5 flex-shrink-0">{icon}</span>}
        <span className="leading-snug">{label}</span>
      </Link>
    ) : (
      <span className="text-body-color dark:text-body-color-dark inline-flex items-start gap-3 text-base">
        {icon && <span className="mt-0.5 flex-shrink-0">{icon}</span>}
        <span className="leading-snug">{label}</span>
      </span>
    )}
  </li>
);

const FooterSection = ({ title, links, isContact }: FooterSection) => (
  <div className={`w-full px-4 ${isContact ? 'sm:w-full md:w-1/2 lg:w-4/12' : 'sm:w-1/2 lg:w-2/12'}`}>
    <div className="mb-8 lg:mb-12">
      <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>
      <ul>
        {links.map((link, index) => (
          <FooterLink key={index} {...link} />
        ))}
      </ul>
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="mb-8">
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map(({ href, label, icon }, index) => (
        <a
          key={index}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

const FacebookLink = () => (
  <div className="mb-8">
    <a
      href="https://www.facebook.com/share/1AND4weQGb/"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-primary px-4 py-2 text-base font-medium text-white transition-colors duration-300 hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 p-1.5 transition-colors duration-300 group-hover:bg-white/30">
        <FiFacebook className="text-lg text-white" />
      </span>
      <span>Follow us on Facebook</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-dark relative z-10 bg-white pt-12 md:pt-16">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <div className="mb-8 max-w-[360px] lg:mb-12">
              <Link href="/" className="mb-6 flex items-center">
                <Image
                  src="/images/logo/ur.png"
                  alt="logo"
                  width={80}
                  height={30}
                  className="h-auto w-16"
                />
                <div className="ml-3">
                  <span className="text-xl font-bold text-black dark:text-white">
                    UNITED PANEL-SYSTEM(M)
                  </span>
                  <span className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                    SDN BHD
                  </span>
                </div>
              </Link>
              <p className="text-body-color dark:text-body-color-dark mb-6 text-sm leading-relaxed">
                ASEAN&apos;s First & Only PIR Double Belt Continuous Line
              </p>
              <FacebookLink />
            </div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />

        {/* Copyright */}
        <div className="py-6 text-center">
          <p className="text-body-color dark:text-body-color-dark text-sm">
            &copy; {currentYear} United Panel-System(M) Sdn. Bhd. (772009-A). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;