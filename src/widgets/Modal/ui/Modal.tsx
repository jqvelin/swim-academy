"use client";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, useRef } from "react";

export const Modal = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const modalRef = useRef<HTMLDivElement>(null);

    function handleModalClick(e: MouseEvent) {
        if (e.target === modalRef.current) {
            router.back();
        }
    }

    return (
        <div
            className="col-aligned z-50 blurry fixed left-0 top-0 h-screen w-screen justify-center"
            ref={modalRef}
            onClick={handleModalClick}
        >
            <div className="relative w-[90%]">{children}</div>
        </div>
    );
};
