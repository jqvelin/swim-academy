"use client";
import { Button, Checkmark, formatDate, Link } from "@/6_shared/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Application } from "@/5_entities/Application";
import { generateId } from "@/6_shared/utils";
import { useSendApplicationMutation } from "@/5_entities/Application/model/query-hooks/useSendApplicationMutation";
import axios from "axios";
import { ApplicationFormSchema, type ApplicationFormValues } from "@/5_entities/Application"
import { zodResolver } from "@hookform/resolvers/zod"
export const LeaveApplicationForm = () => {
    const [isApplicationSent, setIsApplicationSent] = useState(false);
    const { mutateAsync: sendApplication } = useSendApplicationMutation();

    const { register, handleSubmit, formState } =
        useForm<ApplicationFormValues>({
            mode: "onBlur",
            resolver: zodResolver(ApplicationFormSchema)
        });

    const onSubmit: SubmitHandler<ApplicationFormValues> = async (
        data
    ) => {
        const formattedDate = formatDate(data.preferred_date)
        const application: Application = {
            ...data,
            preferred_date: formattedDate,
            id: generateId(),
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
                <div className="w-full">
                    <input
                        {...register("name")}
                        placeholder="имя"
                        className={`w-full rounded-sm ${formState.errors.name ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">{formState.errors.name?.message}</p>
                </div>
                <div className="w-full">
                    <input
                        {...register("surname")}
                        placeholder="фамилия"
                        className={`w-full rounded-sm ${formState.errors.surname ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">{formState.errors.surname?.message}</p>
                </div>
                <div className="w-full">
                    <input
                        {...register("phone", {
                            validate: {
                                isPhoneNumberOccupied: async (fieldValue) => {
                                    const possiblyExistingApplication = await axios.get(`http://localhost:8000/applications?phone=${fieldValue}`)
                                    if (possiblyExistingApplication.data.length > 0) {
                                        return "Номер телефона занят"
                                    }
                                }
                            }
                        })}
                        type="number"
                        placeholder="номер телефона (8...)"
                        className={`w-full rounded-sm ${formState.errors.phone ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">{formState.errors.phone?.message}</p>
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
                    <p className="text-[12px] text-red-400">{formState.errors.preferred_date?.message}</p>
                </div>
                <div className="w-full">
                    <input
                        type="time"
                        {...register("preferred_time")}
                        className={`w-full rounded-sm ${formState.errors.preferred_time ? "border-red-400 placeholder:text-red-400" : "border-cyan-dark"} border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <p className="text-[12px] text-red-400">{formState.errors.preferred_time?.message}</p>
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
