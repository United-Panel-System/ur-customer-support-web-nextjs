import Certification1 from "@/components/About/Certification1";
import Certification2 from "@/components/About/Certification2";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Certification and Approvals",
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
      <Certification1 />
      <Certification2 />
    </>
  );
};

export default CertificationPage;
