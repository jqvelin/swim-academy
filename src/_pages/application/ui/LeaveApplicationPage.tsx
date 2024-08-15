"use client";

import { LeaveApplicationForm } from "@/features/LeaveApplication";
import {
    Checkmark,
    Link,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@/shared/components";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const LeaveApplicationPage = () => {
    const session = useSession();
    const userId = session.data?.user.id as string;
    const { data: possiblyExistingApplication } = useQuery({
        queryFn: () => fetch(`http://localhost:8000/applications/${userId}`),
        queryKey: ["applications", userId],
        staleTime: 0
    });
    if (possiblyExistingApplication?.status === 404) {
        return (
            <div className="col-aligned h-screen justify-center">
                <div className="col-aligned">
                    <h1 className="mb-8 bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        Оставьте заявку
                    </h1>
                    <LeaveApplicationForm />
                </div>
            </div>
        );
    } else if (possiblyExistingApplication?.status === 200) {
        return (
            <Modal>
                <ModalContent className="flex flex-col items-center text-center">
                    <Checkmark />
                    <p className="font-semibold">
                        Заявка успешно отправлена.
                        <br />
                        Ожидайте звонка.
                    </p>
                </ModalContent>
                <ModalFooter>
                    <Link
                        href="/"
                        className="text-white font-normal"
                    >
                        На главную
                    </Link>
                </ModalFooter>
            </Modal>
        );
    }
};
