"use client";

import { Link } from "@/shared/components";
import { paths } from "@/shared/routing";
import {
    AttendersAreaChart,
    AttendersAreaChartStacked,
    AttendersPieChart
} from "@/widgets/Charts";
import { Header } from "@/widgets/Header";

export const ReportPage = () => {
    return (
        <div className="col-aligned py-[var(--header-height)]">
            <Header />
            <main className="col-aligned w-full py-8">
                <h1 className="mb-8 animate-pop-up text-center text-4xl font-bold">
                    Swim Academy <br className="md:hidden" /> Rewind 2023
                </h1>
                <div className="col-aligned gap-20">
                    <div className="flex flex-col items-center gap-12 md:flex-row">
                        <div className="col-aligned">
                            <AttendersPieChart />
                            <span>Обучались в нашей школе в 2023</span>
                        </div>
                        <div className="col-aligned text-center">
                            <AttendersAreaChart />
                            <span className="max-w-[300px]">
                                Статистика посещений бассейнов Swim Academy в
                                Москве и области по месяцам
                            </span>
                        </div>
                    </div>
                    <div className="col-aligned w-full text-center">
                        <AttendersAreaChartStacked />
                        <span>
                            Средняя оценка школы по Москве и всей России
                        </span>
                    </div>
                    <p className="max-w-[800px] text-center">
                        За 2023-й год мы научили более 3000 человек
                        профессиональному плаванию.
                        <br />
                        Сотни из них до посещения Swim Academy испытывали боязнь
                        воды, но с помощью наших тренеров смогли перебороть
                        страхи.
                        <br />
                        Впереди еще больше интересного - начните обучаться прямо
                        сейчас и убедитесь в этом сами!
                    </p>
                </div>
            </main>
            <Link href={paths.root}>На главную</Link>
        </div>
    );
};
