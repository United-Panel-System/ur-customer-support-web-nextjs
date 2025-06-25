import CertificationSection from "@/components/About/CertificationSection";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Quality Certification and Approvals",
  description:
    "Our UR® panels are certified to meet international quality and safety standards, ensuring reliability and durability.",
  // other metadata
};

const CertificationPage = () => {
  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Quality Certifications & Approvals"
        description="Our UR® panels are certified to meet international quality and safety standards, ensuring reliability and durability."
        image="/images/banner/manufacturingPlant.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Quality Certifications & Approvals" },
        ]}
      />
      <CertificationSection />
    </>
  );
};

export default CertificationPage;
