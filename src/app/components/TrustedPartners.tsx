// TrustedPartners.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// base logos
const logos = [
    "/assets/Trusted1.png",
    "/assets/Trusted2.png",
    "/assets/Trusted3.png",
    "/assets/Trusted4.png",
    "/assets/Trusted5.png",
    "/assets/Trusted6.png",
];

// repeat enough so total width >> viewport (prevents "not enough slides" loop warning)
const items = Array.from({ length: logos.length * 20 }, (_, i) => logos[i % logos.length]);

export default function TrustedPartnersSwiper() {
    return (
        <>
            <h3 className="text-base font-normal text-zinc-400 mt-24 text-center max-sm:mt-20">Trusted Partners</h3>

            <div className="relative mt-32 max-sm:mt-10">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={80}
                    breakpoints={{
                        640: {
                            spaceBetween: 80,
                        },
                        0: {
                            spaceBetween: 40,
                        },
                    }}
                    allowTouchMove={false}
                    speed={8000}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop
                    loopAdditionalSlides={200}
                >
                    {items.map((src, i) => (
                        <SwiperSlide key={i} className="!w-auto">
                            <Image
                                src={src}
                                width={32}
                                height={32}
                                alt="Partner"
                                unoptimized
                                priority={i < logos.length}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Faded edges */}
                <div className="ticker-fade-left" />
                <div className="ticker-fade-right" />
            </div>
        </>
    );
}