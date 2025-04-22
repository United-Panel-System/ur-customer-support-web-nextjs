import SectionTitle from "../Common/SectionTitle";

const AboutUs2 = ({ item }) => {
  const { title, description, image } = item;
  return (
    <section id="about2" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto w-full">
                <img
                  src={image} // Use the passed image URL
                  alt="about-image"
                  className="drop-shadow-three mx-auto mb-[44px] h-auto w-full rounded-lg object-cover shadow-lg lg:mr-0"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title} // Use the passed title
                paragraph={description} // Use the passed description
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
