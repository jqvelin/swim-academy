"use client";
import { Button } from "@/6_shared/components";
import { useState } from "react";

export const SignInForm = () => {
    const [focusState, setFocusState] = useState({
        email: false,
        password: false
    });

    function checkIsFocused(e: React.FocusEvent, field: "email" | "password") {
        const target = e.target as HTMLInputElement;
        if (!target.value) setFocusState({ ...focusState, [field]: false });
    }

    return (
        <form className="col-aligned w-full gap-4">
            <div className="relative w-full">
                <input
                    onFocus={() =>
                        setFocusState({ ...focusState, email: true })
                    }
                    onBlur={(e) => checkIsFocused(e, "email")}
                    required
                    type="text"
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <span
                    className={`absolute text-gray-400 ${focusState.email ? "top-0 text-[14px]" : "top-1/2"} pointer-events-none left-2 -translate-y-1/2 bg-blue px-2 transition-all`}
                >
                    электронная почта
                </span>
            </div>
            <div className="relative w-full">
                <input
                    onFocus={(e) =>
                        setFocusState({ ...focusState, password: true })
                    }
                    onBlur={(e) => checkIsFocused(e, "password")}
                    required
                    type="text"
                    className="w-full rounded-sm border-[1px] border-cyan-dark bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon"
                />
                <span
                    className={`absolute text-gray-400 ${focusState.password ? "top-0 text-[14px]" : "top-1/2"} pointer-events-none left-2 -translate-y-1/2 bg-blue px-2 transition-all`}
                >
                    пароль
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
