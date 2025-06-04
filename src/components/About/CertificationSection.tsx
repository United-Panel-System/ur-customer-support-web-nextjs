import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { AnimatedDiv } from "../Animation";

const CertificationSection = () => {
  const certifications = [
    {
      title: "TÜV Rheinland Certified",
      description:
        "Our UR® panels have achieved TÜV Rheinland certification, demonstrating compliance with rigorous German engineering standards for quality, durability, and safety in construction applications.",
      image: "/images/about/certifications/tuv-certified.png",
      width: 200,
      height: 150,
    },
    {
      title: "SIRIM QAS International Certified",
      description:
        "As Malaysia's premier certification body, SIRIM QAS International has verified our panels meet stringent quality benchmarks for performance and reliability in Southeast Asian climates.",
      image: "/images/about/certifications/sirim-qas.png",
      width: 200,
      height: 150,
    },
    {
      title: "Bomba Malaysia Fire Approved",
      description:
        "Officially approved by Malaysia's Fire and Rescue Department, our panels exceed national fire safety requirements for commercial and industrial building applications.",
      image: "/images/about/certifications/bomba.png",
      width: 200,
      height: 150,
    },
    {
      title: "FM Global Approved",
      description:
        "Recognized by this global leader in commercial property insurance, our PIR panels meet exceptional fire performance standards trusted by Fortune 500 companies worldwide.",
      image: "/images/about/certifications/fm-approved.png",
      width: 200,
      height: 150,
    },
    {
      title: "ISO 9001:2015 Certified",
      description:
        "Our manufacturing facilities maintain ISO 9001 certification, ensuring consistent quality through documented processes, continuous improvement, and customer-focused quality management.",
      image: "/images/about/certifications/iso-certified.jpg",
      width: 200,
      height: 150,
    },
    {
      title: "UNDP Environmental Partner",
      description:
        "Through our partnership with UNDP's HCFC Phase-Out Management Plan, we demonstrate leadership in sustainable manufacturing with CFC-free production processes that protect the ozone layer.",
      image: "/images/about/certifications/undp.png",
      width: 200,
      height: 150,
    },
  ];

  return (
    <section
      id="certification"
      className="dark:bg-bg-color-dark bg-gray-50 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        {/* <SectionTitle
          title="Internationally Recognized Certifications"
          paragraph="Our commitment to excellence is validated by these prestigious certifications from leading global institutions:"
          mb="60px"
          center
        /> */}

        <AnimatedDiv
          variant="slideUp"
          staggerChildren={0.1}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group dark:bg-dark relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700"
            >
              <div className="mb-4 flex h-40 items-center justify-center">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={cert.width}
                  height={cert.height}
                  className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-grow flex-col text-center">
                <h3 className="text-dark mb-3 text-xl font-bold dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-4 flex-grow">
                  {cert.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default CertificationSection;
