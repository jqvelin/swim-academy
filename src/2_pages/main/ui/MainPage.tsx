import { Footer } from "@/3_widgets/Footer";
import { Header } from "@/3_widgets/Header";
import { Introduction, Inventory, Outro, Pools } from "@/3_widgets/Sections";

export const MainPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center gap-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(8,26,80)] to-[rgb(1,7,31)] pt-[var(--header-height)] text-primary">
            <Header />
            <Introduction />
            <Pools />
            <Inventory />
            <Outro />
            <Footer />
        </div>
    );
};
