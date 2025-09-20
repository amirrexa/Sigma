import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import Image from "next/image"

export const LetsBuild = () => {
    return (
        <section className="mt-40 max-sm:mt-2 max-w-[1120px] max-sm:w-[85%] mx-auto flex flex-col items-center text-center">
            <div className="relative w-full">

                <Image src={"/assets/GlowRing.png"} alt="GlowRing" width={1728} height={645} className="w-[full]" />

                <div className="flex flex-col gap-6 max-sm:gap-4 items-center absolute left-1/2 top-6/7 max-sm:top-40 -translate-x-1/2 -translate-y-1/2 w-full">
                    <h2 className="mask-bottom-fade font-medium text-5xl text-white max-sm:text-2xl">
                        Let&apos;s Build<br />Something Amazing Together
                    </h2>
                    <p className="text-zinc-400 w-full md:w-1/2 max-sm:text-[10px] max-sm:w-full">
                        We&apos;re a collective of Web3-native professionals, growth hackers,
                        and regional connectors who live and breathe crypto.
                    </p>
                </div>
            </div>

            <section className="mt-30 w-full max-sm:mt-20 rounded-lg p-16 max-sm:py-6 max-sm:px-4 border border-[#FFFFFF3D] text-left">
                <div className="grid gap-6 md:grid-cols-2">
                    <Input label="Your Name" placeholder="James Austin" />
                    <Input label="Email Address" type="email" placeholder="jamesaustin@example.com" />
                </div>
                <div className="mt-8 space-y-8 max-sm:space-y-4">
                    <Input label="Telegram Username" prefix="@" placeholder="jamesaustin" />
                    <Input label="Subject" placeholder="How can we help?" />
                    <Input label="What is your project name?" placeholder="Algorand, Mantle..." />
                    <Input label="What is your project's current stage?" placeholder="Idea, MVP..." />
                    <Input label="Your website" placeholder="Your website address" />
                    <Input label="Additional details" placeholder="@jamesaustin" />
                </div>
                <div className="mt-10 flex justify-center">
                    <Button>Send Message</Button>
                </div>
            </section>
        </section>
    )
}