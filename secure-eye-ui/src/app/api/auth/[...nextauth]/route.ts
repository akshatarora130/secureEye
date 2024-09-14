import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { db } from "../../../../../../secure-eye-Backend/src/db";

const prisma = db;

type SessionProps = {
  session: any;
  user: any;
};

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "280728861898-523g0lr1uat8it2sfurf2a09m7q9j0vu.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, user }: SessionProps) {
      session.user.id = user.id;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
