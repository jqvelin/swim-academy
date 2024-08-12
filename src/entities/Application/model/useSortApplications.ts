import { useMemo } from "react";
import { Application } from "./application.types";

export const useSortApplications = (data: Application[]) => {
    return useMemo(() => {
        return data?.sort((a, b) => {
            if (a.isResolved === b.isResolved) {
                return a.preferred_date > b.preferred_date
                    ? 1
                    : a.preferred_date < b.preferred_date
                      ? -1
                      : a.preferred_time > b.preferred_time
                        ? 1
                        : -1;
            } else if (a.isResolved) {
                return 1;
            } else {
                return -1;
            }
        });
    }, [data]);
};
