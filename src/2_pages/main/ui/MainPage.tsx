import { Footer } from "@/3_widgets/Footer";
import { Header } from "@/3_widgets/Header";
import { Introduction, Inventory, Outro, Pools } from "@/3_widgets/Sections";

export const MainPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center gap-4">
            <Header />
            <Introduction />
            <Pools />
            <Inventory />
            <Outro />
            <Footer />
        </div>
    );
};
