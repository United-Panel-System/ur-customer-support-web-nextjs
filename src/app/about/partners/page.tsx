import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import PartnerDetails from "@/components/Partners/PartnerDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Partners",
    description:
        "An integral link in UR® chain of quality comes from the development of reliable, professional relationships with our partners. We are proud to be the authorised distributor for many of the world-renowned brands in the industry. All of our refrigeration products and accessories are authentic and certified original. Together, we are committed to providing quality products that will best suit our customers' needs.",
    // other metadata
};

const PartnersPage = () => {
    return (
        <>
            <BreadcrumbWithBgImg
                pageName="Partners"
                description="An integral link in UR® chain of quality comes from the development of reliable, professional relationships with our partners. We are proud to be the authorised distributor for many of the world-renowned brands in the industry. "
                image="/images/banner/manufacturingPlant.png"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                    { label: "Partners" },
                ]}
            />
            <PartnerDetails />
        </>
    );
};

export default PartnersPage;
