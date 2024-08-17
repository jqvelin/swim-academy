import axios from "axios";

import { Application } from "./application.types";

export const applicationsApi = {
    async getAllApplications() {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications`
        );
        const data = await response.json();
        return {
            data
        };
    },

    getApplicationById(applicationId: string) {
        return axios.get(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications/${applicationId}`
        );
    },

    sendApplication(application: Application) {
        return axios.post(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications`,
            application
        );
    },

    changeApplicationState(nextApplication: Application) {
        return axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications/${nextApplication.id}`,
            nextApplication
        );
    }
};
