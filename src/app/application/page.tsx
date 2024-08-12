import { LeaveApplicationPage } from "@/_pages/application";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Запись на тренировку"
};

const Page = () => {
    return <LeaveApplicationPage />;
};

export default Page;
