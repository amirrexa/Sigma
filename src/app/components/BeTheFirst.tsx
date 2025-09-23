import Image from "next/image"

export const BeTheFirst = () => {
    return (
        <section className="mt-40 flex flex-col items-center justify-center relative border-t border-t-[#FFFFFF26] border-b border-b-[#FFFFFF26] h-[473px] max-sm:h-[299px]">
            <Image src={"/assets/BlueGlow.png"} alt="Grid" width={1100} height={473} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:top-0 max-sm:translate-y-0 w-full h-full" />

            <h2 className="mask-bottom-fade font-medium text-5xl text-white text-center max-sm:text-2xl leading-[100%]">
                Be the first to know<br />
                about our latest services!
            </h2>

            <div className="w-1/4 group box-border mt-6 max-sm:mt-10 max-sm:w-[85%] relative flex items-center gap-2 rounded-sm border border-[#292929] bg-transparent focus-within:ring-2 focus-within:ring-white/10 h-12">
                <input className="w-full bg-transparent outline-none placeholder:text-white/30 text-sm text-white px-4 rounded-sm" placeholder="Your email" />
                <button className="flex items-center justify-center bg-white m-1  h-[41px] max-sm:h-8 px-4 whitespace-nowrap font-medium text-sm rounded-[2px] max-sm:rounded-sm cursor-pointer">Join us</button>
            </div>

            <p className="mt-8 max-sm:mt-10 text-zinc-400 text-sm max-sm:text-[10px] font-normal max-sm:w-[85%] max-sm:text-center">Stay in the loop with updates, insights, and stories · Delivered straight to your inbox</p>
        </section>
    )
}