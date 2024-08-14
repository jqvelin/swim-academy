import axios from "axios";

import { Application } from "./application.types";

export const applicationsApi = {
    getAllApplications() {
        return axios.get(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications`
        );
    },

    getApplicationById(applicationId: string) {
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/applications/${applicationId}`)
    },

    sendApplication(application: Application) {
        return axios.post(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications`,
            application
        );
    },

    changeApplicationState(
        applicationId: Application["id"],
        nextState: Application["isResolved"]
    ) {
        return axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/applications/${applicationId}`,
            { isResolved: nextState }
        );
    }
};
