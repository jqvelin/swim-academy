"use client";
import Image from "next/image";
import { Link } from "@/shared/components";
import { useSession } from "next-auth/react";
import { ProfileThumbnail } from "@/features/SignIn";
import { useIsHeaderStuck } from "../model/useIsHeaderStuck";

export const Header = () => {
    const session = useSession();
    const isUserSignedIn = session?.status === "authenticated";
    const isHeaderStuck = useIsHeaderStuck();
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
                    className="h-auto -translate-x-4 bg-transparent text-start hover:bg-transparent"
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
                    {isUserSignedIn && (
                        <ProfileThumbnail sessionData={session.data} />
                    )}
                    <Link
                        href={isUserSignedIn ? "/application" : "/sign-in"}
                        className="hidden md:flex"
                    >
                        Записаться на тренировку
                    </Link>
                    <Link
                        href={isUserSignedIn ? "/application" : "/sign-in"}
                        className="flex md:hidden"
                    >
                        Записаться
                    </Link>
                </div>
            </header>
        </>
    );
};
