"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { ReactNode, useState } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(new QueryClient());
    return (
        <>
            <NextTopLoader
                color="hsl(var(--cyan-neon))"
                showSpinner={false}
            />
            <SessionProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </SessionProvider>
        </>
    );
};
