"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/6_shared/components/ui/Chart"
const chartData = [
  { month: "January", moscow: 85, russia: 84 },
  { month: "February", moscow: 85, russia: 84 },
  { month: "March", moscow: 87, russia: 89 },
  { month: "April", moscow: 87, russia: 90 },
  { month: "May", moscow: 88, russia: 90 },
  { month: "June", moscow: 89, russia: 91 },
  { month: "July", moscow: 88, russia: 91 },
  { month: "August", moscow: 89, russia: 91 },
  { month: "September", moscow: 89, russia: 90 },
  { month: "October", moscow: 91, russia: 92 },
  { month: "November", moscow: 91, russia: 90 },
  { month: "December", moscow: 93, russia: 91 },
]

const chartConfig = {
  moscow: {
    label: "Оценка по Москве",
    color: "hsl(var(--cyan-neon))",
  },
  russia: {
    label: "Оценка по России",
    color: "hsl(var(--cyan-dark))",
  },
} satisfies ChartConfig

export const AttendersAreaChartStacked = () => {
  return (
        <ChartContainer config={chartConfig} className="w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="moscow"
              type="natural"
              fill="var(--color-moscow)"
              fillOpacity={0.4}
              stroke="var(--color-moscow)"
              stackId="a"
            />
            <Area
              dataKey="russia"
              type="natural"
              fill="var(--color-russia)"
              fillOpacity={0.4}
              stroke="var(--color-russia)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
  )
}
