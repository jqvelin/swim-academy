import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import Image from "next/image";

export const ProfileThumbnail = ({ sessionData }: { sessionData: Session }) => {
    const ProfileThumbnailSrc = sessionData.user?.image;
    if (ProfileThumbnailSrc) {
        return (
            <Image
                src={ProfileThumbnailSrc}
                alt="Аватар"
                width={40}
                height={40}
                className="relative rounded-full after:absolute after:left-0 after:top-0 after:z-[99999] after:aspect-square after:w-[50px] after:bg-red-400 after:[content:'']"
            />
        );
    } else {
        return (
            <div className="row-aligned aspect-square w-[40px] justify-center rounded-full border-2">
                <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                />
            </div>
        );
    }
};
