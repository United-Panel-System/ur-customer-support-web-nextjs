import Link from "next/link";
import Image from "next/image";

const LandingHero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 6rem)" }} // Subtract header height
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner/banner1.png"
          alt="United-Panel System Factory"
          fill
          priority
          quality={100}
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Better opacity syntax */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl">
            United-Panel System (M)
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-2xl text-xl font-bold text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-2xl">
            ASEAN&apos;s First & Only PIR Double Belt Continuous Line
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-gray-100 hover:bg-red-700 hover:shadow-xl"
            >
              <span className="relative">Learn More</span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
