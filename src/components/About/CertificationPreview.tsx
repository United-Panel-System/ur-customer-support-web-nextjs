import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { ArrowRight } from "lucide-react";
import { AnimatedDiv, AnimatedLink } from "../Animation";

const CertificationPreview = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-col-reverse flex-wrap items-center lg:flex-row">
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Certifications"
                paragraph="We maintain the highest industry standards through rigorous certifications that validate our commitment to quality and safety." // Use the passed description
                mb="44px"
              />
              <AnimatedDiv variant="slideUp">
                <div className="">
                  <AnimatedLink
                    href="/about/certifications"
                    className="group bg-primary hover:bg-primary/90 relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-4 font-bold text-white shadow-lg hover:shadow-xl"
                  >
                    <span className="relative">Learn More</span>
                    <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </AnimatedLink>
                </div>
              </AnimatedDiv>
            </div>

            {/* Image Section */}
            <AnimatedDiv
              variant="slideUp"
              className="w-full rounded-md mb-8 px-4 shadow lg:w-1/2"
            >
              <Image
                src="/images/about/all_certified.png"
                alt="certifications"
                width={700}
                height={320}
                className="bg-gray-light drop-shadow-three lg: mx-0 min-h-80 max-w-full rounded-md lg:mr-0"
                style={{ objectFit: "cover" }}
              />
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPreview;
