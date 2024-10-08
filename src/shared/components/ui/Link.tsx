import NextLink from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { LinkProps } from "../model/linkProps.types";

export const Link: FC<LinkProps> = ({ href, className, scroll, children }) => {
    return (
        <NextLink
            href={href}
            className={twMerge(
                "inline-flex h-[40px] items-center justify-center rounded-full bg-cyan-soft px-4 transition-colors hover:bg-cyan-dark",
                className
            )}
            scroll={scroll ?? true}
        >
            {children}
        </NextLink>
    );
};
