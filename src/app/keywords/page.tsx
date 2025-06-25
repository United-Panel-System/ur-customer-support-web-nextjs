import KeywordSection from "@/components/Additional/KeywordSection";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keyword Index",
  description: "Comprehensive list of keywords related to coldroom, refrigeration systems, compressors, HVACR, panels, and more.",
  // other metadata
};

const KeywordPage = () => {
  return (
    <>
      <BreadcrumbWithBgImg
        pageName="Keyword Index"
        description=""
        image="/images/banner/contactUs.png"
      />
      <KeywordSection />
    </>
  );
};

export default KeywordPage;
