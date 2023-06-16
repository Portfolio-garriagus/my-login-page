import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import Twitch from "../../../providers/twitch";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { prisma } from "./prisma";


export const authOptions: NextAuthOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
      // ** ...add more providers here      
  ],  
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
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
      maxAge: 12// ** 30 days
    },
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
  
      async session({ session, token }) {
        session.user = token as any;
        return session;
      },
    },
  }
  

