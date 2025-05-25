import Image from "next/image";
import { AnimatedDiv } from "../Animation";
import SectionTitle from "../Common/SectionTitle";

const Certification2 = () => {
  return (
    <section id="about2" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Image Section */}
            <AnimatedDiv variant="slideUp" className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto w-full">
                <Image
                  src="/images/about/all_certified.png"
                  alt="Certified Image"
                  width={600}
                  height={400}
                  className="drop-shadow-three transform rounded-lg transition duration-200 ease-in-out hover:scale-105"
                />
              </div>
            </AnimatedDiv>
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Environmental Responsibility & ISO Certification"
                paragraph="Additionally, we take pride in our commitment to environmental and safety standards:"
                mb="44px"
              />
              <AnimatedDiv
                variant="slideUp"
                staggerChildren={0.2}
                className="max-w-[600px]"
              >
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                    Climate and Environmental Responsibility
                  </h3>
                  <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    We have a cooperative agreement with the United Nations
                    Development Programme (UNDP) for the HCFC Phase-Out
                    Management Plans (HCMP), and we are committed to CFC-FREE
                    manufacturing.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                    ISO Certification
                  </h3>
                  <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    UNITED PANEL-SYSTEM (M) SDN BHD is an ISO-certified company,
                    underlining our continuous commitment to product quality and
                    improvement.
                  </p>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification2;
