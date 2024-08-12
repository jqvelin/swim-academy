import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Introduction, Inventory, Outro, Pools } from "@/widgets/Sections";

export const MainPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center gap-4 pt-[var(--header-height)]">
            <Header />
            <Introduction />
            <Pools />
            <Inventory />
            <Outro />
            <Footer />
        </div>
    );
};
