"use client";
import Image from "next/image";
import { Link } from "@/6_shared/components";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isHeaderStuck, setIsHeaderStuck] = useState(false);
    useEffect(() => {
        if (window.scrollY >= 50) {
            setIsHeaderStuck(true);
        }

        window.addEventListener("scroll", checkHeaderState);

        function checkHeaderState() {
            if (window.scrollY >= 50) {
                setIsHeaderStuck(true);
            } else if (window.scrollY < 50) {
                setIsHeaderStuck(false);
            }
        }
    }, []);
    return (
        <>
            <div
                className={`fixed left-0 h-[var(--header-height)] ${isHeaderStuck ? "top-0" : "-top-full"} z-40 h-[] w-full duration-500 [-webkit-backdrop-filter:blur(5px)] [backdrop-filter:blur(5px)]`}
            ></div>
            <header
                className={`fixed left-[50%] h-[var(--header-height)] w-section-mobile md:w-section-regular ${isHeaderStuck ? "top-0" : "top-[5rem]"} row-aligned z-50 -translate-x-[50%] justify-between px-2 duration-500`}
            >
                <Link
                    href="/"
                    className="-translate-x-4 bg-transparent text-start hover:bg-transparent"
                >
                    <Image
                        src="/logo.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="-ml-3 aspect-square w-14 md:w-16"
                        alt="Logo"
                    />
                    <h1 className="text-sm font-bold uppercase md:text-lg">
                        swim
                        <br />
                        academy
                    </h1>
                </Link>
                <Link
                    href="sign-in"
                    className="hidden md:flex"
                >
                    Записаться на тренировку
                </Link>
                <Link
                    href="sign-in"
                    className="flex md:hidden"
                >
                    Тренироваться
                </Link>
            </header>
        </>
    );
};
