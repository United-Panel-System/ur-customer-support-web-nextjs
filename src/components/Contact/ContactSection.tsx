import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { ContactInfoWithHref, ContactNoHref } from "./ContactInfo";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const addressIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88c2.11-2.69 5-7 5-9.88c0-2.76-2.24-5-5-5m0 7.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
      opacity=".3"
    ></path>
    <path
      fill="currentColor"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"
    ></path>
    <circle cx="12" cy="9" r="2.5" fill="currentColor"></circle>
  </svg>
);

const mailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5l8-5zm-8-7L4 6h16z"
    ></path>
  </svg>
);

const phoneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
    ></path>
  </svg>
);

const faxIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      d="M19 9h-1V4H8v5h-.78C6.67 8.39 5.89 8 5 8c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3c.89 0 1.67-.39 2.22-1H22v-8c0-1.66-1.34-3-3-3M6 18c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1s1 .45 1 1zm4-12h6v3h-6zm10 12H8v-7h11c.55 0 1 .45 1 1z"
    ></path>
    <circle cx="15" cy="13" r="1" fill="currentColor"></circle>
    <circle cx="18" cy="13" r="1" fill="currentColor"></circle>
    <circle cx="15" cy="16" r="1" fill="currentColor"></circle>
    <circle cx="18" cy="16" r="1" fill="currentColor"></circle>
    <path fill="currentColor" d="M9 12h4v5H9z"></path>
  </svg>
);

const ContactSectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[35px] dark:text-white">
          {title}
        </h2>
        <p className="text-body-color text-base leading-relaxed!">
          {paragraph}
        </p>
      </div>
    </>
  );
};

const ContactSection = () => {
  return (
    <>
      {/* Section 1 */}
      <section id="contact1" className="pt-8 md:pt-12 lg:pt-20">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-8 md:pb-12 lg:pb-20 dark:border-white/[.15]">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2 lg:pr-10">
                <ContactSectionTitle
                  title="Johor Bahru (Headquarters)"
                  paragraph={
                    <>
                      UNITED PANEL-SYSTEM (M) SDN. BHD.(772009-A) <br />
                      UNITED REFRIGERATION-SYSTEM (M) SDN. BHD.(772011-D) <br />
                      UNITED COLD-SYSTEM (M) SDN. BHD.(748674-K)
                    </>
                  }
                  mb="20px"
                  width=""
                />

                <div className="space-y-6">
                  {/* Address */}
                  <ContactNoHref
                    icon={addressIcon}
                    label="Address"
                    text="PTD 124299, Jalan Kempas Lama, Kampung Seelong Jaya, 81300 Skudai, Johor, Malaysia."
                  />

                  {/* Phone Numbers */}
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md p-2 shadow-sm">
                      {phoneIcon}
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                        Telephone
                      </span>
                      <div className="mt-1 flex gap-2">
                        <a
                          href="tel:+6075951588"
                          className="hover:text-primary dark:hover:text-primary/90 text-gray-700 dark:text-gray-300"
                        >
                          +607 5951588
                        </a>
                        <span className="text-gray-400">/</span>
                        <a
                          href="tel:+6075951288"
                          className="hover:text-primary dark:hover:text-primary/90 text-gray-700 dark:text-gray-300"
                        >
                          +607 5951288
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Fax */}
                  <ContactNoHref
                    icon={faxIcon}
                    label="Facsimile"
                    text="+607 5951177 / 5951122"
                  />

                  {/* Email */}
                  <ContactInfoWithHref
                    icon={mailIcon}
                    label="Email"
                    text="united@ur.com.my"
                    href="mailto:united@ur.com.my"
                  />

                  {/* International Enquiry */}
                  <ContactInfoWithHref
                    icon={mailIcon}
                    label="Exports / International Enquiry"
                    text="ireneloh@ur.com.my"
                    href="mailto:ireneloh@ur.com.my"
                  />
                </div>
              </div>

              {/* Map Column */}
              <div className="w-full px-4 lg:w-1/2 lg:pl-10">
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2371893294785!2d103.71369427475155!3d1.6130927606736212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7010ace6dbc1%3A0xb1e7c6e71e2429f8!2sUNITED%20PANEL-SYSTEM%20(M)%20SDN.%20BHD.!5e0!3m2!1sen!2smy!4v1738389921041!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="contact2" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Map Section */}
              <div className="w-full px-4 lg:w-1/2 lg:pr-10">
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968.19036804849!2d101.6517290697754!3d3.0692343000000184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b01e89bd103%3A0xa7f486e51a48237e!2sUR%20Refrigeration%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1738392788428!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 border-0"
                  ></iframe>
                </div>
              </div>
              {/* Text Section */}
              <div className="w-full px-4 lg:w-1/2 lg:pl-10">
                <ContactSectionTitle
                  title="Kuala Lumpur (Project Sales & Services)"
                  paragraph="UR REFRIGERATION SDN. BHD.(303292-A)"
                  mb="20px"
                  width=""
                />
                <div className="space-y-6">
                  {/* Address */}
                  <ContactNoHref
                    icon={addressIcon}
                    label="Address"
                    text="PTD 124299, Jalan Kempas Lama, Kampung Seelong Jaya, 81300 Skudai, Johor, Malaysia."
                  />

                  {/* Phone Numbers */}
                  <ContactInfoWithHref
                    icon={phoneIcon}
                    label="Telephone"
                    text="+603 77831181"
                    href="tel:+60377831181"
                  />

                  {/* Fax */}
                  <ContactNoHref
                    icon={faxIcon}
                    label="Facsimile"
                    text="+603 77831161"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="contact3" className="py-8 md:py-12 lg:py-20">
        <div className="container">
          <div className="border-body-color/[.15] pb-8 md:pb-12 lg:pb-20 dark:border-white/[.15]">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2 lg:pr-10">
                <ContactSectionTitle
                  title="Johor Bahru (Headquarters)"
                  paragraph="UNITED COOLING SYSTEMS SDN. BHD.(904175-X)"
                  mb="20px"
                  width=""
                />

                <div className="space-y-6">
                  {/* Address */}
                  <ContactNoHref
                    icon={addressIcon}
                    label="Address"
                    text="No.6, Jalan 6/152, Taman Perindustrian Bukit OUG, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia."
                  />

                  {/* Phone Numbers */}
                  <ContactInfoWithHref
                    icon={phoneIcon}
                    label="Telephone"
                    text="+603 77702800"
                    href="tel:+60377702800"
                  />

                  {/* Fax */}
                  <ContactNoHref
                    icon={faxIcon}
                    label="Facsimile"
                    text="+603 77706800"
                  />
                </div>
              </div>

              {/* Map Column */}
              <div className="w-full px-4 lg:w-1/2 lg:pl-10">
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7968.181077065336!2d101.661089!3d3.07048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b022625740b%3A0xb716883d165078cb!2sUnited%20Cooling%20Systems%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1738392658324!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
