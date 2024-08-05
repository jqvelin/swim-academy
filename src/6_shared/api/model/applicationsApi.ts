import axios from "axios";

export const applicationsApi = {
    getAllApplications() {
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/applications`);
    }
};
