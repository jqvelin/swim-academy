import {
    ComponentPropsWithoutRef,
    FC,
    HTMLAttributes,
    PropsWithChildren,
    ReactNode
} from "react";
import { twMerge } from "tailwind-merge";

export const Modal = ({ children }: { children: ReactNode }) => {
    return (
        <div className="blurry fixed left-0 top-0 grid h-full w-full place-items-center">
            <div className="w-[90%] rounded-md bg-white py-2 text-blue md:w-auto md:p-6">
                {children}
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

export const ModalContent = ({ children }: { children: ReactNode }) => {
    return <div className="my-8 font-semibold">{children}</div>;
};

export const ModalFooter = ({ children }: { children: ReactNode }) => {
    return (
        <div className="row-aligned mt-auto justify-center gap-1">
            {children}
        </div>
    );
};
