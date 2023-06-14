import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import Twitch from "../../../providers/twitch";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
      // ** ...add more providers here
      
  ],  
  secret: process.env.NEXTAUTH_SECRET,  
    // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
    session: {
      /*
       * Choose how you want to save the user session.
       * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
       * If you use an `adapter` however, NextAuth default it to `database` instead.
       * You can still force a JWT session by explicitly defining `jwt`.
       * When using `database`, the session cookie will only contain a `sessionToken` value,
       * which is used to look up the session in the database.
       */
      strategy: 'jwt',
  
      // ** Seconds - How long until an idle session expires and is no longer valid
      maxAge: 30 * 24 * 60 * 60 // ** 30 days
    },
    callbacks: {
      /*
       * While using `jwt` as a strategy, `jwt()` callback will be called before
       * the `session()` callback. So we have to add custom parameters in `token`
       * via `jwt()` callback to make them accessible in the `session()` callback
       */
      async jwt({ token, user }) {
        if (user) {
          /*
           * For adding custom parameters to user in session, we first need to add those parameters
           * in token which then will be available in the `session()` callback
           */
          token.role = "member";
          return token;
        }
  
        return token
      },  
  },
};
