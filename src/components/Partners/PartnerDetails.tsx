import Image from "next/image";
import { AnimatedDiv } from "../Animation";
import SectionTitle from "../Common/SectionTitle";

const exclusiveImages = [
    { src: "/images/partner/bitzer_290.jpeg", alt: "Bitzer" },
    { src: "/images/partner/lu-ve-contardo_290.jpeg", alt: "LU-VE" },
];

const authorisedImages = [
    { src: "/images/partner/partmer-ap-01.png", alt: "BASF" },
    { src: "/images/partner/ap-01.png", alt: "Hailiang" },
    { src: "/images/partner/partmer-ap-03.png", alt: "SAMPO" },
    { src: "/images/partner/csc.png", alt: "CSC Steel" },
    { src: "/images/partner/ap-02.png", alt: "Grant Ice Systems" },
    { src: "/images/partner/ap-03.png", alt: "FERMOD" },
    { src: "/images/partner/ap-05.png", alt: "Every Control Group" },
    { src: "/images/partner/ap-04.png", alt: "Danfoss" },
    { src: "/images/partner/ap-06.png", alt: "EMERSON Climate Technologies" },
    { src: "/images/partner/ap-08.png", alt: "EBMPAPST" },
    { src: "/images/partner/partmer-ap-11.png", alt: "WeiGuang Motor & Fans" },
    { src: "/images/partner/partmer-ap-12.png", alt: "Airmender" },
    { src: "/images/partner/ap-07.png", alt: "Alco Controls" },
    { src: "/images/partner/partmer-ap-14.png", alt: "MTH" },
    { src: "/images/partner/partmer-ap-15.png", alt: "FLEXELEC" },
    { src: "/images/partner/partmer-ap-16.png", alt: "Saginomiya" },
    { src: "/images/partner/ap-10.png", alt: "Maneurop" },
    { src: "/images/partner/ap-11.png", alt: "Castel" },
    { src: "/images/partner/partmer-ap-19.png", alt: "KK" },
    { src: "/images/partner/partmer-ap-20.png", alt: "Scotsman Ice System" },
    { src: "/images/partner/ap-12.png", alt: "Guntner" },
    { src: "/images/partner/ap-09.png", alt: "Embraco" },
    { src: "/images/partner/partmer-ap-23.png", alt: "Harris" },
    { src: "/images/partner/partmer-ap-24.png", alt: "HUB" },
    { src: "/images/partner/partmer-ap-25.png", alt: "DAN Doors" },
    { src: "/images/partner/partmer-ap-26.png", alt: "KASON" },
    { src: "/images/partner/partmer-ap-27.png", alt: "ASPERA" },
    { src: "/images/partner/partmer-ap-28.png", alt: "SUNISO" },
    { src: "/images/partner/partmer-ap-29.png", alt: "GEMLINE" },
    { src: "/images/partner/partmer-ap-30.png", alt: "BERNZOMATIC" },
    { src: "/images/partner/partmer-ap-31.png", alt: "TMI" },
    { src: "/images/partner/partmer-ap-32.png", alt: "DORIN" },
    { src: "/images/partner/partmer-ap-33.png", alt: "AC & R" },
    { src: "/images/partner/partmer-ap-34.png", alt: "Bristol Compressors" },
    { src: "/images/partner/partmer-ap-35.png", alt: "Tecumseh" },
    { src: "/images/partner/partmer-ap-36.png", alt: "KEMBLA" },
    { src: "/images/partner/partmer-ap-37.png", alt: "PARAGON" },
    { src: "/images/partner/partmer-ap-38.png", alt: "Anaconda" },
    { src: "/images/partner/partmer-ap-40.png", alt: "Grupo Repro" },
    { src: "/images/partner/partmer-ap-41.png", alt: "Packless" },
    { src: "/images/partner/partmer-ap-42.png", alt: "GOMAX" },
    { src: "/images/partner/partmer-ap-39.png", alt: "Cooper Lighting" },
];

export default function PartnerDetails() {
    return (
        <section className="pt-[50px] pb-[120px]">
            <div className="container">
                <AnimatedDiv>
                    <SectionTitle
                        title="Exclusive Distributorships"
                        paragraph="All of our refrigeration products and accessories are authentic and certified original. Together, we are committed to providing quality products that will best suit our customers' needs."
                        center
                        mb="80px"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {exclusiveImages.map((img, index) => (
                            <div
                                key={index}
                                className="w-full h-25 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm p-2"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={200}
                                    height={150}
                                    className="object-contain max-h-full"
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedDiv>

                <div className="relative my-20">
                    <hr className="border-t border-gray-300 dark:border-gray-600" />
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-4 text-gray-500 text-sm">
                        •
                    </span>
                </div>

                <AnimatedDiv>
                    <SectionTitle
                        title="Authorised Distributorships"
                        paragraph="The following are some examples of the refrigeration equipment and parts distributorships we are authorised to carry. Do kindly contact us to learn more about the many other brands we have to offer."
                        center
                        mb="80px"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {authorisedImages.map((img, index) => (
                            <div
                                key={index}
                                className="w-full h-25 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm p-2"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={200}
                                    height={150}
                                    className="object-contain max-h-full"
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedDiv>
            </div>
        </section>
    );
}