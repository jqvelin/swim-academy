'use client'
import { signIn } from "next-auth/react";
import { FC } from "react";
import { SignInButtonProps } from "../model/signInButtonProps.types"

export const SignInButton: FC<React.ComponentProps<"button"> & SignInButtonProps> = ({provider, callbackUrl, className, children}) => {
    return <button
    onClick={() =>
        signIn(provider, { callbackUrl, redirect: true, })
    }
    className={className}
>
    {children}
</button>
}