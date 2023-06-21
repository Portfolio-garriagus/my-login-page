import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import Twitch from "../../../providers/twitch";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient , User } from "@prisma/client";


const prisma = new PrismaClient()


export const authOptions: NextAuthOptions = {
   
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,      
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ** ...add more providers here      
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    strategy: 'jwt',
    maxAge: 1200// ** 30 days
  },
  callbacks: {
    async jwt({token, user, account, profile}) {
      if (account) {
          token.accessToken = account.access_token
          token.provider = account.provider          
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      
      session.user = token;      
      return session;
    },    
  },
};


