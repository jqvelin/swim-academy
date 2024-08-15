"use client";

import { Link } from "@/shared/components";
import { ChartBarIcon, ListIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export const EmployeesPageNavbar = () => {
    const pathname = usePathname();

    return (
        <nav className="w-11/12 rounded-md mb-4 row-aligned gap-2">
            <Link
                href="applications"
                className={`bg-transparent hover:bg-transparent ${pathname === "/employees/applications" ? "border-white" : "border-cyan-dark"} border-2 rounded-sm row-aligned gap-1`}
            >
                <ListIcon />
                <span>
                    Обработка<span className="hidden md:inline"> заявок</span>
                </span>
            </Link>
            <Link
                href="stats"
                className={`bg-transparent hover:bg-transparent ${pathname === "/employees/stats" ? "border-white" : "border-cyan-dark"} border-2 rounded-sm row-aligned gap-1`}
            >
                <ChartBarIcon />
                <span>Статистика</span>
            </Link>
        </nav>
    );
};
