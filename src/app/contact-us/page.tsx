import Breadcrumb from "@/components/Common/Breadcrumb";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import Contact from "@/components/Contact";
import ContactSection from "@/components/Contact/ContactSection";
import EnquiryForm from "@/components/Contact/EnquiryForm";

import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "For product and service enquires, kindly contact us",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Toaster position="top-center" />
      <BreadcrumbWithBgImg
        pageName="Contact Us"
        description="For product and service enquires, kindly contact us"
        image="/images/banner/contactUs.png"
      />
      <ContactSection />
      <section className="pt-2">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="bg-gray-light dark:bg-gray-dark flex flex-col flex-wrap items-center justify-center rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                <h2 className="mb-4 text-2xl leading-tight! font-bold text-black sm:text-3xl md:text-[30px] dark:text-white">
                  HOW CAN WE HELP?
                </h2>
                <p className="text-body-color mx-auto max-w-3xl text-base font-bold">
                  We' re here to help and answer any question you might have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryForm />
    </>
  );
};

export default ContactPage;
