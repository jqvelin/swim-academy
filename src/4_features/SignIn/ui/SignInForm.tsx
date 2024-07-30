"use client";
import { Button } from "@/6_shared/components";
import { useForm } from "react-hook-form";
import { FormValues } from "../model/signInForm.types";
import type { SubmitHandler } from "react-hook-form";

export const SignInForm = () => {
    const { register, handleSubmit, formState } = useForm<FormValues>();

    const emailError = formState.errors.email?.message;
    const passwordError = formState.errors.password?.message;

    const submitHandler: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form
            className="col-aligned w-full gap-4"
            onSubmit={handleSubmit(submitHandler)}
        >
            <div className="relative w-full">
                <input
                    type="text"
                    {...register("email", {
                        required: "Это поле обязательно!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Неверная электронная почта!"
                        }
                    })}
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <span
                    className={`pointer-events-none absolute left-2 top-0 -translate-y-1/2 whitespace-nowrap bg-blue px-2 ${emailError ? "text-red-400" : "text-gray-400"} transition-all`}
                >
                    {`электронная почта ${emailError ? "*" : ""}`}
                </span>
            </div>
            <div className="relative w-full">
                <input
                    type="text"
                    {...register("password", {
                        required: "Это поле обязательно!"
                    })}
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />

                <span
                    className={`pointer-events-none ${passwordError ? "text-red-400" : "text-gray-400"} absolute left-2 top-0 -translate-y-1/2 bg-blue px-2 transition-all`}
                >
                    {`пароль ${passwordError ? "*" : ""}`}
                </span>
            </div>
            <Button
                type="submit"
                className="w-full"
            >
                Войти
            </Button>
        </form>
    );
};
