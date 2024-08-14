import { twMerge } from "tailwind-merge";

export const Checkmark = ({ className }: { className?: string }) => {
    return (
        <svg
            className={twMerge(
                "block aspect-square w-[56px] animate-[fill_.4s_ease-in-out_.4s_forwards] rounded-[1/2] stroke-[hsl(var(--blue-dark))] stroke-2 shadow-[inset_0_0_0_#7ac142] [stroke-miterlimit:10]",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
        >
            <circle
                className="animate-[stroke_.6s_cubic-bezier(0.650,0.000,0.450,1.000)_forwards] fill-none stroke-[#7ac142] stroke-2 [stroke-dasharray:166] [stroke-dashoffset:166] [stroke-miterlimit:10]"
                cx="26"
                cy="26"
                r="25"
                fill="none"
            />
            <path
                className="animate-[stroke_.3s_cubic-bezier(0.650,0.000,0.450,1.000)_.8s_forwards] [stroke-dasharray:48] [stroke-dashoffset:48] [transform-origin:50%_50%]"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
        </svg>
    );
};
