"use client";

import { useQueryClient } from "@tanstack/react-query";
import type { Application } from "../model/application.types";
import { useApplicationStateMutation } from "../model/query-hooks/useApplicationStateMutation";
import { useEffect, useState } from "react";
import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@/6_shared/components";

export const ApplicationToProcess = ({
    application
}: {
    application: Application;
}) => {
    const queryClient = useQueryClient();
    const [isConfirmationShown, setIsCofirmationShown] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isConfirmationShown ? "hidden" : "auto";
    }, [isConfirmationShown]);

    const { mutateAsync: changeApplicationState, isPending } =
        useApplicationStateMutation();

    const handleChangeApplicationState = async () => {
        if (!isConfirmationShown) {
            setIsCofirmationShown(true);
            return;
        }
        setIsCofirmationShown(false);
        await changeApplicationState({
            applicationId: application.id,
            nextState: !application.isResolved
        });
        queryClient.invalidateQueries({ queryKey: ["applications"] });
    };

    return (
        <>
            <tr
                className={`h-[100px] justify-between border-2 ${application.isResolved ? "border-gray-500 text-gray-300" : "border-cyan-dark"} overflow-y-auto px-2`}
            >
                <td className="px-2 text-center">
                    <input
                        type="checkbox"
                        disabled={isPending}
                        onChange={handleChangeApplicationState}
                        checked={application.isResolved}
                        className="m-0 mx-auto grid aspect-square w-[24px] appearance-none place-content-center rounded-sm border-2 border-white bg-transparent before:aspect-square before:w-[16px] before:scale-0 before:bg-cyan-dark before:transition-all before:[content:''] checked:before:scale-100"
                    />
                </td>
                <td className="px-2 text-center">
                    <span>{application.name + " " + application.surname}</span>
                </td>
                <td className="px-2 text-center">
                    <span>{application.preferred_date}</span>
                </td>
                <td className="px-2 text-center">
                    <span>{application.preferred_time}</span>
                </td>
                <td className="px-2 text-center">
                    <a
                        className="w-[50px] overflow-hidden text-ellipsis md:w-auto"
                        href={`tel:${application.phone}`}
                    >
                        {application.phone}
                    </a>
                </td>
            </tr>
            {isConfirmationShown && (
                <Modal>
                    <ModalHeader>Подтвердите действие</ModalHeader>
                    <ModalContent>
                        <p>
                            Вы действительно хотите изменить состояние заявки?
                        </p>
                    </ModalContent>
                    <ModalFooter>
                        <Button onClick={handleChangeApplicationState}>
                            Подтвердить
                        </Button>
                        <Button
                            className="border-2 border-blue bg-transparent text-blue hover:border-blue/60 hover:bg-transparent hover:text-blue/60"
                            onClick={() => setIsCofirmationShown(false)}
                        >
                            Отменить
                        </Button>
                    </ModalFooter>
                </Modal>
            )}
        </>
    );
};
