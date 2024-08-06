import { useQuery } from "@tanstack/react-query";
import { ApplicationDtoSchema } from "../applicationSchema";
import { applicationsApi } from "@/6_shared/api";

export const useGetAllApplications = () => {
    return useQuery({
        queryFn: applicationsApi.getAllApplications,
        queryKey: ["applications"],
        select: (data) => ApplicationDtoSchema.array().parse(data.data)
    });
};
