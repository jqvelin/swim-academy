"use client";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <NextTopLoader
                color="hsl(var(--cyan-neon))"
                showSpinner={false}
            />
            <SessionProvider>{children}</SessionProvider>
        </>
    );
};
