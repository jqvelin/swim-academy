"use client";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/shared/components/ui/Chart";
import { Pie, PieChart } from "recharts";

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" }
];

const chartConfig = {
    visitors: {
        label: "Visitors"
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))"
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))"
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))"
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))"
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))"
    }
} satisfies ChartConfig;

export const ApplicationsPieChart = () => {
    return (
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
                    dataKey="visitors"
                    nameKey="browser"
                />
            </PieChart>
        </ChartContainer>
    );
};
