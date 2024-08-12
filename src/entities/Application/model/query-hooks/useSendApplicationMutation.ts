import { useMutation } from "@tanstack/react-query";
import { applicationsApi } from "../applicationsApi";
import { Application } from "../application.types";

export const useSendApplicationMutation = () => {
    return useMutation({
        mutationFn: (application: Application) =>
            applicationsApi.sendApplication(application),
        mutationKey: ["applications"]
    });
};
