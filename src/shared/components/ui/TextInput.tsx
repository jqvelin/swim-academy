import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            {...props}
            className={twMerge(
                `w-full rounded-sm border-[1px] bg-transparent px-4 py-2 outline-none transition-[border-color] focus:border-cyan-neon`,
                props.className
            )}
        />
    );
};
