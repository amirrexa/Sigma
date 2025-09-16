"use client";
import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const PeopleBehindSigma = () => {
    const people = [
        {
            name: "Omid Modabber",
            role: "Creator of Σ Sigma Team",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/OmidModabber.png"
        },
        {
            name: "Hossein Rostami",
            role: "Strategic Partnerships",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/MateoMeh.png"
        },
        {
            name: "Hayyan Modirrousta",
            role: "Business Development",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/HayyanModirrousta.png"
        },
        {
            name: "Mahdiyar Mehmandoust",
            role: "Communication Manager",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/MahdiyarMehmandoust.png"
        },
        {
            name: "Ashkan Nobakht",
            role: "Web3 Growth Strategist",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/OmidModabber.png"
        },
        {
            name: "Novin Ghasemi",
            role: "KOL & Influencer Relations",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/NovinGhasemi.png"
        },
        {
            name: "Shayan Ghanbari",
            role: "Marketing Manager",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/ShayanGhanbari.png"
        },
        {
            name: "Satoshi Nakamoto",
            role: "Simple Member in Sigma",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/SatoshiNakamoto.png"
        },
        {
            name: "Mateo Meh",
            role: "Digital Marketing Director",
            socials: {
                linkedIn: "https://www.linkedin.com/in/omidmodabber/",
                discord: "https://discord.com/users/omidmodabber#1234",
                telegram: "https://t.me/omidmodabber"
            },
            imageUrl: "/assets/people/MateoMeh.png"
        },
    ]

    return (
        <section className="flex flex-col gap-20 mt-40 max-sm:mt-20 max-w-[1120px] mx-auto">
            <div className="flex flex-col gap-6 items-center max-sm:gap-0">
                <h2 className="mask-bottom-fade font-medium text-5xl max-sm:text-2xl max-sm:text-center text-white max-sm:w-[85%]">
                    People Behind Sigma
                </h2>
                <p className="text-zinc-400 mt-2 max-sm:mt-4 max-sm:text-[10px] w-1/3 text-center max-sm:w-[85%]">We're a collective of Web3-native professionals, growth hackers,
                    and regional connectors who live and breathe crypto.</p>

                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-5 max-sm:hidden">
                    {people.map((person, index) => (
                        <div className="flex flex-col w-[204px] h-[315px]" key={index}>
                            <div className="w-[204px] h-[204px] relative rounded-sm overflow-hidden">
                                <div className="w-full h-full bg-gradient-card z-5 absolute" />
                                <Image src={"/assets/GridPattern2.png"} width={204} height={204} alt="GridPattern" className="absolute z-10 pointer-events-none " />
                                <Image src={person.imageUrl} width={144} height={164} alt="Person" className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none mix-blend-luminosity" />
                            </div>
                            <div className="flex flex-col w-full h-[111px]">
                                <span className="font-normal mt-6 text-white">{person.name}</span>
                                <span className="font-normal mt-2 text-zinc-400">{person.role}</span>
                                <div className="flex gap-4 mt-auto">
                                    <Link href={person.socials.linkedIn}>
                                        <Image width={20} height={20} src={"/assets/icons/LinkedIn.png"} alt="LinkedIn" />
                                    </Link>
                                    <Link href={person.socials.discord}>
                                        <Image width={20} height={20} src={"/assets/icons/Discord.png"} alt="Discord" />
                                    </Link>

                                    <Link href={person.socials.telegram}>
                                        <Image width={20} height={20} src={"/assets/icons/Telegram.png"} alt="Telegram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    <Image src={"/assets/TeamMembers.png"} width={204} height={315} alt="TeamMembers" className="pointer-events-none" />
                </div>
                {/* Mobile carousel */}
                <div className="sm:hidden w-full relative mt-6">
                    {/* Floating navigation buttons (customizable styles) */}
                    <button
                        className="hidden people-prev absolute left-2 top-1/2 -translate-y-1/2 z-30 rounded-full p-2 bg-black/40 backdrop-blur border border-white/20"
                        aria-label="Previous"
                        type="button"
                    >
                        {/* Simple chevron; replace with your own icon later */}
                        <span className="block w-3 h-3 rotate-180 border-t border-l border-white/80"></span>
                    </button>
                    <button
                        className="hidden people-next absolute right-2 top-1/2 -translate-y-1/2 z-30 rounded-full p-2 bg-black/40 backdrop-blur border border-white/20"
                        aria-label="Next"
                        type="button"
                    >
                        <span className="block w-3 h-3 border-t border-l border-white/80"></span>
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        centeredSlides
                        spaceBetween={16}
                        navigation={{ prevEl: ".people-prev", nextEl: ".people-next" }}
                        watchOverflow
                        roundLengths
                        slidesPerView={2.2}
                        loop
                        centeredSlidesBounds
                        grabCursor
                        className="w-full"
                    >
                        {people.map((person, index) => (
                            <SwiperSlide key={index}>
                                <div className="mx-auto flex flex-col w-[204px] h-[315px] max-sm:h-[254px] max-sm:w-[140px]">
                                    <div className="w-[204px] h-[204px] max-sm:w-[140px] max-sm:h-[155px] relative rounded-sm overflow-hidden">
                                        <div className="w-full h-full bg-gradient-card z-5 absolute" />
                                        <Image src={"/assets/GridPattern2.png"} width={204} height={204} alt="GridPattern" className="absolute z-10 pointer-events-none max-sm:h-full " />
                                        <Image src={person.imageUrl} width={144} height={164} alt="Person" className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none mix-blend-luminosity max-sm:w-[122px] max-sm:w-[132px]" />
                                    </div>
                                    <div className="flex flex-col w-full h-[111px] max-sm:w-[99px]">
                                        <span className="font-normal mt-6 text-white max-sm:text-sm max-sm:whitespace-nowrap">{person.name}</span>
                                        <span className="font-normal mt-2 text-zinc-400 max-sm:text-xs max-sm:whitespace-nowrap">{person.role}</span>
                                        <div className="flex gap-4 mt-auto">
                                            <Link href={person.socials.linkedIn}>
                                                <Image width={20} height={20} src={"/assets/icons/LinkedIn.png"} alt="LinkedIn" />
                                            </Link>
                                            <Link href={person.socials.discord}>
                                                <Image width={20} height={20} src={"/assets/icons/Discord.png"} alt="Discord" />
                                            </Link>
                                            <Link href={person.socials.telegram}>
                                                <Image width={20} height={20} src={"/assets/icons/Telegram.png"} alt="Telegram" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Extra slide for TeamMembers image to mirror desktop grid's trailing image */}
                        <SwiperSlide>
                            <div className="mx-auto w-[204px] h-[315px]">
                                <Image src={"/assets/TeamMembers.png"} width={204} height={315} alt="TeamMembers" className="pointer-events-none" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Button className="mt-20 max-sm:mt-14">Join Our Team →</Button>
            </div>
        </section>
    )
}