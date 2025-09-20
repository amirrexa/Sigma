// FeedBackSpeaksVolumes.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// ─── dummy data (swap with your real content) ──────────────────────────────────
type Testimonial = {
    id: string;
    company: string;
    logo: string;      // 32x32-ish icon path
    color?: string;    // optional accent
    quote: string;
};

const BASE: Testimonial[] = [
    { id: "1", company: "Celestial", logo: "/assets/icons/Celestial.png", color: "#2bd4bd", quote: "It has been great so far. Good communication, great team, and very creative." },
    { id: "2", company: "Apex", logo: "/assets/icons/Apex.png", color: "#a855f7", quote: "Responsive team with fast execution." },
    { id: "3", company: "Quantom", logo: "/assets/icons/Quantom.png", color: "#22d3ee", quote: "Great experience being on the X spaces with Pauli. Professional hosting." },
    { id: "4", company: "Acme Corp", logo: "/assets/icons/AcmeCorp.png", color: "#fb923c", quote: "They brought the vision to life and delivered measurable results." },
    { id: "5", company: "Echo Valley", logo: "/assets/icons/EchoValley.png", color: "#6366f1", quote: "Good communication, great team, very creative." },
];

// repeat enough to keep the loop smooth
const repeat = <T,>(arr: T[], times = 8) =>
    Array.from({ length: arr.length * times }, (_, i) => arr[i % arr.length]);

// make three slightly offset feeds so columns don’t look identical
const COL1 = repeat(BASE, 6);
const COL2 = repeat([...BASE.slice(2), ...BASE.slice(0, 2)], 6);
const COL3 = repeat([...BASE.slice(4), ...BASE.slice(0, 4)], 6);

const MOBILE = repeat(BASE, 12);

function Card({ t }: { t: Testimonial }) {
    return (
        <div className="relative rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm px-5 py-6 max-sm:p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_50px_-20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3">
                <Image src={t.logo} alt={t.company} width={28} height={28} unoptimized />
                <h4 className="text-white font-semibold leading-none flex gap-1 items-center">
                    <span className="text-white text-[20px] font-medium">{t.company}</span>
                    <Image src={"/assets/icons/Tick.png"} width={20} height={20} alt="Tick" />
                </h4>
            </div>
            {/*  */}
            <p className="mt-4 text-sm text-left leading-6 text-zinc-400 max-sm:text-[10px]">&ldquo;{t.quote}&rdquo;</p>
        </div>
    );
}

// ─── column wrapper with vertical fades ────────────────────────────────────────
function Column({
    items,
    reverse = false,
    speed = 9000,
    delay = 1,
}: {
    items: Testimonial[];
    reverse?: boolean;
    speed?: number;
    delay?: number;
}) {
    return (
        <div className="relative h-[460px] overflow-hidden rounded-3xl">
            <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={16}
                allowTouchMove={false}
                speed={speed}
                autoplay={{
                    delay,
                    reverseDirection: reverse,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop
                loopAdditionalSlides={items.length}
                className="h-full"
            >
                {items.map((t, i) => (
                    <SwiperSlide key={`${t.id}-${i}`} className="!h-auto">
                        <Card t={t} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

// ─── main section ──────────────────────────────────────────────────────────────
export function FeedBackSpeaksVolumes() {
    return (
        <section className="mt-40 max-sm:mt-20 max-w-[1120px] max-sm:w-[85%] mx-auto flex flex-col items-center text-center">
            <h2 className="mask-bottom-fade font-medium text-5xl text-white max-sm:text-2xl">
                Feedback Speaks Volumes
            </h2>
            <p className="mt-6 max-sm:mt-4 text-zinc-400 w-full md:w-1/2 max-sm:text-[10px]">
                Read stories from teams we’ve collaborated with. We helped bring their vision to life and deliver measurable success.
            </p>

            {/* Mobile: single vertical swiper with all data */}
            <div className="mt-10 w-full relative sm:hidden">
                <div className="ticker-fade-top" />
                <div className="ticker-fade-bottom" />
                <Column items={MOBILE} speed={8800} />
            </div>

            {/* Desktop/Tablet: three independent vertical swipers */}
            <div className="mt-20 w-full grid grid-cols-1 gap-4 md:grid-cols-3 relative max-sm:hidden">
                <div className="ticker-fade-top" />
                <div className="ticker-fade-bottom" />
                {/* left: downwards marquee */}
                <Column items={COL1} speed={8500} />

                {/* middle: upwards marquee (reverse) */}
                <Column items={COL2} reverse speed={9000} />

                {/* right: downwards marquee */}
                <Column items={COL3} speed={8000} />
            </div>
        </section>
    );
}