"use client";

import { useGetApplicationById } from "@/entities/Application/model/query-hooks/useGetApplicationById";
import { LeaveApplicationForm } from "@/features/LeaveApplication";
import {
    Button,
    Checkmark,
    Link,
    Modal,
    ModalContent,
    ModalFooter
} from "@/shared/components";
import { paths } from "@/shared/routing";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LeaveApplicationPage = () => {
    const session = useSession();
    const userId = session.data?.user.id as string;
    const { data: possiblyExistingApplication } = useGetApplicationById(userId);

    const router = useRouter();

    if (possiblyExistingApplication?.status === 404) {
        return (
            <div className="col-aligned h-screen justify-center px-2">
                <div className="col-aligned">
                    <h1 className="mb-8 bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-2xl font-bold text-transparent md:text-4xl">
                        Оставьте заявку
                    </h1>
                    <div className="col-aligned">
                        <LeaveApplicationForm />
                        <Button
                            onClick={() => router.back()}
                            className="text-cyan-neon w-11/12 md:w-full mt-8 border-2 border-cyan-dark bg-transparent hover:bg-transparent"
                        >
                            Назад
                        </Button>
                    </div>
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
                        href={paths.root}
                        className="text-white font-normal"
                    >
                        На главную
                    </Link>
                </ModalFooter>
            </Modal>
        );
    }
};
