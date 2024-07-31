import { LeaveApplicationForm } from "@/4_features/LeaveApplication";

export const ApplicationPage = () => {
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
};
