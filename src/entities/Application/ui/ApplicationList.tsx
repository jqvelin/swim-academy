"use client";

import {
    CalendarIcon,
    CheckIcon,
    ClockIcon,
    PhoneIcon,
    SortDescIcon,
    UserIcon
} from "lucide-react";
import { useMemo, useState } from "react";

import { useGetAllApplications } from "../model/query-hooks/useGetAllApplications";
import { useSortApplications } from "../model/useSortApplications";
import { ApplicationToProcess } from "./ApplicationToProcess";

export const ApplicationList = () => {
    const [sortBy, setSortBy] = useState<"date" | "name">("date");
    const { data } = useGetAllApplications();
    const applications = useMemo(
        () => useSortApplications(data || [], sortBy),
        [data, sortBy]
    );
    return (
        <>
            <div className="w-11/12 border-cyan-dark border-2 py-4 px-2 rounded-md mb-4 md:mb-8">
                <div>
                    <SortDescIcon className="inline mr-1" />
                    <span className="mr-2">Сортировка:</span>
                    <select
                        onChange={(e) =>
                            setSortBy(e.target.value as "date" | "name")
                        }
                        value={sortBy}
                        className="text-white bg-transparent border-2 border-cyan-dark rounded-sm p-2"
                    >
                        <option
                            value="date"
                            className="bg-blue p-2"
                        >
                            По дате
                        </option>
                        <option
                            value="name"
                            className="bg-blue p-2"
                        >
                            По имени
                        </option>
                    </select>
                </div>
            </div>
            <table className="w-11/12 text-center">
                <thead>
                    <tr>
                        <th className="pb-4">
                            <CheckIcon className="inline mr-1" />
                            <span className="hidden md:inline">Обработана</span>
                        </th>
                        <th className="pb-4">
                            <UserIcon className="inline mr-1" />
                            <span className="hidden md:inline">
                                И.О. клиента
                            </span>
                        </th>
                        <th className="pb-4">
                            <CalendarIcon className="inline mr-1" />
                            <span className="hidden md:inline">
                                Предпочитаемый день занятия
                            </span>
                        </th>
                        <th className="pb-4">
                            <ClockIcon className="hidden md:inline mr-1" />
                            <span className="hidden md:inline">
                                Предпочитаемое время занятия
                            </span>
                        </th>
                        <th className="pb-4">
                            <PhoneIcon className="mr-1 hidden md:inline" />
                            <span className="hidden md:inline">
                                Контактный номер телефона
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {applications?.map((application) => (
                        <ApplicationToProcess
                            key={application.id}
                            application={application}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};
