import Link from "next/link";
import { AnimatedDiv } from "../Animation";

type BreadcrumbItem = {
  label: string;
  href?: string; // Optional, if not provided => current page
};

const BreadcrumbWithBgImg = ({
  pageName,
  description,
  image,
  breadcrumbs,
}: {
  pageName: string;
  description: string;
  image: string;
  breadcrumbs?: BreadcrumbItem[];
}) => {
  return (
    <div className="relative h-[250px] md:h-[310px]">
      {/* Background image */}
      <img
        src={image}
        alt="banner"
        className="absolute inset-0 z-0 h-[250px] w-full object-cover md:h-[310px]"
      />
      <div className="bg-opacity-50 absolute inset-0 z-6 bg-black/50"></div>

      {/* Overlay section */}
      <section className="relative z-10 h-full pt-16 lg:pt-[150px]">
        <div className="container h-full">
          <div className="-mx-4 flex h-full flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <AnimatedDiv
                variant="slideUp"
                staggerChildren={0.3}
                className="mb-8 max-w-[570px] md:mb-0 lg:mb-12"
              >
                <h1 className="mb-5 text-2xl font-bold text-white sm:text-3xl dark:text-white">
                  {pageName}
                </h1>
                <p className="hidden text-base leading-relaxed font-medium text-white xl:block">
                  {description}
                </p>
              </AnimatedDiv>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <AnimatedDiv variant="slideUp" className="text-end">
                <ul className="flex flex-wrap items-center gap-1 md:justify-end">
                  {breadcrumbs && breadcrumbs.length > 0 ? (
                    breadcrumbs.map((item, index) => (
                      <li key={index} className="flex items-center text-white">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="hover:text-primary text-base font-medium"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-base font-medium">
                            {item.label}
                          </span>
                        )}
                        {index < breadcrumbs.length - 1 && (
                          <span className="mx-2 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-white"></span>
                        )}
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-center">
                        <Link
                          href="/"
                          className="hover:text-primary pr-1 text-base font-medium text-white"
                        >
                          Home
                        </Link>
                        <span className="mx-2 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-white"></span>
                      </li>
                      <li className="text-base font-medium text-white">
                        {pageName}
                      </li>
                    </>
                  )}
                </ul>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreadcrumbWithBgImg;
