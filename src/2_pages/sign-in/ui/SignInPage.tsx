import { SignInButton } from "@/4_features/SignIn";
import { faGithub, faYandex, faYandexInternational } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SignInPage = () => {
    return (
        <div className="col-aligned h-screen justify-center">
            <div>
                <Link href="/">
                    <h1 className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent">
                        swim<span className="text-cyan-dark">.</span>academy
                    </h1>
                </Link>
                <hr className="mt-2 mb-8"/>
                <div className="col-aligned gap-4">
                    <SignInButton provider="github" callbackUrl="/" className="row-aligned w-full justify-between border-2 p-2 rounded-md">
                        <FontAwesomeIcon icon={faGithub} width={24}/>
                        Войти через GitHub
                    </SignInButton>
                    <SignInButton provider="yandex" callbackUrl="/" className="row-aligned w-full justify-between border-2 p-2 rounded-md">
                        <FontAwesomeIcon icon={faYandex} height={24}/>
                        Войти через Яндекс
                    </SignInButton>
                </div>
            </div>
        </div>
    );
};
