import { Button } from "@/components/Button"
import Image from "next/image"

export const ReadyToTransform = () => {
    return (
        <section className="mt-40 max-sm:mt-20 flex flex-col items-center">
            <h2 className="mask-bottom-fade font-medium text-5xl max-sm:text-2xl text-white max-sm:w-[85%] max-sm:text-center">
                Ready to Transform<br />Your Web3 Project?
            </h2>
            <p className="text-zinc-400 mt-6 max-sm:mt-4 w-1/3 text-center max-sm:w-[85%] max-sm:text-[10px]">A diverse team of experts dedicated to revolutionizing Web3 marketing through innovation and strategic excellence</p>
            <Image width={2164} height={351} src={'/assets/ReadyToTransform.png'} alt="ReadyToTransform" className="-mt-6 object-contain" />
            <Button className="max-sm:mt-4">Get Started →</Button>
        </section>
    )
}