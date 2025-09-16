import Image from "next/image"

export const Services = () => {
    return (
        <section className="mt-80 max-sm:mt-16 max-w-[1120px] mx-auto flex flex-col items-center max-sm:w-[85%]">
            <h2 className="mask-bottom-fade font-medium text-5xl text-white text-center max-sm:text-2xl">
                Services<br />& What We Do
            </h2>

            <div className="flex gap-[10px] max-sm:gap-4 w-full mt-8 max-sm:mt-10 max-sm:flex-col">
                <div className="flex flex-1 flex-col items-center max-sm:items-start justify-center border border-white/15 rounded-lg max-sm:p-4">
                    <Image src={"/assets/Ring.png"} width={265} height={205} alt="Ring" className="max-sm:w-[154px] max-sm:h-[120px]" />
                    <h3 className="text-white font-medium mt-10 max-sm:mt-6 max-sm:text-sm">KOL Management & Campaigns</h3>
                    <p className="mt-4 max-sm:mt-2 max-sm:text-xs font-normal text-zinc-400 text-center">End-to-end influencer marketing tailored to your goals.</p>
                </div>
                <div className="flex flex-2 bg-gradient-service relative">
                    <Image src={"/assets/Strategy.png"} width={744} height={400} alt="Strategy" className="w-full h-full pointer-events-none" />
                    <div className="absolute bottom-10 left-10 max-sm:bottom-4 max-sm:left-4 flex flex-col gap-4 max-w-1/2 max-sm:gap-2 max-sm:max-w-none">
                        <h3 className="font-medium text-white max-sm:text-sm">Marketing Strategy</h3>
                        <p className="font-normal text-zinc-400 max-sm:text-xs">From GTM plans to brand positioning in saturated markets.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse gap-[10px] max-sm:gap-4 w-full mt-8 max-sm:mt-4 max-sm:flex-col">
                <div className="flex flex-1 flex-col items-center max-sm:items-start max-sm:p-4 justify-center border border-white/15 rounded-lg">
                    <Image src={"/assets/Cone.png"} width={234} height={234} alt="Cone" className="max-sm:w-[120px] max-sm:h-[120px]" />
                    <h3 className="text-white font-medium mt-5 max-sm:mt-[10px] max-sm:text-sm">Community Activation</h3>
                    <p className="mt-4 max-sm:mt-2 max-sm:text-xs font-normal text-zinc-400 text-center max-sm:text-left">Multilingual community seeding, engagement, and moderation.</p>
                </div>
                <div className="flex flex-2 bg-gradient-service relative">
                    <Image src={"/assets/Growth.png"} width={744} height={400} alt="Strategy" className="w-full h-full pointer-events-none" />
                    <div className="absolute bottom-10 left-10 max-sm:bottom-4 max-sm:left-4 flex flex-col gap-4 max-w-1/2 max-sm:gap-2 max-sm:max-w-none">
                        <h3 className="font-medium text-white max-sm:text-sm">Exchange Growth Services</h3>
                        <p className="font-normal text-zinc-400 max-sm:text-xs">User acquisition, volume campaigns, and ambassador programs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}