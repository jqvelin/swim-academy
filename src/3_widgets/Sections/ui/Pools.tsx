"use client";
import { Link } from "@/6_shared/components";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const Pools = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <section
            className="col-aligned h-[700px] w-section-mobile items-center justify-between overflow-hidden rounded-xl border-2 border-cyan-neon bg-transparent pt-[5rem] text-center transition-all duration-500 hover:scale-[1.01] hover:[box-shadow:0_0_5px_0_hsl(var(--cyan-neon))] md:h-[1000px] md:w-section-regular"
            ref={ref}
        >
            <div className="w-[70%] gap-4">
                <h1
                    className={`mb-8 ${inView && "animate-pop-up"} text-xl font-bold opacity-0 md:text-3xl lg:text-5xl`}
                >
                    Более <span className="text-glowing">30</span> бассейнов
                    <br />
                    по городу и области
                </h1>
                <p
                    className={`mb-4 ${inView && "animate-pop-up"} font-bold leading-6 opacity-0 delay-500 md:leading-9`}
                >
                    Выберите наиболее доступный для Вас комплекс из
                    существующих, либо посмотрите, какие будут открыты в будущем
                </p>
                <Link
                    href="/map"
                    scroll={false}
                >
                    Увидеть на картах
                </Link>
            </div>
            <Image
                src="/swimming-pool.avif"
                height={0}
                width={0}
                sizes="100vw"
                className="z-0 h-[40%] w-full object-cover md:h-[50%] lg:h-[60%]"
                alt="Бассейн"
            />
        </section>
    );
};
