import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const CertificationPreview = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Certifications"
                paragraph="We maintain the highest industry standards through rigorous certifications that validate our commitment to quality and safety." // Use the passed description
                mb="44px"
              />
              <div className="mt-10">
                <Link
                  href="/about/certifications"
                  className="bg-primary shadow-signUp hover:bg-primary/90 dark:shadow-signUpDark rounded-md px-8 py-3 text-base font-medium text-white duration-300"
                >
                  View All Certifications
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-full lg:mr-0">
                <img
                  src="/images/about/all_certified.png"
                  alt="certifications"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPreview;
