import Image from "next/image";
import { AnimatedDiv } from "../Animation";

const VisionMission = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <AnimatedDiv variant="rotateIn" className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/target.svg"
                alt="target image"
                fill
                className="drop-shadow-three rounded-md dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/target.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden rounded-md dark:block dark:drop-shadow-none"
              />
            </div>
          </AnimatedDiv>
          <div className="flex w-full flex-col gap-8 px-4 lg:w-1/2">
            {/* Vision Section */}
            <AnimatedDiv
              variant="dropBounce"
              className="dark:bg-dark mb-4 rounded-md bg-white p-8 shadow"
            >
              <h3 className="mb-4 text-3xl font-extrabold text-blue-600 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
                Our Vision
              </h3>
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:leading-relaxed md:text-lg">
                All of us at UR® take great pride in the quality products that we manufacture and provide.
                We aim to be a leader in our field and we will continue to strive towards products and service excellence.
              </p>
            </AnimatedDiv>
            {/* Mission Section */}
            <AnimatedDiv
              variant="dropBounce"
              className="dark:bg-dark rounded-md bg-white p-8 shadow"
            >
              <h3 className="mb-4 text-3xl font-extrabold text-red-600 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
                Our Mission
              </h3>
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:leading-relaxed md:text-lg">
                We adopt a highly advanced technological approach in our production methods.
                Production lines are automated and equipped with compressors and temperature controls.
                Our finished panel products are well-aligned - a step still significantly difficult
                to achieve in the current field due to the high level of expertise and costs involved.
                We do not outsource our work and customers are assured with our high standards of
                quality and service control. Our reliable products have gained the acceptance and
                recognition from our customers and are widely used in restaurants, hotels, resorts,
                bakeries, supermarkets and other commercial/industrial industries.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
