"use client";

import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@/shared/components";
import { useEffect, useState } from "react";

import type { Application } from "../model/application.types";
import { useApplicationStateMutation } from "../model/query-hooks/useApplicationStateMutation";

export const ApplicationToProcess = ({
    application
}: {
    application: Application;
}) => {
    const [isConfirmationShown, setIsCofirmationShown] = useState(false);
    const [isErrorModalShown, setIsErrorModalShown] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isConfirmationShown ? "hidden" : "auto";
    }, [isConfirmationShown]);

    const {
        mutate: changeApplicationState,
        isPending,
        isError
    } = useApplicationStateMutation();

    useEffect(() => {
        if (isError) setIsErrorModalShown(true);
    }, [isError]);

    const handleChangeApplicationState = () => {
        if (!isConfirmationShown) {
            setIsCofirmationShown(true);
            return;
        }
        setIsCofirmationShown(false);
        changeApplicationState({
            applicationId: application.id,
            nextState: !application.isResolved
        });
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
                        className="m-0 mx-auto grid aspect-square w-[24px] appearance-none place-content-center rounded-sm border-2 border-white bg-transparent before:aspect-square before:w-[16px] before:scale-0 before:bg-gray-400 before:transition-all before:[content:''] checked:before:scale-100"
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
                <tr>
                    <td>
                        <Modal>
                            <ModalHeader>Подтвердите действие</ModalHeader>
                            <ModalContent>
                                <p>
                                    Вы действительно хотите изменить состояние
                                    заявки?
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
                    </td>
                </tr>
            )}
            {isErrorModalShown && (
                <tr>
                    <td>
                        <Modal>
                            <ModalHeader className="text-red-400">
                                Ошибка
                            </ModalHeader>
                            <ModalContent>
                                <p>Запрос не выполнен. Попробуйте ещё раз</p>
                            </ModalContent>
                            <ModalFooter>
                                <Button
                                    className="border-2 border-blue bg-transparent text-blue hover:border-blue/60 hover:bg-transparent hover:text-blue/60"
                                    onClick={() => setIsErrorModalShown(false)}
                                >
                                    Закрыть
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </td>
                </tr>
            )}
        </>
    );
};
