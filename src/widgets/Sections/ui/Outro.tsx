import { Link } from "@/shared/components";

export const Outro = () => {
    return (
        <section className="relative w-full overflow-hidden pb-2 pt-2 text-center">
            <div className="absolute whitespace-nowrap">
                <div className="relative animate-running-line text-3xl font-bold text-blue">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
                <div className="relative animate-running-line-reverse text-3xl font-bold text-blue">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
                <div className="relative animate-running-line text-3xl font-bold text-blue [animation-duration:60s]">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
                <div className="relative animate-running-line-reverse text-3xl font-bold text-blue [animation-duration:65s]">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
                <div className="relative animate-running-line text-3xl font-bold text-blue [animation-duration:60s]">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
                <div className="relative animate-running-line-reverse text-3xl font-bold text-blue [animation-duration:60s]">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
                <div className="relative animate-running-line text-3xl font-bold text-blue [animation-duration:65s]">
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY
                    SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM ACADEMY SWIM
                    ACADEMY SWIM ACADEMY SWIM ACADEMY{" "}
                </div>
            </div>
            <h3 className="relative z-50 mb-16 text-xl font-bold">
                Школа Swim Academy - это выбор будущих чемпионов!
            </h3>
            <Link
                href="/application"
                className="relative z-50"
            >
                Присоединяйтесь к нам!
            </Link>
            <h3 className="relative z-50 mt-16 text-xl font-bold">
                Первое занятие - бесплатно
            </h3>
        </section>
    );
};
