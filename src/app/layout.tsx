import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Школа плавания Swim Academy",
    description:
        "Школа плавания для начинающих и опытных пловцов. Более 100 бассейнов по всей стране. Опытные тренеры, с которыми интересно и полезно заниматься. Широкий выбор спортивного инвентаря. Начните тренировку уже сегодня!",
    icons: "/logo.png"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
