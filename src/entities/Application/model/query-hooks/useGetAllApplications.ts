"use client";

import { applicationsApi } from "@/shared/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { ApplicationDtoSchema } from "../application.schema";

export const useGetAllApplications = () => {
    const queryClient = useQueryClient();
    return useQuery({
        queryFn: applicationsApi.getAllApplications,
        queryKey: ["applications"],
        initialData: () => queryClient.getQueryData(["applications"]),
        select: (data) => ApplicationDtoSchema.array().parse(data.data)
    });
};
