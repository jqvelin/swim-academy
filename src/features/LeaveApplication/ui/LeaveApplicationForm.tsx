"use client";

import { Application } from "@/entities/Application";
import {
    ApplicationFormSchema,
    type ApplicationFormValues
} from "@/entities/Application";
import { useSendApplicationMutation } from "@/entities/Application/model/query-hooks/useSendApplicationMutation";
import { Button, Checkmark, Link, Modal, ModalContent, ModalFooter, formatDate } from "@/shared/components";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const LeaveApplicationForm = () => {
    const [isApplicationSent, setIsApplicationSent] = useState(false);
    const { mutateAsync: sendApplication } = useSendApplicationMutation();
    const session = useSession();
    const { register, handleSubmit, formState } =
        useForm<ApplicationFormValues>({
            mode: "onBlur",
            resolver: zodResolver(ApplicationFormSchema)
        });

    const onSubmit: SubmitHandler<ApplicationFormValues> = async (data) => {
        const formattedDate = formatDate(data.preferred_date);
        const application: Application = {
            ...data,
            preferred_date: formattedDate,
            // Пользователь не может попасть на страницу заявки, если он не выполнил вход.
            // Поэтому, id всегда есть.
            id: session.data?.user.id as string,
            isResolved: false
        };

        await sendApplication(application);
        setIsApplicationSent(true);
    };

    return (
        <div
            className={`col-aligned gap-8 after:transition-all after:duration-1000 ${isApplicationSent ? "after:opacity-100" : "after:opacity-0"} after:blurry after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-screen after:w-screen after:[content:'']`}
        >
            {isApplicationSent && (
                <Modal>
                    <ModalContent className="flex flex-col items-center text-center">
                        <Checkmark />
                            <p className="font-semibold">
                                Заявка успешно отправлена.
                                <br />
                                Ожидайте звонка.
                            </p>
                    </ModalContent>
                    <ModalFooter>
                            <Link href="/" className="text-white font-normal">На главную</Link>
                    </ModalFooter>
                </Modal>
            )}
            <form
                className={`col-aligned w-full select-none gap-4 ${isApplicationSent && "pointer-events-none"}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <input
                        {...register("name")}
                        placeholder="имя"
                        className={`w-full rounded-sm ${formState.errors.name ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">
                        {formState.errors.name?.message}
                    </p>
                </div>
                <div className="w-full">
                    <input
                        {...register("surname")}
                        placeholder="фамилия"
                        className={`w-full rounded-sm ${formState.errors.surname ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">
                        {formState.errors.surname?.message}
                    </p>
                </div>
                <div className="w-full">
                    <input
                        {...register("phone", {
                            validate: {
                                isPhoneNumberOccupied: async (fieldValue) => {
                                    const possiblyExistingApplication =
                                        await axios.get(
                                            `http://localhost:8000/applications?phone=${fieldValue}`
                                        );
                                    if (
                                        possiblyExistingApplication.data
                                            .length > 0
                                    ) {
                                        return "Номер телефона занят";
                                    }
                                }
                            },
                            valueAsNumber: true
                        })}
                        type="number"
                        placeholder="номер телефона (8...)"
                        className={`w-full rounded-sm ${formState.errors.phone ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">
                        {formState.errors.phone?.message}
                    </p>
                </div>
                <label>Укажите удобное время занятий:</label>
                <div className="w-full">
                    <input
                        type="date"
                        {...register("preferred_date", {
                            valueAsDate: true
                        })}
                        className={`w-full rounded-sm ${formState.errors.preferred_date ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">
                        {formState.errors.preferred_date?.message}
                    </p>
                </div>
                <div className="w-full">
                    <input
                        type="time"
                        {...register("preferred_time")}
                        className={`w-full rounded-sm ${formState.errors.preferred_time ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">
                        {formState.errors.preferred_time?.message}
                    </p>
                </div>
                <Button
                    type="submit"
                    className="w-full"
                >
                    Отправить
                </Button>
            </form>
            <Link
                href="/"
                className="w-full border-2 border-cyan-dark bg-transparent hover:bg-transparent"
            >
                Назад
            </Link>
        </div>
    );
};
