import { MapPage } from "@/_pages/map";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Бассейны на картах"
};

const Page = () => {
    return <MapPage />;
};

export default Page;
