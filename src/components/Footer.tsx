import Image from "next/image"
import Link from "next/link"

const nav = {
    Product: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
    Company: ["About", "Blog", "Careers", "Press", "Contract"],
    Resources: ["Examples", "Community", "Guides", "Docs", "Press"],
    Legal: ["Privacy", "Terms", "Security"],
}

export const Footer = () => {
    return (
        <footer className="p-10 border-t border-[#FFFFFF26] flex justify-between mt-16 max-sm:mt-20 max-sm:flex-col max-sm:gap-16">
            <div className="flex flex-col md:items-start md:justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        alt="Sigma Logo"
                        src="/assets/LogoDark.png"
                        width={140}
                        height={40}
                        priority
                    />
                </Link>

                {/* Socials */}
                <div className="mt-10 flex items-center gap-6 max-sm:hidden">
                    <Link href="#" aria-label="Instagram">
                        <Image
                            alt="Instagram"
                            src="/assets/icons/InstagramDark.png"
                            width={24}
                            height={24}
                            className="bg-zinc-400"
                        />
                    </Link>
                    <Link href="#" aria-label="X">
                        <Image
                            alt="X"
                            src="/assets/icons/XDark.png"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="#" aria-label="YouTube">
                        <Image
                            alt="YouTube"
                            src="/assets/icons/YouTubeDark.png"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </div>
            {/* Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-sm:gap-y-10">
                {Object.entries(nav).map(([title, links]) => (
                    <div key={title}>
                        <h4 className="text-white text-[13px] font-medium mb-5">{title}</h4>
                        <ul className="space-y-3 text-zinc-400">
                            {links.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-white text-zinc-400 transition-colors max-sm:text-[13px]">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-6 sm:hidden">
                <Link href="#" aria-label="Instagram">
                    <Image
                        alt="Instagram"
                        src="/assets/icons/InstagramDark.png"
                        width={24}
                        height={24}
                        className="bg-zinc-400"
                    />
                </Link>
                <Link href="#" aria-label="X">
                    <Image
                        alt="X"
                        src="/assets/icons/XDark.png"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="#" aria-label="YouTube">
                    <Image
                        alt="YouTube"
                        src="/assets/icons/YouTubeDark.png"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
            <div />
        </footer>
    )
}