"use client";
import Image from "next/image";
import { Link } from "@/6_shared/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ProfileThumbnail } from "@/4_features/SignIn";

export const Header = () => {
    const session = useSession();
    const pathname = usePathname();
    const [isHeaderStuck, setIsHeaderStuck] = useState(false);
    useEffect(() => {
        if (window.scrollY >= 50 || pathname !== "/") {
            setIsHeaderStuck(true);
        }

        window.addEventListener("scroll", checkHeaderState);

        function checkHeaderState() {
            if (window.scrollY >= 50 || pathname !== "/") {
                setIsHeaderStuck(true);
            } else if (window.scrollY < 50) {
                setIsHeaderStuck(false);
            }
        }
    }, []);
    return (
        <>
            <div
                className={`fixed left-0 h-[var(--header-height)] ${isHeaderStuck ? "top-0" : "-top-full"} blurry z-40 h-[] w-full duration-500`}
            ></div>
            <header
                className={`fixed left-[50%] h-[var(--header-height)] w-section-mobile md:w-section-regular ${isHeaderStuck ? "top-0" : "top-[5rem]"} row-aligned z-50 -translate-x-[50%] justify-between px-2 duration-500`}
            >
                <Link
                    href="/"
                    className="-translate-x-4 h-auto bg-transparent text-start hover:bg-transparent"
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
                <div className="row-aligned gap-2">
                    {session?.status === "authenticated" && (
                        <ProfileThumbnail sessionData={session.data}/>
                    )}
                    <Link
                        href="/sign-in"
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
                </div>
            </header>
        </>
    );
};
