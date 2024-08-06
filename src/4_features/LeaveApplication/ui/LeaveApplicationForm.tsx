"use client";
import { Button, Checkmark, Link } from "@/6_shared/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { LeaveApplicationFormValues } from "../model/leaveApplicationForm.types";
import { useState } from "react";
import { Application } from "@/5_entities/Application";
import { generateId } from "@/6_shared/utils";
import { useSendApplicationMutation } from "@/5_entities/Application/model/query-hooks/useSendApplicationMutation";

export const LeaveApplicationForm = () => {
    const [isApplicationSent, setIsApplicationSent] = useState(false);
    const { mutateAsync: sendApplication } = useSendApplicationMutation();

    const { register, handleSubmit, formState } =
        useForm<LeaveApplicationFormValues>({
            mode: "onBlur"
        });

    const onSubmit: SubmitHandler<LeaveApplicationFormValues> = async (
        data
    ) => {
        const application: Application = {
            ...data,
            id: generateId(),
            isResolved: false,
            phone: parseInt(data.phone)
        };

        await sendApplication(application);
        setIsApplicationSent(true);
    };

    return (
        <div
            className={`col-aligned gap-8 after:transition-all after:duration-1000 ${isApplicationSent ? "after:opacity-100" : "after:opacity-0"} after:blurry after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-screen after:w-screen after:[content:'']`}
        >
            {isApplicationSent && (
                <div className="col-aligned absolute left-1/2 top-1/2 z-10 w-[80%] -translate-x-1/2 -translate-y-1/2 animate-reveal gap-4 rounded-sm bg-blue-500/80 py-4 text-center md:w-auto md:px-8">
                    <Checkmark />
                    <p className="font-semibold">
                        Заявка успешно отправлена.
                        <br />
                        Ожидайте звонка.
                    </p>
                    <Link href="/">На главную</Link>
                </div>
            )}
            <form
                className={`col-aligned w-full select-none gap-4 ${isApplicationSent && "pointer-events-none"}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register("name", {
                        required: "Поле обязательно!"
                    })}
                    placeholder="имя"
                    className={`w-full rounded-sm ${formState.errors.name ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                />
                <input
                    {...register("surname", {
                        required: "Поле обязательно!"
                    })}
                    placeholder="фамилия"
                    className={`w-full rounded-sm ${formState.errors.surname ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                />
                <input
                    {...register("phone", {
                        required: "Поле обязательно!",
                        minLength: {
                            value: 11,
                            message: "Номер должен содержать 11 цифр"
                        },
                        maxLength: {
                            value: 11,
                            message: "Номер должен содержать 11 цифр"
                        },
                        pattern: {
                            value: /^[0-9]+$/i,
                            message: "только цифры"
                        }
                    })}
                    type="tel"
                    placeholder="номер телефона (8...)"
                    className={`w-full rounded-sm ${formState.errors.phone ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                />
                <label>Укажите удобное время занятий:</label>
                <input
                    type="date"
                    {...register("preferred_date", {
                        required: "Поле обязательно!",
                        pattern: {
                            value: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
                            message: "Некорректный формат даты"
                        }
                    })}
                    className={`w-full rounded-sm ${formState.errors.preferred_date ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                />
                <input
                    type="time"
                    {...register("preferred_time", {
                        required: "Поле обязательно!"
                    })}
                    className={`w-full rounded-sm ${formState.errors.preferred_time ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                />
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
