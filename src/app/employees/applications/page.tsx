import { ApplicationsPage } from "@/_pages/employees";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Менеджер заявок Swim Academy",
    robots: {
        index: false,
        follow: false
    }
};

const Page = () => {
    return <ApplicationsPage />;
};

export default Page;
