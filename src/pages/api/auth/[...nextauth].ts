import { enviroments } from "@/env.mjs";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from 'next-auth/providers/github';

export default async function auth(req: any, res: any) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: enviroments.GOOGLE_CLIENT_ID,
        clientSecret: enviroments.GOOGLE_CLIENT_SECRET,
      }),
    ],
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/signin",
    },
  });
}

// export const authOptions: AuthOptions = {
// 	providers: [
// 		GoogleProvider({
// 			clientId: enviroments.GOOGLE_CLIENT_ID,
// 			clientSecret: enviroments.GOOGLE_CLIENT_SECRET
// 		})
// 	],
// 	session: {
// 		strategy: 'jwt',
// 	},
// 	pages: {
// 		signIn: '/signin',
// 	}
// }
// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
