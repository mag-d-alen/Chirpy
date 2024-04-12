import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0"
import GoogleProvider from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};
export default NextAuth(authOptions);
