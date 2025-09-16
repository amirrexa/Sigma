// src/app/components/HeroMain.tsx
"use client";

import Image from "next/image";

export function Hero() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className=" min-h-[100vh] overflow-hidden flex flex-col items-center max-sm:w-[85%] max-sm:mx-auto"
        >
            {/* Decorative background */}
            <Image
                src="/assets/Background.png"
                alt=""
                aria-hidden="true"
                width={1728}
                height={1125}
                priority
                unoptimized
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 max-sm:hidden"
            />

            <Image
                src="/assets/BackgroundMobile.png"
                alt=""
                aria-hidden="true"
                width={375}
                height={640}
                priority
                unoptimized
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 sm:hidden"
            />

            <div className="flex flex-col mt-16 max-sm:mt-8 z-20 w-1/2 items-center justify-center max-sm:w-full">
                {/* If this opens a modal or triggers UI, keep as <button>. If it navigates, switch to <a href="..."> */}
                <button
                    type="button"
                    className="relative flex items-center justify-center gap-2 px-4 h-[42px] max-sm:h-[40px] rounded-[24px] border border-[#859BFF] bg-[#01041098] backdrop-blur-lg overflow-hidden"
                    aria-label="Announcement: Guess what’s around the corner? Stay tuned!"
                >
                    <Image
                        src="/assets/GlowLine.png"
                        alt=""
                        aria-hidden="true"
                        width={711}
                        height={8}
                        className="pointer-events-none absolute top-0 -translate-y-1/2"
                    />
                    <span className="flex items-center justify-center text-[8px] h-[18px] font-bold px-2 rounded-[40px] bg-primary text-black">
                        NEW
                    </span>
                    <span className="text-base text-primary font-normal max-sm:text-xs">
                        Guess what’s around the corner? Stay tuned!
                    </span>
                </button>

                <h1 id="hero-heading" className="text-white font-bold text-[64px] mt-24 max-sm:mt-[74px] max-sm:text-[32px] text-center">
                    Website Draft for Sigma
                </h1>

                {/* Use a paragraph for the subheading/tagline */}
                <p className="text-zinc-400 font-normal text-2xl mt-8 max-sm:mt-10 max-sm:text-sm">
                    Web3 &amp; Finance Growth Partner
                </p>

                <Image
                    src="/assets/GlowLine.png"
                    alt=""
                    aria-hidden="true"
                    width={711}
                    height={64}
                    className="mt-4 max-sm:hidden"
                />
            </div>
        </section>
    );
}