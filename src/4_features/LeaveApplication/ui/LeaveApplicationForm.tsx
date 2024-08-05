"use client";
import { Button, Link } from "@/6_shared/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { LeaveApplicationFormValues } from "../model/leaveApplicationForm.types";
import { useState } from "react";
import { Checkmark } from "@/6_shared/components/ui/Checkmark";

export const LeaveApplicationForm = () => {
    const [isApplicationSent, setIsApplicationSent] = useState(false);
    const { register, handleSubmit, formState } =
        useForm<LeaveApplicationFormValues>();

    const onSubmit: SubmitHandler<LeaveApplicationFormValues> = (data) => {
        setIsApplicationSent(true)
    };

    return (
        <div className={`after:transition-all after:duration-1000 ${isApplicationSent ? 'after:opacity-100' : 'after:opacity-0' } after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-screen after:w-screen after:[content:''] after:blurry`}>
            {isApplicationSent && <div className="animate-reveal col-aligned bg-blue-500/50 rounded-sm p-8 text-center gap-4 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            <Checkmark />
            <p className="animate-reveal opacity-0 font-semibold">Заявка успешно отправлена.<br/>Ожидайте звонка.</p>
            <Link className="animate-reveal" href="/">На главную</Link></div>}
            <form
                className={`col-aligned w-full gap-4 select-none ${isApplicationSent && 'pointer-events-none'}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register("name")}
                    placeholder="имя"
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <input
                    {...register("surname")}
                    placeholder="фамилия"
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <input
                    {...register("phone", {
                        pattern: {
                            value: /^[0-9]+$/i,
                            message: "только цифры"
                        }
                    })}
                    type="tel"
                    placeholder="номер телефона (8...)"
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <label>Укажите удобное время занятий:</label>
                <input
                    type="date"
                    {...register("date")}
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <input
                    type="time"
                    {...register("time")}
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />

                <Button
                    type="submit"
                    className="w-full"
                >
                    Отправить
                </Button>
            </form>
        </div>
    );
};
