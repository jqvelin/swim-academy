import { EmployeesPageNavbar } from "@/_pages/employees";
import { Link } from "@/shared/components";
import { paths } from "@/shared/routing";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="col-aligned h-screen py-4">
            <Link
                href={paths.root}
                className="bg-transparent hover:bg-transparent"
            >
                <h1 className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    swim<span className="text-cyan-dark">.</span>academy
                </h1>
            </Link>
            <h1 className="mb-8 text-center text-2xl font-bold md:text-4xl">
                Заявки на{" "}
                {new Date().getDate() +
                    "." +
                    String(new Date().getMonth() + 1).padStart(2, "0")}
            </h1>
            <EmployeesPageNavbar />
            {children}
        </div>
    );
};

export default Layout;
