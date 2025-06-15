import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageGalleryProps = {
    images: string[];
    itemName: string;
    showThumbnails?: boolean;
    variant?: "product" | "news";
};

export function ImageGallery({ images, itemName, showThumbnails = true, variant = "product" }: ImageGalleryProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isProduct = variant === "product";

    return (
        <div className="space-y-4">
            {/* Main Swiper */}
            <div className="group relative overflow-hidden rounded-md shadow-lg dark:shadow-gray-800/50">
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    className="main-swiper rounded-md"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setActiveIndex(swiper.realIndex || 0);
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {images.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`relative w-full ${isProduct ? "aspect-square" : "max-h-[600px]"
                                    }`}
                            >
                                <img
                                    src={imgUrl}
                                    alt={`${itemName} - ${index + 1}`}
                                    className={`w-full ${isProduct ? "h-full object-cover" : "h-auto max-h-[600px] object-contain"
                                        }`}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/80 cursor-pointer">
                            <ChevronLeft />
                        </button>
                        <button className="swiper-button-next-custom absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/80 cursor-pointer">
                            <ChevronRight />
                        </button>
                    </>
                )}

                {/* Page Indicator */}
                <span className="absolute right-2 bottom-2 z-[10] rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                    {activeIndex + 1}/{images.length}
                </span>
            </div>

            {/* Thumbnail Swiper */}
            {showThumbnails && images.length > 1 && (
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode
                    watchSlidesProgress
                    navigation={{
                        nextEl: ".thumbs-button-next",
                        prevEl: ".thumbs-button-prev",
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="thumbs-swiper"
                >
                    {images.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <button
                                className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border-2 transition-all ${index === activeIndex
                                    ? "border-primary ring-primary/20 ring-2"
                                    : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                                    }`}
                            >
                                <img
                                    src={imgUrl}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                {index === activeIndex && (
                                    <div className="bg-primary/10 absolute inset-0" />
                                )}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
