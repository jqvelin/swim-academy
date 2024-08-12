"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { Application } from "../application.types";
import { applicationsApi } from "../applicationsApi";

export const useApplicationStateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            applicationId,
            nextState
        }: {
            applicationId: Application["id"];
            nextState: Application["isResolved"];
        }) => applicationsApi.changeApplicationState(applicationId, nextState),
        mutationKey: ["applications"],
        onMutate: async (newApplicationData) => {
            await queryClient.cancelQueries({ queryKey: ["applications"] });
            const previousApplicationData = queryClient.getQueryData([
                "applications"
            ]);
            queryClient.setQueryData(
                ["applications"],
                (oldApplicationData: AxiosResponse<Application[]>) => {
                    return {
                        ...oldApplicationData,
                        data: oldApplicationData.data.map((application) => {
                            if (
                                application.id ===
                                newApplicationData.applicationId
                            ) {
                                return {
                                    ...application,
                                    isResolved: newApplicationData.nextState
                                };
                            }
                            return application;
                        })
                    };
                }
            );
            return {
                previousApplicationData
            };
        },
        onError: (_, __, context) => {
            queryClient.setQueryData(
                ["applications"],
                () => context?.previousApplicationData
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
        }
    });
};
