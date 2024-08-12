"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAllApplications } from "../model/query-hooks/useGetAllApplications";
import { ApplicationToProcess } from "./ApplicationToProcess";
import {
    faCalendar,
    faCheck,
    faClock,
    faPhone,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { useSortApplications } from "../model/useSortApplications";

export const ApplicationList = () => {
    const { data } = useGetAllApplications();
    const applications = useSortApplications(data || []);

    return (
        <table className="w-11/12 text-center">
            <thead>
                <tr>
                    <th>
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="mr-2"
                        />
                        <span className="hidden md:inline">Обработана</span>
                    </th>
                    <th>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="mr-2"
                        />
                        <span className="hidden md:inline">И.О. клиента</span>
                    </th>
                    <th>
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="mr-2"
                        />
                        <span className="hidden md:inline">
                            Предпочитаемый день занятия
                        </span>
                    </th>
                    <th>
                        <FontAwesomeIcon
                            icon={faClock}
                            className="mr-2"
                        />
                        <span className="hidden md:inline">
                            Предпочитаемое время занятия
                        </span>
                    </th>
                    <th>
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="mr-2"
                        />
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
    );
};
