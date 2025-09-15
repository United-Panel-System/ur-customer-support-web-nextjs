import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { ContactInfo } from "./ContactInfo";
import { AnimatedDiv } from "../Animation";
import {
  MapPin,
  Mail,
  Phone,
  Printer,
  ShoppingBag,
} from "lucide-react";

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
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[35px] dark:text-white">
        {title}
      </h2>
      <p className="text-body-color text-base leading-relaxed!">{paragraph}</p>
    </div>
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
              <AnimatedDiv
                variant="slideLeft"
                className="w-full px-4 lg:w-1/2 lg:pr-10"
              >
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
                  <ContactInfo
                    icon={<MapPin className="h-5 w-5" />}
                    label="Address"
                    items={[
                      {
                        text:
                          "PTD 124299, Jalan Kempas Lama, Kampung Seelong Jaya, 81300 Skudai, Johor, Malaysia.",
                      },
                    ]}
                  />
                  <ContactInfo
                    icon={<Phone className="h-5 w-5" />}
                    label="Telephone"
                    items={[
                      { text: "+607 5951588", href: "tel:+6075951588" },
                      { text: "+607 5951288", href: "tel:+6075951288" },
                    ]}
                  />
                  <ContactInfo
                    icon={<Printer className="h-5 w-5" />}
                    label="Facsimile"
                    items={[{ text: "+607 5951177 / 5951122" }]}
                  />
                  <ContactInfo
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    items={[
                      {
                        text: "united@ur.com.my",
                        href: "mailto:united@ur.com.my",
                      },
                    ]}
                  />
                  <ContactInfo
                    icon={<Mail className="h-5 w-5" />}
                    label="Exports / International Enquiry"
                    items={[
                      {
                        text: "ireneloh@ur.com.my",
                        href: "mailto:ireneloh@ur.com.my",
                      },
                    ]}
                  />
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                variant="slideRight"
                className="w-full px-4 lg:w-1/2 lg:pl-10"
              >
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-md shadow-lg">
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
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="contact2" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
            <div className="flex flex-col-reverse flex-wrap items-center lg:flex-row">
              <AnimatedDiv
                variant="slideLeft"
                className="w-full px-4 lg:w-1/2 lg:pr-10"
              >
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-md shadow-lg">
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
              </AnimatedDiv>
              <AnimatedDiv
                variant="slideRight"
                trigger="onView"
                className="w-full px-4 lg:w-1/2 lg:pl-10"
              >
                <ContactSectionTitle
                  title="Kuala Lumpur (Project Sales & Services)"
                  paragraph="UR REFRIGERATION SDN. BHD.(303292-A)"
                  mb="20px"
                  width=""
                />
                <div className="space-y-6">
                  <ContactInfo
                    icon={<MapPin className="h-5 w-5" />}
                    label="Address"
                    items={[
                      {
                        text:
                          "No.15, Jalan 7/152, Taman Perindustrian Bukit OUG, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia.",
                      },
                    ]}
                  />
                  <ContactInfo
                    icon={<Phone className="h-5 w-5" />}
                    label="Telephone"
                    items={[{ text: "+603 77831181", href: "tel:+60377831181" }]}
                  />
                  <ContactInfo
                    icon={<Printer className="h-5 w-5" />}
                    label="Facsimile"
                    items={[{ text: "+603 77831161" }]}
                  />
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="contact3" className="py-8 md:py-12 lg:py-20">
        <div className="container">
          <div className="border-body-color/[.15] pb-8 md:pb-12 lg:pb-20 dark:border-white/[.15]">
            <div className="flex flex-wrap items-center">
              <AnimatedDiv
                variant="slideLeft"
                className="w-full px-4 lg:w-1/2 lg:pr-10"
              >
                <ContactSectionTitle
                  title="Kuala Lumpur (Refrigeration Equipment Center)"
                  paragraph="UNITED COOLING SYSTEMS SDN. BHD.(904175-X)"
                  mb="20px"
                  width=""
                />
                <div className="space-y-6">
                  <ContactInfo
                    icon={<MapPin className="h-5 w-5" />}
                    label="Address"
                    items={[
                      {
                        text:
                          "No.6, Jalan 6/152, Taman Perindustrian Bukit OUG, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia.",
                      },
                    ]}
                  />
                  <ContactInfo
                    icon={<Phone className="h-5 w-5" />}
                    label="Telephone"
                    items={[{ text: "+603 77702800", href: "tel:+60377702800" }]}
                  />
                  <ContactInfo
                    icon={<Printer className="h-5 w-5" />}
                    label="Facsimile"
                    items={[{ text: "+603 77706800" }]}
                  />
                  <ContactInfo
                    icon={<ShoppingBag className="h-5 w-5" />}
                    label="E-Commerce Website"
                    items={[{ text: "uncs.my", href: "https://uncs.my" }]}
                  />
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                variant="slideRight"
                className="w-full px-4 lg:w-1/2 lg:pl-10"
              >
                <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-md shadow-lg">
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
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
