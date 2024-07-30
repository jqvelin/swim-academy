import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import YandexProvider from "next-auth/providers/yandex"
export const nextAuthConfig: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        }),
        YandexProvider({
            clientId: process.env.YANDEX_ID || "",
            clientSecret: process.env.YANDEX_SECRET || "",
        })
    ] 
};
