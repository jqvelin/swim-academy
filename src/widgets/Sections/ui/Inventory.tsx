"use client";

import { Link } from "@/shared/components";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const Inventory = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    return (
        <section
            className="col-aligned h-[700px] w-section-mobile justify-between overflow-hidden rounded-xl border-2 border-cyan-neon bg-transparent pt-[5rem] text-center transition-all duration-500 hover:scale-[1.01] hover:[box-shadow:0_0_5px_0_hsl(var(--cyan-neon))] md:h-[1000px] md:w-section-regular"
            ref={ref}
        >
            <div className="w-[70%]">
                <h1
                    className={`mb-8 text-xl font-bold opacity-0 md:text-3xl lg:text-5xl ${inView && "animate-pop-up"}`}
                >
                    Широкий выбор{" "}
                    <span className="text-glowing">инвентаря</span>
                    <br />
                    всех типов и размеров
                </h1>
                <p
                    className={`opacity-0 delay-500 ${inView && "animate-pop-up"} mb-4 font-bold leading-6 md:leading-9`}
                >
                    Всё, что нужно для эффективных и удобных занятий
                </p>
            </div>
            <Image
                src="/inventory.avif"
                height={0}
                width={0}
                sizes="100vw"
                className="z-0 h-[40%] w-full object-cover md:h-[50%] lg:h-[60%]"
                alt="Плавательный инвентарь"
            />
        </section>
    );
};
