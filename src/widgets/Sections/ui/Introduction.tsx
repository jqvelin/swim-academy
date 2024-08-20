import { Link } from "@/shared/components";
import { paths } from "@/shared/routing";
import Image from "next/image";

export const Introduction = () => {
    return (
        <section className="relative h-section-mobile w-section-mobile overflow-hidden rounded-xl border-2 border-cyan-neon bg-transparent pt-[5rem] transition-all duration-500 hover:scale-[1.01] hover:[box-shadow:0_0_5px_0_hsl(var(--cyan-neon))] md:h-section-regular md:w-section-regular">
            <div className="absolute right-2 z-10 w-[70%] text-end md:w-[60%]">
                <h1 className="mb-8 text-xl font-bold md:text-3xl lg:text-5xl">
                    Самая <span className="text-glowing">прогрессивная</span>{" "}
                    школа плавания
                    <br />
                    №1 в Москве
                </h1>
                <p className="mb-4 font-bold leading-6 delay-500 md:leading-9">
                    Наши ученики показывают самые высокие результаты в личном
                    зачёте и международных соревнованиях.
                    <br />
                    ~30% наших выпускников ежегодно призываются в сборную
                </p>
                <Link href={paths.report}>Смотреть отчёт за 2023г.</Link>
            </div>
            <Image
                src="/swimmer.png"
                height={0}
                width={1400}
                alt="Пловец"
                className="absolute -bottom-[5%] left-0 md:-bottom-[10%]"
            />
        </section>
    );
};
