import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedDiv, AnimatedLink } from "../Animation";

const LandingHero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 6rem)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner/banner1.png"
          alt="United Panel-System Factory"
          fill
          priority
          quality={100}
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container px-4">
        <AnimatedDiv
          variant="slideUp"
          staggerChildren={0.2}
          className="mx-auto max-w-4xl text-center"
        >
          <AnimatedDiv variant="slideUp" className="mb-6">
            <h1 className="text-[clamp(1.5rem,6vw,4.5rem)] font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap leading-tight">
              United Panel-System (M)
            </h1>
          </AnimatedDiv>

          <AnimatedDiv variant="slideUp" className="mb-8">
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-bold text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-center">
              ASEAN&apos;s First & Only PIR Double Belt Continuous Line
            </p>
          </AnimatedDiv>

          <AnimatedDiv variant="slideUp">
            <div className="flex justify-center">
              <AnimatedLink
                href="/about"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-8 py-4 font-bold text-white shadow-lg hover:bg-primary hover:shadow-xl"
              >
                <span className="relative">Learn More</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </AnimatedLink>
            </div>
          </AnimatedDiv>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default LandingHero;
