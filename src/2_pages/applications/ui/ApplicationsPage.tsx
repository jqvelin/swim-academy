import { ApplicationList } from "@/5_entities/Application";
import { applicationsApi } from "@/6_shared/api";
import { Link } from "@/6_shared/components";
import { QueryClient } from "@tanstack/react-query";

export const ApplicationsPage = async () => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["applications"],
        queryFn: applicationsApi.getAllApplications
    })
    return <div className="h-screen col-aligned py-4">
        <Link href="/" className="bg-transparent hover:bg-transparent">
            <h1 className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                swim<span className="text-cyan-dark">.</span>academy
            </h1>
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Список заявок на {new Date().getDay() + "." + String(new Date().getMonth()).padStart(2, "0")}</h1>
        <ApplicationList />
    </div>;
};
