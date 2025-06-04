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
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const usePathName = usePathname();
  const menuData = getMenuData(productCategories);

  // Close mobile menu on route change
  useEffect(() => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  }, [usePathName]);

  return (
    <>
      <header
        className={`header dark:bg-gray-dark/80 sticky top-0 left-0 z-1300 flex w-full items-center bg-white/90 shadow-sm backdrop-blur-xs transition-all`}
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
                  <span className="hidden text-lg font-semibold sm:block">
                    UNITED PANEL-SYSTEM(M) SDN BHD
                  </span>
                  <span className="hidden text-xs font-normal text-wrap lg:block">
                    ASEAN&apos;s First & Only PIR Double Belt Continuous Line
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden flex-1 items-center justify-end px-4 xl:flex">
              <nav>
                <ul className="flex flex-row items-center gap-8">
                  {menuData.map((menuItem, index) => {
                    const isActive = usePathName === menuItem.path;
                    const hasSubmenu = !!menuItem.submenu;
                    const isChildActive = hasSubmenu
                      ? menuItem.submenu.some((submenuItem) => {
                          try {
                            const submenuPath = submenuItem.path.split("?")[0];
                            return usePathName === submenuPath;
                          } catch {
                            return false;
                          }
                        })
                      : false;

                    return (
                      <li key={index} className="group relative">
                        {hasSubmenu ? (
                          <div className="relative">
                            <div className="group flex cursor-pointer items-center justify-between">
                              {menuItem.path ? (
                                <Link
                                  href={menuItem.path}
                                  className={`after:bg-primary flex items-center py-2 text-base transition-colors duration-200 xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 ${
                                    isActive || isChildActive
                                      ? "text-primary dark:text-white"
                                      : "text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                                  }`}
                                >
                                  {menuItem.title}
                                  <span className="pl-3">
                                    <svg
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                      className={`transition-transform duration-200 group-hover:rotate-180 ${
                                        isActive || isChildActive
                                          ? "text-primary dark:text-white"
                                          : "text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                                      }`}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                </Link>
                              ) : (
                                <div
                                  className={`after:bg-primary group flex items-center py-2 text-base transition-colors duration-200 xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 ${
                                    isActive || isChildActive
                                      ? "text-primary dark:text-white"
                                      : "text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                                  }`}
                                >
                                  {menuItem.title}
                                  <span className="pl-3">
                                    <svg
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                      className={`transition-transform duration-200 group-hover:rotate-180 ${
                                        isActive || isChildActive
                                          ? "text-primary dark:text-white"
                                          : "text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                                      }`}
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
                              )}
                            </div>

                            {/* Desktop submenu */}
                            <div
                              className={`submenu dark:bg-dark invisible absolute top-full left-0 z-10 w-[250px] rounded-sm bg-white p-4 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100`}
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
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="flex items-center justify-end pr-16 pl-4 xl:pr-0">
                <ThemeToggler />
              </div>
            </div>

            {/* Mobile Hamburger & ThemeToggler */}
            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggler />
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="relative z-50 block rounded-md px-3 py-[6px]"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Nav */}
      <div
        className={`fixed right-0 left-0 z-[1300] overflow-y-auto bg-white transition-all duration-300 ease-in-out xl:hidden dark:bg-gray-900 ${
          navbarOpen
            ? "top-[--header-height] h-[calc(100vh-var(--header-height))] opacity-100"
            : "top-[-100vh] h-0 opacity-0"
        }`}
        style={
          { "--header-height": sticky ? "72px" : "88px" } as React.CSSProperties
        }
      >
        <div className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                {menuItem.submenu ? (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => handleSubmenu(index)}
                      className="flex w-full items-center justify-between py-2 text-lg font-medium"
                    >
                      <span>{menuItem.title}</span>
                      <svg
                        className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <ul className="ml-4 space-y-3 border-l border-gray-200 pl-4 dark:border-gray-700">
                        {menuItem.submenu.map((submenuItem, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={submenuItem.path}
                              className="hover:text-primary block py-1.5 text-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={menuItem.path || "#"}
                    className="block py-2 text-lg font-medium"
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
