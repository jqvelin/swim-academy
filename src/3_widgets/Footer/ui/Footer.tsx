import { faTiktok, faTwitter, faVk, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return <footer className="flex flex-col md:flex-row justify-between gap-1 w-section-mobile md:w-section-regular py-2">
    <p>&copy; Swim Academy, {new Date().getFullYear()}. Все права сохранены.</p>
    <div className="row-aligned gap-2">
        <FontAwesomeIcon icon={faTiktok} width={24}/>
        <FontAwesomeIcon icon={faTwitter} width={24}/>
        <FontAwesomeIcon icon={faYoutube} width={24}/>
        <FontAwesomeIcon icon={faVk} width={24}/>
    </div>
  </footer>
}