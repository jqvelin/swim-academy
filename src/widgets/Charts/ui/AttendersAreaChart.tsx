"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/shared/components/ui/Chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
    { month: "January", attenders: 86 },
    { month: "February", attenders: 55 },
    { month: "March", attenders: 117 },
    { month: "April", attenders: 83 },
    { month: "May", attenders: 109 },
    { month: "June", attenders: 156 },
    { month: "July", attenders: 214 },
    { month: "August", attenders: 196 },
    { month: "September", attenders: 167 },
    { month: "October", attenders: 172 },
    { month: "November", attenders: 129 },
    { month: "December", attenders: 120 }
];

const chartConfig = {
    attenders: {
        label: "Учеников",
        color: "hsl(var(--cyan-neon))"
    }
} satisfies ChartConfig;

export const AttendersAreaChart = () => {
    return (
        <ChartContainer
            config={chartConfig}
            className="h-[200px] -translate-x-6 md:h-[250px]"
        >
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickCount={5}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                    dataKey="attenders"
                    type="natural"
                    fill="var(--color-attenders)"
                    fillOpacity={0.4}
                    stroke="var(--color-attenders)"
                />
            </AreaChart>
        </ChartContainer>
    );
};
