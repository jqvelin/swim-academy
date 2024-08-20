import { formatDate } from "@/shared/components";

import { Application } from "../application.types";

export const useGetApplicationsChartData = (data: Application[]) => {
    const fiveDayStats = [];
    const resolvedToUnresolved = [
        { status: "resolved", quantity: 0, fill: "hsl(var(--cyan-dark))" },
        { status: "unresolved", quantity: 0, fill: "hsl(var(--cyan-soft))" }
    ];

    for (let i = 0; i < data.length; i++) {
        const application = data[i];
        if (application.isResolved) {
            resolvedToUnresolved[0].quantity += 1;
        } else {
            resolvedToUnresolved[1].quantity += 1;
        }
    }

    for (let i = 4; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const formattedDate = formatDate(date);

        const applicationsQty = data.filter(
            (application) => application.preferred_date === formattedDate
        ).length;
        const statsObject = {
            day: `${formattedDate.split("-")[1]}.${formattedDate.split("-")[2]}`,
            applicationsQty
        };
        fiveDayStats.push(statsObject);
    }
    return {
        fiveDayStats,
        resolvedToUnresolved
    };
};
