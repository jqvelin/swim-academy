import { ApplicationList } from "@/entities/Application";
import { applicationsApi } from "@/shared/api";
import { Link } from "@/shared/components";
import { QueryClient } from "@tanstack/react-query";

export const ApplicationsPage = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["applications"],
        queryFn: applicationsApi.getAllApplications
    });
    return (
        <div className="col-aligned h-screen py-4">
            <Link
                href="/"
                className="bg-transparent hover:bg-transparent"
            >
                <h1 className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    swim<span className="text-cyan-dark">.</span>academy
                </h1>
            </Link>
            <h1 className="mb-8 text-center text-2xl font-bold md:text-4xl">
                Список заявок на{" "}
                {new Date().getDate() +
                    "." +
                    String(new Date().getMonth() + 1).padStart(2, "0")}
            </h1>
            <ApplicationList />
        </div>
    );
};
