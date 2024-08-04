import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./_providers/Providers";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata: Metadata = {
    title: "Школа плавания Swim Academy",
    description:
        "Школа плавания для начинающих и опытных пловцов. Более 100 бассейнов по всей стране. Опытные тренеры, с которыми интересно и полезно заниматься. Широкий выбор спортивного инвентаря. Начните тренировку уже сегодня!",
    icons: "/logo.png"
};

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: ReactNode;
    modal: ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={
                    montserrat.className +
                    " " +
                    "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue to-blue-dark text-primary [background-color:hsl(var(--blue))]"
                }
            >
                <Providers>
                    {children}
                    {modal}
                </Providers>
            </body>
        </html>
    );
}
