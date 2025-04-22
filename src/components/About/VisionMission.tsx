import Image from "next/image";

const VisionMission = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/target.svg"
                alt="target image"
                fill
                className="drop-shadow-three rounded-lg dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/target.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden rounded-lg dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* Vision Section */}
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-extrabold text-blue-600 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
                  Our Vision
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:leading-relaxed md:text-lg">
                  At UNITED PANEL-SYSTEM (M) SDN. BHD., we take pride in
                  producing high-quality products that meet global standards.
                  Our goal is to be a leader in the industry, constantly
                  striving for excellence in innovation, service, and
                  sustainability.
                </p>
              </div>
              {/* Mission Section */}
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-extrabold text-red-600 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
                  Our Mission
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:leading-relaxed md:text-lg">
                  We embrace advanced technology and automation to ensure
                  precision and efficiency in our production. By manufacturing
                  everything in-house, we maintain the highest standards of
                  quality and service. Our durable, well-aligned panels are
                  trusted by businesses in hospitality, retail, and industrial
                  sectors worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
