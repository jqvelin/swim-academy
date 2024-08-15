"use client";

import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@/shared/components";
import { useEffect, useState } from "react";

import { TriangleIcon, ClockIcon, PhoneIcon } from "lucide-react"

import type { Application } from "../model/application.types";
import { useApplicationStateMutation } from "../model/query-hooks/useApplicationStateMutation";

export const ApplicationToProcess = ({
    application
}: {
    application: Application;
}) => {
    const [isConfirmationShown, setIsCofirmationShown] = useState(false);
    const [isErrorModalShown, setIsErrorModalShown] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

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
                className={`h-[80px] text-[14px] md:text-[16px] border-2 ${application.isResolved ? "border-gray-500 text-gray-300" : "border-cyan-dark"} overflow-y-auto px-2`}
            >
                <td className="md:px-2 text-center">
                    <input
                        type="checkbox"
                        disabled={isPending}
                        onChange={handleChangeApplicationState}
                        checked={application.isResolved}
                        className="m-0 mx-auto grid aspect-square w-[24px] appearance-none place-content-center rounded-sm border-2 border-white bg-transparent before:aspect-square before:w-[16px] before:scale-0 before:bg-gray-400 before:transition-all before:[content:''] checked:before:scale-100"
                    />
                </td>
                <td className="md:px-2 text-center">
                    <span>{application.name + " " + application.surname}</span>
                </td>
                <td className="md:px-2 text-center">
                    <span>{application.preferred_date}</span>
                </td>
                <td className="md:px-2 text-center">
                    <span className="hidden md:inline">{application.preferred_time}</span>

                </td>
                <td className="md:px-2 text-center">
                    <a
                        className="w-[50px] overflow-hidden text-ellipsis md:w-auto hidden md:inline"
                        href={`tel:${application.phone}`}
                    >
                        {application.phone}
                    </a>
                    <Button className="[all:initial] hover:bg-transparent" onClick={() => setIsExpanded(!isExpanded)}>
                        <TriangleIcon className={`inline md:hidden ${ isExpanded && "rotate-180"} fill-white w-[14px]`} />
                    </Button>
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
            <tr className={`inline md:hidden text-[12px] overflow-hidden transition-all ${isExpanded ? "hidden" : ""}`}>
                <td className="text-center px-1 row-aligned gap-1">
                    <ClockIcon className="w-[14px]" />
                    <span>{application.preferred_time}</span>
                </td>
                <td className="text-center px-1 row-aligned gap-1">
                    <PhoneIcon className="w-[14px]"/>
                    <span>{application.phone}</span>
                </td>
            </tr>
        </>
    );
};
