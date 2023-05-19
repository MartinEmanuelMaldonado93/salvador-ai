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
    callbacks: {
      async redirect({ url, baseUrl }) {
        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`;
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url;

        return baseUrl;
      }
    }
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
