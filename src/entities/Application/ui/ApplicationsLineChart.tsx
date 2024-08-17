"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/shared/components/ui/Chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { useGetAllApplications } from "../model/query-hooks/useGetAllApplications";
import { useGetApplicationsChartData } from "../model/hooks/useGetApplicationsChartData";

/* const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 }
]; */

const chartConfig = {
    applicationsQty: {
        label: "Заявок",
        color: "hsl(var(--chart-1))"
    }
} satisfies ChartConfig;

export const ApplicationsLineChart = () => {
    const { data } = useGetAllApplications()
    const chartData = useGetApplicationsChartData(data ?? [])
    return (
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
    );
};
