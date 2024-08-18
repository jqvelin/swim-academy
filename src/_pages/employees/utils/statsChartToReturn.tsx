import {
    ApplicationsLineChart,
    ApplicationsPieChart
} from "@/entities/Application";

export const statsChatToReturn = (searchParams: { [key: string]: string }) => {
    switch (searchParams.type) {
        case "ratio": {
            return <ApplicationsPieChart />;
        }
        default: {
            return <ApplicationsLineChart />;
        }
    }
};
