import { Link } from "@/6_shared/components";

export const Outro = () => {
    return (
        <section className="relative border-cyan-dark border-y-4 w-full pb-2 pt-2 text-center">
            <h3 className="relative z-50 mb-16 text-xl font-bold">
                Школа Swim Academy - это выбор будущих чемпионов!
            </h3>
            <Link
                href="/sign-up"
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
