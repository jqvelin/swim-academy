import { SignInButton } from "@/4_features/SignIn";
import { Link } from "@/6_shared/components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignInPage = () => {
    return (
        <div className="col-aligned h-screen justify-center">
            <div>
                <Link href="/" className="bg-transparent hover:bg-transparent">
                    <h1 className="mb-2 bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent">
                        swim<span className="text-cyan-dark">.</span>academy
                    </h1>
                </Link>
                <SignInButton provider="github" callbackUrl="/" className="row-aligned w-full justify-between border-2 p-2 rounded-md transition-all hover:border-purple-400">
                    <FontAwesomeIcon icon={faGithub} width={24}/>
                    Войти через GitHub
                </SignInButton>
            </div>
        </div>
    );
};
