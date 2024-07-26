"use client";
import { Link } from "@/6_shared/components";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Inventory = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(observeSection, {
            threshold: 0.3
        });
        function observeSection(entries: IntersectionObserverEntry[]) {
            if (entries[0].isIntersecting) {
                setInView(true);
            }
        }
        observer.observe(sectionRef.current as HTMLElement);
        return () => observer.unobserve(sectionRef.current as HTMLElement);
    });
    return (
        <section
            className={`col-aligned h-[700px] w-section-mobile justify-between overflow-hidden rounded-xl border-2 border-cyan-neon bg-transparent pt-[5rem] text-center text-white md:h-[1000px] md:w-section-regular`}
            ref={sectionRef}
        >
            <div className="w-[70%]">
                <h1
                    className={`mb-8 text-xl font-bold opacity-0 md:text-3xl lg:text-5xl ${inView && "animate-pop-up"}`}
                >
                    Широкий выбор{" "}
                    <span className="[text-shadow:_0_0_6px_#FFFFFF]">
                        инвентаря
                    </span>
                    <br />
                    всех типов и размеров
                </h1>
                <p
                    className={`opacity-0 delay-500 ${inView && "animate-pop-up"} mb-4 font-bold leading-6 md:leading-9`}
                >
                    Всё, что нужно для эффективных и удобных занятий
                </p>
                <Link href="/catalog">Просмотреть каталог</Link>
            </div>
            <Image
                src="/inventory.avif"
                height={0}
                width={0}
                sizes="100vw"
                className="z-0 h-[40%] w-full object-cover md:h-[50%] lg:h-[60%]"
                alt="Swimmer"
            />
        </section>
    );
};
