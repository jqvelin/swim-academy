import { NextAuthOptions } from "next-auth";
import YandexProvider from "next-auth/providers/yandex"
import GoogleProvider from "next-auth/providers/google"
export const nextAuthConfig: NextAuthOptions = {
    providers: [
        YandexProvider({
            clientId: process.env.YANDEX_ID || "",
            clientSecret: process.env.YANDEX_SECRET || "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        })
    ],
    pages: {
        signIn: '/sign-in'
    }
};
