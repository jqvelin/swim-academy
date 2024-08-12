"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/shared/components/ui/Chart";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

const chartData = [
    { status: "completed", attenders: 4986, fill: "var(--color-completed)" },
    { status: "current", attenders: 1161, fill: "var(--color-current)" }
];
const chartConfig = {
    completed: {
        label: "Прошли обучение",
        color: "hsl(var(--cyan-dark))"
    },
    current: {
        label: "Учатся",
        color: "hsl(var(--cyan-soft))"
    }
} satisfies ChartConfig;
export const AttendersPieChart = () => {
    const totalVisitors = chartData.reduce(
        (acc, cur) => (acc += cur.attenders),
        0
    );
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[250px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="attenders"
                    nameKey="status"
                    innerRadius={60}
                    strokeWidth={5}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-primary text-3xl font-bold"
                                        >
                                            {totalVisitors.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-primary"
                                        >
                                            Учеников
                                        </tspan>
                                    </text>
                                );
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    );
};
