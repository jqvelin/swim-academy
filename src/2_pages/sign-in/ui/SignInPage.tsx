import { SignInButton, SignInForm } from "@/4_features/SignIn";
import {
    faGithub,
    faGoogle,
    faYandex
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SignInPage = () => {
    return (
        <div className="col-aligned h-screen justify-center">
            <div>
                <Link href="/">
                    <h1 className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        swim<span className="text-cyan-dark">.</span>academy
                    </h1>
                </Link>
                <hr className="mb-8 mt-2" />
                <SignInForm />
                <div className="relative">
                    <hr className="relative my-8 border-gray-400" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue px-2 text-gray-400">
                        или
                    </span>
                </div>
                <div className="col-aligned gap-4">
                    <SignInButton
                        provider="yandex"
                        callbackUrl="/"
                        className="row-aligned w-full justify-between rounded-md border-2 p-2"
                    >
                        <FontAwesomeIcon
                            icon={faYandex}
                            width={24}
                            height={24}
                        />
                        Войти через Яндекс
                    </SignInButton>
                    <SignInButton
                        provider="google"
                        callbackUrl="/"
                        className="row-aligned w-full justify-between rounded-md border-2 p-2"
                    >
                        <FontAwesomeIcon
                            icon={faGoogle}
                            width={24}
                        />
                        Войти через Google
                    </SignInButton>
                </div>
            </div>
        </div>
    );
};
