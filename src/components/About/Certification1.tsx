import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Certification1 = () => {
  const List = ({ text }) => (
    <div className="dark:bg-dark mb-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <p className="text-body-color dark:text-body-color-dark flex items-center text-lg font-medium">
        <span className="bg-primary/10 text-primary mr-4 inline-flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-md shadow-md transition duration-200 ease-in-out hover:shadow-xl">
          {checkIcon}
        </span>
        {text}
      </p>
    </div>
  );

  return (
    <section id="certification" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Quality Certifications & Approvals"
                paragraph="As an endorsement of our commitment to quality, the UR® panel meets several internationally recognized standards and certifications:"
                mb="44px"
              />

              <div className="mx-auto max-w-[600px] lg:mx-0">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <List text="TÜV Rheinland Standards: UR® panel complies with the renowned TÜV Rheinland standards." />
                    <List text="SIRIM QAS International: UR® panel is certified and listed by SIRIM QAS International, a recognized body for quality excellence." />
                    <List text="Bomba Malaysia Approval: Our insulation panels have been tested and approved by the Malaysian Fire Department (Bomba) for commercial and industrial use." />
                    <List text="FM Global (Factory Mutual): UR® PIR (polyisocyanurate) panel is approved by FM Global and adheres to superior fire performance standards recognized by investors, insurers, and constructors." />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Images) */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-10 flex w-full justify-center">
                  <Image
                    src="/images/about/all_certified.png"
                    alt="Certified Image"
                    width={600}
                    height={400}
                    className="drop-shadow-three transform rounded-lg transition duration-200 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="flex w-full justify-center">
                  <Image
                    src="/images/about/fm_approved.png"
                    alt="FM Approved Image"
                    width={600}
                    height={400}
                    className="drop-shadow-three transform rounded-lg transition duration-200 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification1;
