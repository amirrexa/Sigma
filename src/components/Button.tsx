"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type { Ref } from "react";
import Image from 'next/image'

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


export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    function Button({ children, className, loading, ...props }, ref) {
        const isLink = "href" in props && typeof (props as ButtonAsLink).href === "string";
        const Comp: any = isLink ? Link : "button";

        // Extract mode-specific props while keeping a single return
        const linkProps = isLink
            ? {
                href: (props as ButtonAsLink).href,
                "aria-disabled": loading ? "true" : undefined,
            }
            : {};

        const buttonProps = !isLink
            ? {
                disabled: loading || (props as ButtonAsButton).disabled,
                type:
                    ((props as React.ButtonHTMLAttributes<HTMLButtonElement>).type as React.ButtonHTMLAttributes<HTMLButtonElement>["type"]) ??
                    "button",
            }
            : {};

        // Remove props that shouldn't be spread to avoid duplicate attributes
        const rest: Record<string, unknown> = { ...(props as Record<string, unknown>) };
        if (isLink) {
            delete (rest as any).href;
        } else {
            delete (rest as any).disabled;
            delete (rest as any).type;
        }

        return (
            <span className={`relative ${className ?? ""}`}>
                {/* <Image
                    width={1174}
                    height={1010}
                    src="/assets/ButtonTopGlow.png"
                    alt=""
                    aria-hidden
                    draggable={false}
                    className="pointer-events-none select-none absolute left-1/2 top-1/12 -translate-x-1/2 -translate-y-1/2 max-w-none w-[450%] h-auto z-0"
                /> */}
                <Comp
                    ref={ref as Ref<HTMLAnchorElement & HTMLButtonElement>}
                    className={`relative z-10 inline-flex overflow-visible items-center justify-center backdrop-blur-sm px-6 h-12 text-base font-medium rounded-[5px] transition active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed max-sm:h-8 max-sm:text-xs text-white bg-[--brand-600] bg-gradient-primary hover:brightness-110 ${loading ? "pointer-events-none" : ""}`}
                    role={isLink ? "button" : undefined}
                    {...rest}
                    {...linkProps}
                    {...buttonProps}
                >
                    {loading && <Spinner />}
                    <span className="relative z-30">{children}</span>
                </Comp>
            </span>
        );
    }
);