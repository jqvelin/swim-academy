"use client";
import { Button } from "@/6_shared/components";
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
        <form
            className={`col-aligned w-full gap-4 relative after:transition-all after:duration-1000 ${isApplicationSent ? 'after:opacity-100' : 'after:opacity-0' } after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-[calc(100%+1px)] after:[content:''] after:blurry`}
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
            {isApplicationSent && <div className="absolute top-1/2 -translate-y-1/2 z-10"><Checkmark /></div>}
        </form>
    );
};
