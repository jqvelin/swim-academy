import {
    faTiktok,
    faTwitter,
    faVk,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <footer className="flex w-section-mobile flex-col justify-between gap-1 py-2 md:w-section-regular md:flex-row">
            <p>
                &copy; Swim Academy, {new Date().getFullYear()}. Все права
                сохранены.
            </p>
            <div className="row-aligned gap-2">
                <FontAwesomeIcon
                    icon={faTiktok}
                    size="2x"
                />
                <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                />
                <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                />
                <FontAwesomeIcon
                    icon={faVk}
                    size="2x"
                />
            </div>
        </footer>
    );
};
