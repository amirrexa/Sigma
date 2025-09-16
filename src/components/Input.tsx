// src/components/Input.tsx
"use client";

import { cn } from "@/lib/cn";
import { forwardRef, useId } from "react";

type InputBaseProps = {
    label?: string;
    hint?: string;
    error?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    id?: string;
    className?: string;
    inputClassName?: string;
    density?: "normal" | "dense";
};

export type InputProps = InputBaseProps &
    React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        label,
        hint,
        error,
        prefix,
        suffix,
        id,
        className,
        inputClassName,
        density = "normal",
        ...props
    },
    ref
) {
    const autoId = useId();
    const fieldId = id ?? `in-${autoId}`;
    const descId = hint || error ? `${fieldId}-desc` : undefined;

    const height = density === "dense" ? "h-11" : "h-12";

    return (
        <div className={cn("w-full", className)}>
            {label && (
                <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-white/75">
                    {label}
                </label>
            )}

            <div
                className={cn(
                    "group relative flex items-center gap-2",
                    "rounded-sm border bg-[#141414]",
                    "border-[#292929]",
                    "focus-within:ring-2 focus-within:ring-white/10",
                    height,
                    error && "ring-2 ring-red-500/40 border-red-500/30"
                )}
            >
                {prefix && <span className="pl-4 text-white/40">{prefix}</span>}

                <input
                    ref={ref}
                    id={fieldId}
                    aria-invalid={!!error}
                    aria-describedby={descId}
                    className={cn(
                        "w-full bg-transparent outline-none placeholder:text-white/30",
                        "text-sm text-white px-4",
                        "rounded-sm",
                        inputClassName
                    )}
                    {...props}
                />

                {suffix && <span className="pr-4 text-white/50">{suffix}</span>}
            </div>

            {hint && !error && (
                <p id={descId} className="mt-2 text-xs text-white/40">
                    {hint}
                </p>
            )}
            {error && (
                <p id={descId} className="mt-2 text-xs text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
});