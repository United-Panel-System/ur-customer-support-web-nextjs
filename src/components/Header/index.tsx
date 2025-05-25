"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { getMenuData } from "./menuData";
import { ProductCategory } from "@/types/products";

interface HeaderProps {
  productCategories: ProductCategory[];
}

const Header = ({ productCategories }: HeaderProps) => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const menuData = getMenuData(productCategories);

  return (
    <>
      <header
        className={`header dark:bg-gray-dark/80 sticky top-0 left-0 z-1200 flex w-full items-center bg-white/90 shadow-sm backdrop-blur-xs transition-all`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo flex items-center ${
                  sticky ? "py-5 lg:py-2" : "py-5 lg:py-2"
                }`}
              >
                <Image
                  src="/images/logo/ur.png"
                  alt="logo"
                  width={60}
                  height={20}
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-lg font-semibold">
                    UNITED PANEL-SYSTEM(M) SDN BHD
                  </span>
                  <span className="hidden text-xs font-normal text-wrap lg:block">
                    ASEAN&apos;s First & Only PIR Double Belt Continuous Line
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 xl:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="flex flex-col justify-between gap-0 xl:flex-row xl:items-center xl:gap-8">
                    {menuData.map((menuItem, index) => {
                      const isActive = usePathName === menuItem.path;
                      const hasSubmenu = !!menuItem.submenu;
                      const isChildActive = hasSubmenu
                        ? menuItem.submenu.some((submenuItem) => {
                            try {
                              const submenuPath =
                                submenuItem.path.split("?")[0];
                              return usePathName === submenuPath;
                            } catch {
                              return false;
                            }
                          })
                        : false;

                      return (
                        <li key={index} className="group">
                          {menuItem.path && hasSubmenu ? (
                            <div className="relative">
                              <div className="flex items-center justify-between">
                                <Link
                                  href={menuItem.path}
                                  className={`after:bg-primary flex py-2 text-base xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 ${
                                    isActive || isChildActive
                                      ? "text-primary dark:text-white"
                                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                  }`}
                                >
                                  {menuItem.title}
                                </Link>
                                {/* Mobile dropdown toggle */}
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSubmenu(index);
                                  }}
                                  className="pl-3 focus:outline-none xl:hidden"
                                  aria-label="Toggle submenu"
                                >
                                  <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""} xl:group-hover:rotate-180`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                                {/* Desktop dropdown indicator */}
                                <span className="hidden pl-3 xl:block">
                                  <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""} xl:group-hover:rotate-180`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </div>
                              {/* Submenu: show on group-hover (desktop) or openIndex (mobile) */}
                              <div
                                className={`submenu dark:bg-dark ${openIndex === index ? "block" : "hidden"} static w-full rounded-none bg-transparent p-0 shadow-none xl:invisible xl:absolute xl:top-full xl:left-0 xl:z-10 xl:block xl:w-[250px] xl:rounded-sm xl:bg-white xl:p-4 xl:opacity-0 xl:shadow-lg xl:transition-all xl:duration-200 xl:group-hover:visible xl:group-hover:top-full xl:group-hover:opacity-100`}
                              >
                                {menuItem.submenu.map((submenuItem, subIdx) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={subIdx}
                                    className="text-dark hover:text-primary block rounded-sm px-3 py-2.5 text-sm dark:text-white/70 dark:hover:text-white"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`relative flex py-2 text-base xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 ${
                                isActive
                                  ? "text-primary dark:text-white"
                                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : hasSubmenu ? (
                            <div className="relative">
                              <p
                                onClick={() => handleSubmenu(index)}
                                className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 dark:text-white/70 dark:group-hover:text-white"
                              >
                                {menuItem.title}
                                <span className="pl-3">
                                  <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""} xl:group-hover:rotate-180`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </p>
                              <div
                                className={`submenu dark:bg-dark ${openIndex === index ? "block" : "hidden"} static w-full rounded-none bg-transparent p-0 shadow-none xl:invisible xl:absolute xl:top-full xl:left-0 xl:z-10 xl:block xl:w-[250px] xl:rounded-sm xl:bg-white xl:p-4 xl:opacity-0 xl:shadow-lg xl:transition-all xl:duration-200 xl:group-hover:visible xl:group-hover:top-full xl:group-hover:opacity-100`}
                              >
                                {menuItem.submenu.map((submenuItem, subIdx) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={subIdx}
                                    className="text-dark hover:text-primary block rounded-sm px-3 py-2.5 text-sm dark:text-white/70 dark:hover:text-white"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 pl-4 xl:pr-0">
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
