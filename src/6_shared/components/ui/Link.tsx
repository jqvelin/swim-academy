import NextLink from "next/link";
import { LinkProps } from "../model/linkProps.types";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Link: FC<LinkProps> = ({ href, className, scroll, children }) => {
    return (
        <NextLink
            href={href}
            className={twMerge(
                "inline-flex items-center rounded-full bg-[var(--cyan-soft)] px-4 py-2 text-primary transition-colors hover:bg-cyan-dark",
                className
            )}
            scroll={scroll ?? true}
        >
            {children}
        </NextLink>
    );
};
