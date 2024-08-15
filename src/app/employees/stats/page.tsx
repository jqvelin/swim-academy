import { StatsPage } from "@/_pages/employees";

const Page = ({
    searchParams
}: {
    searchParams: { [key: string]: string };
}) => {
    return <StatsPage searchParams={searchParams} />;
};

export default Page;
