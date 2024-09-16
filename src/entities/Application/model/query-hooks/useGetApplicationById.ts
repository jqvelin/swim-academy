import { useQuery } from "@tanstack/react-query";

import { applicationsApi } from "../applicationsApi";

export const useGetApplicationById = (applicationId: string) => {
    return useQuery({
        queryFn: () => applicationsApi.getApplicationById(applicationId),
        queryKey: ["applications", applicationId],
        staleTime: 0
    });
};
