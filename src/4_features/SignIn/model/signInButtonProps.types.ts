import type { BuiltInProviderType } from "next-auth/providers/index";

export interface SignInButtonProps {
    provider: BuiltInProviderType;
    callbackUrl: string;
}
