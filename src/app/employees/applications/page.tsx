import { ApplicationsPage } from "@/2_pages/applications"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Менеджер заявок Swim Academy",
    robots: {
        index: false,
        follow: false
    }
}

const Page = () => {
    return <ApplicationsPage />
}

export default Page