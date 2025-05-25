import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { AnimatedDiv } from "../Animation";

const AboutUs1 = ({ item }) => {
  const { title, description, image } = item;
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-col-reverse items-center lg:flex-row lg:flex-wrap">
            <div className="mb-[44px] w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title}
                paragraph={description}
                className="text-justify"
                mb="0"
                width="870px"
              />
            </div>

            <AnimatedDiv
              variant="slideLeft"
              className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image}
                  alt="about-image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  priority={false}
                />
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
