import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";

const ProjectCTA = () => {
  return (
    <section id="projectCTA" className="py-8 md:py-12 lg:py-20">
      <div className="container">
        <WobbleCard className="from-primary/90 to-primary/70 dark:from-primary/80 dark:to-primary/60 relative overflow-hidden rounded-2xl bg-gradient-to-br px-6 py-12 shadow-xl sm:px-10 lg:px-16">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for Custom Cold Room or Refrigeration System?
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Let&apos;s work together to design sustainable, efficient cold storage
              and panel systems that match your requirements.
            </p>
            <div className="mt-10">
              <Link
                href="/contact#enquiry"
                className="group text-primary relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white px-8 py-4 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
              >
                <span className="relative">Contact Us</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default ProjectCTA;
