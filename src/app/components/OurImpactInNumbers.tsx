// ImpactSection.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function OurImpactInNumbers() {
    useEffect(() => {
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const items = Array.from(document.querySelectorAll<HTMLElement>("[data-count-to]"));

        const animate = (el: HTMLElement) => {
            const to = Number(el.dataset.countTo || "0");
            const dur = Number(el.dataset.duration || "2000");
            const prefix = el.dataset.prefix ?? "";
            const suffix = el.dataset.suffix ?? "";
            const format = new Intl.NumberFormat("en", { notation: el.dataset.notation as any || "standard", maximumFractionDigits: 1 });

            let start: number | null = null;
            const step = (ts: number) => {
                if (start === null) start = ts;
                const p = Math.min(1, (ts - start) / dur);
                const val = Math.floor(easeOut(p) * to);
                el.textContent = `${prefix}${format.format(val)}${suffix}`;
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target as HTMLElement;
                        animate(el);
                        io.unobserve(el);
                    }
                });
            },
            { rootMargin: "-10% 0px" }
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section className="flex flex-col mx-auto max-w-[1120px] max-sm:w-[85%] mt-40 gap-20 max-sm:mt-20 max-sm:gap-10">
            <h2 className="mask-bottom-fade font-medium text-5xl text-white">
                Our Impact<br />in Numbers
            </h2>

            <div className="mt-14 grid gap-10 sm:grid-cols-3 max-sm:grid-cols-2 max-sm:mt-10">
                {/* +30 */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-5xl font-semibold text-white max-sm:text-2xl">
                        <div className="flex items-center justify-center bg-gradient-icon w-10 h-10 border border-[#FFFFFF66] rounded-lg">
                            <Image src={'/assets/icons/Chart.png'} alt="Chart" width={32} height={32} className="max-sm:w-[22px] max-sm:h-[22px]" />
                        </div>
                        <span data-count-to="30" data-prefix="+" aria-label="+30">+0</span>
                    </div>
                    <p className="text-zinc-400 max-sm:text-sm">campaigns executed across 10+ regions</p>
                </div>

                {/* +500 */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-5xl font-semibold text-white max-sm:text-2xl">
                        <div className="flex items-center justify-center bg-gradient-icon w-10 h-10 border border-[#FFFFFF66] rounded-lg">
                            <Image src={'/assets/icons/Star.png'} alt="Cursor" width={32} height={32} className="max-sm:w-[22px] max-sm:h-[22px]" />
                        </div>
                        <span data-count-to="500" data-prefix="+" aria-label="+500">+0</span>
                    </div>
                    <p className="text-zinc-400 max-sm:text-sm">KOL connections activated</p>
                </div>

                {/* +5B */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-5xl font-semibold text-white max-sm:text-2xl">
                        <div className="flex items-center justify-center bg-gradient-icon w-10 h-10 border border-[#FFFFFF66] rounded-lg">
                            <Image src={'/assets/icons/Gauge.png'} alt="Gauge" width={32} height={32} className="max-sm:w-[22px] max-sm:h-[22px]" />
                        </div>
                        <span data-count-to="5000000000" data-prefix="+" data-notation="compact" aria-label="+5B">+0</span>
                    </div>
                    <p className="text-zinc-400 max-sm:text-sm">Dollars Monthly Trading Volume</p>
                </div>

                {/* +2M */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-5xl font-semibold text-white max-sm:text-2xl">
                        <div className="flex items-center justify-center bg-gradient-icon w-10 h-10 border border-[#FFFFFF66] rounded-lg">
                            <Image src={'/assets/icons/Cursor.png'} alt="Cursor" width={32} height={32} className="max-sm:w-[22px] max-sm:h-[22px]" />
                        </div>
                        <span data-count-to="2000000" data-prefix="+" data-notation="compact" aria-label="+2M">+0</span>
                    </div>
                    <p className="text-zinc-400 max-sm:text-sm">organic impressions generated monthly</p>
                </div>

                {/* +85M */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-5xl font-semibold text-white max-sm:text-2xl">
                        <div className="flex items-center justify-center bg-gradient-icon w-10 h-10 border border-[#FFFFFF66] rounded-lg">
                            <Image src={'/assets/icons/Target.png'} alt="Target" width={32} height={32} className="max-sm:w-[22px] max-sm:h-[22px]" />
                        </div>
                        <span data-count-to="85000000" data-prefix="+" data-notation="compact" aria-label="+85M">+0</span>
                    </div>
                    <p className="text-zinc-400 max-sm:text-sm">in cumulative client ROI</p>
                </div>

                {/* +20 */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-5xl font-semibold text-white max-sm:text-2xl">
                        <div className="flex items-center justify-center bg-gradient-icon w-10 h-10 border border-[#FFFFFF66] rounded-lg">
                            <Image src={'/assets/icons/Wand.png'} alt="Wand" width={32} height={32} className="max-sm:w-[22px] max-sm:h-[22px]" />
                        </div>
                        <span data-count-to="20" data-prefix="+" aria-label="+20">+0</span>
                    </div>
                    <p className="text-zinc-400 max-sm:text-sm">Business Development Managers</p>
                </div>
            </div>
        </section>
    );
}