import axios from "axios";

import { Application } from "./application.types";

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000"

export const applicationsApi = {
    async getAllApplications() {
        const response = await fetch(
            `${BASE_API_URL}/applications`
        );
        const data = await response.json();
        return {
            data
        };
    },

    getApplicationById(applicationId: string) {
        return fetch(`${BASE_API_URL}/applications/${applicationId}`)
    },

    sendApplication(application: Application) {
        return axios.post(
            `${BASE_API_URL}/applications`,
            application
        );
    },

    changeApplicationState(nextApplication: Application) {
        return axios.patch(
            `${BASE_API_URL}/applications/${nextApplication.id}`,
            nextApplication
        );
    }
};
