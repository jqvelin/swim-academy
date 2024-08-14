import { generateId } from "@/shared/utils";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google"
import YandexProvider from "next-auth/providers/yandex";

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        YandexProvider({
            clientId: process.env.YANDEX_ID || "",
            clientSecret: process.env.YANDEX_SECRET || "",
            profile: (profile) => {
                return {
                    ...profile,
                    id: profile.id.toString(),
                    image: `https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/islands-200`
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
            profile: (profile: GoogleProfile) => {
                return {
                    ...profile,
                    id: profile.sub.toString(),
                    image: profile.picture
                }
            }
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
          if (session?.user) {
            session.user.id = token.sub ?? generateId();
          }
          return session;
        },
        jwt: async ({ user, token }) => {
          if (user) {
            token.uid = user.id;
          }
          return token;
        },
      },
    pages: {
        signIn: "/sign-in"
    }
};
