// src/components/Navbar.tsx
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "#partners", pre: "0.1", label: "Partners" },
    { href: "#portfolio", pre: "0.2", label: "Portfolio" },
    { href: "#team", pre: "0.3", label: "Team" },
    { href: "#services", pre: "0.4", label: "Services" },
    { href: "#contact", pre: "0.5", label: "Contact" },
    { href: "#newsletter", pre: "0.6", label: "Newsletter" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 inset-x-0 z-50 bg-transparent max-sm:pt-6 max-sm:px-6">
            <nav className="w-full flex items-center justify-between px-6 py-4 max-sm:p-2 max-sm:bg-navbar-blur max-sm:backdrop-blur-md max-sm:backdrop-saturate-150 max-sm:border max-sm:border-white/20 max-sm:gap-10 rounded-full max-sm:h-12 max-sm:rounded-[12px]">
                <Link href="/" className="text-xl font-bold">
                    <Image src="/Logo.png" width={120} height={40} alt="Sigma" />
                </Link>

                <ul className="max-sm:hidden min-w-1/2 h-12 flex items-center justify-between px-6 bg-navbar-blur backdrop-blur-md backdrop-saturate-150 border border-white/20 gap-10 text-sm text-white/80 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-white hover:opacity-80 flex gap-2 items-center font-medium">
                                <span className="opacity-25">{link.pre}</span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Button>
                    Launch Your Project
                </Button>
            </nav>
        </header>
    );
}