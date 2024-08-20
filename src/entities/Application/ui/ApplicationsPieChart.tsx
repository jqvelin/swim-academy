"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/shared/components/ui/Chart";
import { useMemo } from "react";
import { Pie, PieChart } from "recharts";

import { useGetApplicationsChartData } from "../model/hooks/useGetApplicationsChartData";
import { useGetAllApplications } from "../model/query-hooks/useGetAllApplications";

const chartConfig = {
    resolved: {
        label: "Обработано",
        color: "hsl(var(--cyan-soft))"
    },
    unresolved: {
        label: "Необработано",
        color: "hsl(var(--blue-dark))"
    }
} satisfies ChartConfig;

export const ApplicationsPieChart = () => {
    const { data } = useGetAllApplications();
    const { resolvedToUnresolved: chartData } = useMemo(
        () => useGetApplicationsChartData(data ?? []),
        [data]
    );

    const resolvedApplicationsPercentage = useMemo(() => {
        const total = data?.length;
        if (!total) return 0;
        const resolved = chartData[0].quantity;

        return Math.round((resolved / total) * 100);
    }, [chartData]);
    return (
        <>
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square h-[300px] md:h-[350px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="quantity"
                        nameKey="status"
                    />
                </PieChart>
            </ChartContainer>
            <div className="text-center">
                <p>
                    Обработанных заявок:{" "}
                    <b>{resolvedApplicationsPercentage}%</b>, необработанных:{" "}
                    <b>{100 - resolvedApplicationsPercentage}%</b>
                </p>
                <p>
                    Всего: <b>{data?.length}</b>
                </p>
            </div>
        </>
    );
};
