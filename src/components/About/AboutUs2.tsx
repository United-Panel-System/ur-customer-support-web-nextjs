import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { AnimatedDiv } from "../Animation";

const AboutUs2 = ({ item }) => {
  const { title, description, image } = item;
  return (
    <section id="about2" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-col flex-wrap items-center lg:flex-row">
            {/* Image Section first */}
            <AnimatedDiv variant="slideRight" className="w-full px-4 lg:w-1/2">
              <Image
                src={image}
                alt="about-image"
                width={700}
                height={320}
                className="drop-shadow-three lg: mx-0 mb-8 min-h-80 max-w-full rounded-md lg:mr-0"
                style={{ objectFit: "cover" }}
              />
            </AnimatedDiv>
            {/* Text Section second */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title}
                paragraph={description}
                mb="44px"
                className="text-justify"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
