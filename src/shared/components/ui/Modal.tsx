import {
    ComponentPropsWithoutRef,
    FC,
    HTMLAttributes,
    PropsWithChildren,
    ReactNode
} from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../lib/utils";

export const Modal: FC<
PropsWithChildren<ComponentPropsWithoutRef<"p">> &
    HTMLAttributes<HTMLParagraphElement>
> = ({...props}) => {
    return (
        <div className={cn("blurry fixed z-[100] left-0 top-0 grid h-full w-full place-items-center", props.className)}>
            <div className="w-[90%] rounded-md bg-white py-2 text-blue md:w-auto md:p-6">
                {props.children}
            </div>
        </div>
    );
};

export const ModalHeader: FC<
    PropsWithChildren<ComponentPropsWithoutRef<"p">> &
        HTMLAttributes<HTMLParagraphElement>
> = ({ ...props }) => {
    return (
        <p className={twMerge("mb-auto font-bold", props.className)}>
            {props.children}
        </p>
    );
};

export const ModalContent: FC<
PropsWithChildren<ComponentPropsWithoutRef<"p">> &
    HTMLAttributes<HTMLParagraphElement>
> = ({...props}) => {
    return <div className={cn("my-8 z-[110] font-semibold", props.className)}>{props.children}</div>;
};

export const ModalFooter: FC<
PropsWithChildren<ComponentPropsWithoutRef<"p">> &
    HTMLAttributes<HTMLParagraphElement>
> = ({...props}) => {
    return (
        <div className={cn("row-aligned mt-auto justify-center gap-1", props.className)}>
            {props.children}
        </div>
    );
};
