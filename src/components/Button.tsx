"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type { Ref } from "react";
import Image from "next/image";

type CommonProps = {
    children: React.ReactNode;
    className?: string;
    /** shows spinner + blocks interaction */
    loading?: boolean;
};

type ButtonAsButton = CommonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined; // no href -> render <button>
    };

type ButtonAsLink = CommonProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
        href: string; // href -> render <Link>
    };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function Spinner() {
    return (
        <svg
            className="size-4 animate-spin"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
            />
            <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                fill="currentColor"
            />
        </svg>
    );
}

/** shared base classes */
const base =
    [
        "relative inline-flex items-center justify-center backdrop-blur-sm",
        "px-6 h-12 text-base font-medium rounded-[5px]",
        "transition active:translate-y-px",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] cursor-pointer",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "shadow-[4px_-4px_25px_4px_rgba(255,255,255,0.66)]",
        "max-sm:h-8 max-sm:text-xs"
    ].join(" ");

const primary =
    [
        // solid fallback + gradient image token from globals.css
        "text-white bg-[--brand-600] bg-gradient-primary",
        // outer glow on the element (won’t be clipped)
        "shadow-[0_12px_36px_rgba(61,126,255,0.45),0_6px_18px_rgba(0,0,0,0.25)]",
        "hover:brightness-110",
    ].join(" ");

function PrimaryLayers() {
    return (
        <>
            {/* Decorative sparkles beneath text */}
            <Image
                src="/assets/Sparkles.png"
                alt=""
                width={412}
                height={248}
                priority={false}
                className="absolute object-cover mix-blend-screen z-10 pointer-events-none"
                aria-hidden
            />
            {/* inner 1px stroke */}
            <span
                className="absolute inset-0 z-20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)] rounded-[5px]"
            />
            {/* top glossy sheen */}
            <span
                className="absolute inset-0 z-20 bg-gradient-to-b from-white/30 via-white/10 to-transparent mix-blend-overlay rounded-[5px]"
            />
        </>
    );
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    function Button({ children, className, loading, ...props }, ref) {
        const classes = [base, primary, className].filter(Boolean).join(" ");

        const content = (
            <>
                {loading && <Spinner />}
                <span className="relative z-30">{children}</span>
            </>
        );

        // Link mode
        if ("href" in props && typeof props.href === "string") {
            const { href, ...rest } = props as ButtonAsLink;
            return (
                <Link
                    href={href}
                    className={[classes, loading ? "pointer-events-none" : ""].join(" ")}
                    aria-disabled={loading ? "true" : undefined}
                    ref={ref as Ref<HTMLAnchorElement>}
                    {...rest}
                >
                    <PrimaryLayers />
                    {content}
                </Link>
            );
        }

        // Button mode
        const btnProps = props as ButtonAsButton;
        return (
            <button
                ref={ref as Ref<HTMLButtonElement>}
                className={classes}
                disabled={loading || btnProps.disabled}
                {...btnProps}
            >
                <PrimaryLayers />
                {content}
            </button>
        );
    }
);