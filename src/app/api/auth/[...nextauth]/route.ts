import { nextAuthConfig } from "@/6_shared/configs";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextAuthConfig);

export {handler as GET, handler as POST}