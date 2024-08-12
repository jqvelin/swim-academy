import { Link } from "@/shared/components";
import { Map } from "@/widgets/Map";

export const MapPage = () => {
    return (
        <div className="col-aligned h-screen w-screen justify-center">
            <div className="col-aligned relative w-[90%] justify-center gap-4">
                <h1 className="text-2xl font-bold md:text-4xl">
                    Бассейны Swim Academy
                </h1>
                <Link
                    href="/"
                    className="absolute right-0 top-0"
                >
                    Закрыть
                </Link>
                <Map />
                <ul>
                    <li>Бакунинская ул., 13, стр. 1, Москва</li>
                    <li>ул. Плющиха, 57, стр. 1, Москва</li>
                    <li>Островная ул., 1, стр. 1, Москва </li>
                </ul>
            </div>
        </div>
    );
};
