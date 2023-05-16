import { enviroments } from "@/env.mjs";
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
// import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: 'asdmasklmd',
			clientSecret: 'amsdaldk'
		})
	],
	pages: {
		signIn: '/signin',
	}
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }