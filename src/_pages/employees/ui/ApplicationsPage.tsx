import { ApplicationList } from "@/entities/Application";
import { applicationsApi } from "@/shared/api";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate
} from "@tanstack/react-query";

export const ApplicationsPage = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["applications"],
        queryFn: applicationsApi.getAllApplications
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ApplicationList />
        </HydrationBoundary>
    );
};
