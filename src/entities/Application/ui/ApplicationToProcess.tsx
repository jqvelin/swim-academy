"use client";

import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    TextInput
} from "@/shared/components";
import {
    CheckIcon,
    ClockIcon,
    PencilIcon,
    PhoneIcon,
    TriangleIcon
} from "lucide-react";
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
    const [isExpanded, setIsExpanded] = useState(false);
    const [editableApplicationContent, setEditableApplicationContent] =
        useState<null | Application>(null);

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
            ...application,
            isResolved: !application.isResolved
        });
    };

    const handleEditApplication = () => {
        if (!editableApplicationContent) {
            setEditableApplicationContent({ ...application });
            return;
        }
        editableApplicationContent &&
            changeApplicationState(editableApplicationContent);
        setEditableApplicationContent(null);
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
                    {editableApplicationContent ? (
                        <div className="row-aligned gap-1">
                            <TextInput
                                value={editableApplicationContent.name}
                                onChange={(e) =>
                                    setEditableApplicationContent({
                                        ...editableApplicationContent,
                                        name: e.target.value
                                    })
                                }
                                className="px-1 text-center"
                            />
                            <TextInput
                                value={editableApplicationContent.surname}
                                onChange={(e) =>
                                    setEditableApplicationContent({
                                        ...editableApplicationContent,
                                        surname: e.target.value
                                    })
                                }
                                className="px-1 text-center"
                            />
                        </div>
                    ) : (
                        <span>
                            {application.name + " " + application.surname}
                        </span>
                    )}
                </td>
                <td className="md:px-2 text-center">
                    {editableApplicationContent ? (
                        <TextInput
                            value={editableApplicationContent.preferred_date}
                            onChange={(e) =>
                                setEditableApplicationContent({
                                    ...editableApplicationContent,
                                    preferred_date: e.target.value
                                })
                            }
                            className="px-1 text-center"
                        />
                    ) : (
                        <span>{application.preferred_date}</span>
                    )}
                </td>
                <td className="md:px-2 text-center">
                    {editableApplicationContent ? (
                        <TextInput
                            value={editableApplicationContent.preferred_time}
                            onChange={(e) =>
                                setEditableApplicationContent({
                                    ...editableApplicationContent,
                                    preferred_time: e.target.value
                                })
                            }
                            className="px-1 text-center hidden md:inline"
                        />
                    ) : (
                        <span className="hidden md:inline">
                            {application.preferred_time}
                        </span>
                    )}
                </td>
                <td className="md:px-2 text-center">
                    {editableApplicationContent ? (
                        <TextInput
                            value={editableApplicationContent.phone}
                            onChange={(e) =>
                                setEditableApplicationContent({
                                    ...editableApplicationContent,
                                    phone: parseInt(e.target.value)
                                })
                            }
                            className="px-1 text-center hidden md:inline"
                        />
                    ) : (
                        <a
                            className="w-[50px] overflow-hidden text-ellipsis md:w-auto hidden md:inline"
                            href={`tel:${application.phone}`}
                        >
                            {application.phone}
                        </a>
                    )}
                    <Button
                        className="[all:initial] hover:bg-transparent"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <TriangleIcon
                            className={`inline md:hidden ${isExpanded && "rotate-180"} fill-white w-[16px]`}
                        />
                    </Button>
                </td>
                <td>
                    <Button
                        onClick={handleEditApplication}
                        className="bg-transparent hover:bg-transparent text-xl border-2 p-0 w-10 aspect-square"
                    >
                        {editableApplicationContent ? (
                            <CheckIcon width={16} />
                        ) : (
                            <PencilIcon width={16} />
                        )}
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

            <tr
                className={`inline md:hidden text-[12px] overflow-hidden transition-all ${isExpanded ? "hidden" : ""}`}
            >
                <td className="text-center px-1 row-aligned gap-1">
                    <ClockIcon className="w-[14px]" />
                    {editableApplicationContent ? (
                        <TextInput
                            value={editableApplicationContent.preferred_time}
                            onChange={(e) =>
                                setEditableApplicationContent({
                                    ...editableApplicationContent,
                                    preferred_time: e.target.value
                                })
                            }
                            className="p-1 text-center"
                        />
                    ) : (
                        <span>{application.preferred_time}</span>
                    )}
                </td>
                <td className="text-center px-1 row-aligned gap-1">
                    <PhoneIcon className="w-[14px]" />
                    {editableApplicationContent ? (
                        <TextInput
                            value={editableApplicationContent.phone}
                            onChange={(e) =>
                                setEditableApplicationContent({
                                    ...editableApplicationContent,
                                    phone: parseInt(e.target.value)
                                })
                            }
                            className="p-1 text-center"
                        />
                    ) : (
                        <span>{application.phone}</span>
                    )}
                </td>
            </tr>
        </>
    );
};
