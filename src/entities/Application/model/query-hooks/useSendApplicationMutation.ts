import { useMutation } from "@tanstack/react-query";

import { Application } from "../application.types";
import { applicationsApi } from "../applicationsApi";

export const useSendApplicationMutation = () => {
    return useMutation({
        mutationFn: (application: Application) =>
            applicationsApi.sendApplication(application),
        mutationKey: ["applications"]
    });
};
