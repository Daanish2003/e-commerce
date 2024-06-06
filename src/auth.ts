import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db"
import google from "next-auth/providers/google"
import github from "next-auth/providers/github"
import Credentials  from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    google,
    github,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        return null
      }
    })
  ],
})