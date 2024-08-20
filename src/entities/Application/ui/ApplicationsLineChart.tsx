"use client";

import { formatDate } from "@/shared/components";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/shared/components/ui/Chart";
import { useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { useGetApplicationsChartData } from "../model/hooks/useGetApplicationsChartData";
import { useGetAllApplications } from "../model/query-hooks/useGetAllApplications";

const chartConfig = {
    applicationsQty: {
        label: "Заявок"
    }
} satisfies ChartConfig;

export const ApplicationsLineChart = () => {
    const { data } = useGetAllApplications();
    const { fiveDayStats: chartData } = useGetApplicationsChartData(data ?? [])
    const mostBusyDay = useMemo(() => {
        let date = formatDate(new Date());
        let applicationsQty = 0;

        for (let i = 0; i < chartData.length; i++) {
            if (
                chartData[i].applicationsQty > chartData[i - 1]?.applicationsQty
            ) {
                date = chartData[i].day;
                applicationsQty = chartData[i].applicationsQty;
            }
        }
        return {
            date,
            applicationsQty
        };
    }, [chartData]);
    return (
        <>
            <ChartContainer
                config={chartConfig}
                className="w-[90vw] h-auto max-w-[300px] md:max-w-[500px]"
            >
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        tickFormatter={(value) => value.slice(0, 5)}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        tickCount={2}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                        dataKey="applicationsQty"
                        type="linear"
                        stroke="hsl(var(--cyan-neon))"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>
            {mostBusyDay.applicationsQty > 0 && (
                <div className="text-center">
                    <p>
                        Самый загруженный день: <b>{mostBusyDay.date}</b>
                    </p>
                    <p>
                        Заявок на этот день:{" "}
                        <b>{mostBusyDay.applicationsQty}</b>
                    </p>
                </div>
            )}
        </>
    );
};
