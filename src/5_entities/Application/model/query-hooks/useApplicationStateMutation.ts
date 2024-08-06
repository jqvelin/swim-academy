import { useMutation } from "@tanstack/react-query";
import { applicationsApi } from "../applicationsApi";
import { Application } from "../application.types";

export const useApplicationStateMutation = () => {
    return useMutation({
        mutationFn: ({
            applicationId,
            nextState
        }: {
            applicationId: Application["id"];
            nextState: Application["isResolved"];
        }) => applicationsApi.changeApplicationState(applicationId, nextState),
        mutationKey: ["applications"]
    });
};
