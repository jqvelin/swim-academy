import { Map } from "@/3_widgets/Map";
import { Link } from "@/6_shared/components";

export const MapPage = () => {
    return (
        <div className="h-screen w-screen col-aligned justify-center">
            <div className="col-aligned justify-center gap-4 w-[90%] relative">
                    <h1 className="text-2xl font-bold md:text-4xl">
                        Бассейны Swim Academy
                    </h1>
                    <Link href="/" className="absolute right-0 top-0">Закрыть</Link>
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
