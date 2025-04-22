import SectionTitle from "../Common/SectionTitle";

const AboutUs1 = ({ item }) => {
  const { title, description, image } = item;
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title} // Use the passed title
                paragraph={description} // Use the passed description
                mb="44px"
              />
            </div>

            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-full lg:mr-0">
                <img
                  src={image} // Use the passed image URL
                  alt="about-image"
                  className="drop-shadow-three mx-auto min-h-80 max-w-full rounded-lg lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
