import {
    ApplicationsLineChart,
    ApplicationsPieChart
} from "@/entities/Application";
import { Link } from "@/shared/components";

import { statsChatToReturn } from "../utils/statsChartToReturn";

export const StatsPage = ({
    searchParams
}: {
    searchParams: { [key: string]: string };
}) => {
    const chartToReturn = statsChatToReturn(searchParams);
    return (
        <main className="col-aligned w-11/12">
            <h2 className="text-2xl font-bold mb-8">
                Статистика по заявкам на обучение
            </h2>
            <div className="flex flex-col md:flex-row w-full">
                <aside className="mr-auto flex flex-row md:flex-col mb-4 gap-2">
                    <Link
                        href={`stats?type=overall`}
                        className={`bg-transparent hover:bg-transparent ${searchParams.type !== "byAgeAndGender" ? "border-white" : "border-cyan-dark"} border-2 rounded-sm row-aligned gap-1`}
                    >
                        Общая активность
                    </Link>
                    <Link
                        href={`stats?type=byAgeAndGender`}
                        className={`bg-transparent hover:bg-transparent ${searchParams.type === "byAgeAndGender" ? "border-white" : "border-cyan-dark"} border-2 rounded-sm row-aligned gap-1`}
                    >
                        Пол/возраст
                    </Link>
                </aside>
                <section className="mx-auto md:mr-auto md:mx-0">
                    {chartToReturn}
                </section>
            </div>
        </main>
    );
};
