"use client";

import { Button } from "@/shared/components";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import { FormValues } from "../model/signInForm.types";
import { useFormFieldsState } from "../model/useSignInFieldsState";

export const SignInForm = () => {
    const { register, handleSubmit, formState } = useForm<FormValues>();
    const { focusedFields, handleBlurAndFocus } = useFormFieldsState({
        name: false,
        email: false
    });
    const [emailError, passwordError] = [
        formState.errors.email?.message,
        formState.errors.password?.message
    ];

    const submitHandler: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form
            className="col-aligned w-full gap-4"
            onSubmit={handleSubmit(submitHandler)}
            noValidate
        >
            <div className="w-full">
                <div className="relative">
                    <input
                        type="text"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Это поле обязательно!"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Неверная электронная почта!"
                            },
                            onBlur: (e) => handleBlurAndFocus(e)
                        })}
                        onFocus={(e) => handleBlurAndFocus(e)}
                        className={`w-full rounded-sm border-[1px] ${emailError ? "border-red-400" : "border-cyan-dark"} bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <span
                        className={`pointer-events-none absolute left-2 ${focusedFields.email ? "top-0" : "top-1/2"} -translate-y-1/2 whitespace-nowrap bg-blue px-2 ${emailError ? "text-red-400" : "text-gray-400"} transition-all`}
                    >
                        электронная почта
                    </span>
                </div>
                <p className="text-[12px] text-red-400">{emailError}</p>
            </div>
            <div className="w-full">
                <div className="relative">
                    <input
                        type="text"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Это поле обязательно!"
                            },
                            onBlur: (e) => handleBlurAndFocus(e)
                        })}
                        onFocus={(e) => handleBlurAndFocus(e)}
                        className={`w-full rounded-sm border-[1px] ${passwordError ? "border-red-400" : "border-cyan-dark"} bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`}
                    />
                    <span
                        className={`pointer-events-none ${passwordError ? "text-red-400" : "text-gray-400"} absolute left-2 ${focusedFields.password ? "top-0" : "top-1/2"} -translate-y-1/2 bg-blue px-2 transition-all`}
                    >
                        пароль
                    </span>
                </div>
                <p className="text-[12px] text-red-400">{passwordError}</p>
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
