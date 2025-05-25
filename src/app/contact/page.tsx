import Breadcrumb from "@/components/Common/Breadcrumb";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import Contact from "@/components/Contact";
import ContactSection from "@/components/Contact/ContactSection";
import EnquiryForm from "@/components/Contact/EnquiryForm";
import { HowCanWeHelp } from "@/components/Contact/HowCanWeHelpBanner";

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
      <HowCanWeHelp />
      <EnquiryForm />
    </>
  );
};

export default ContactPage;
