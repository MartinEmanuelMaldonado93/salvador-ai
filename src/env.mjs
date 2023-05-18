import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const enviroments = createEnv({
	server: {
		MONGODB_URI: z.string().url(),
		MONGODB_KEY: z.string().min(10),
		MONGODB_DB: z.string().min(4),
		MONGODB_COLL: z.string().min(4),
		OPENAI_API_KEY_OFFICIAL:  z.string().min(1),
		OPENAI_API_KEY: z.string().min(1),
		OPENAI_URL: z.string().min(1),
		GOOGLE_CLIENT_SECRET: z.string().min(1),
		GOOGLE_CLIENT_ID: z.string().min(1),
	},
	client: {
		NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
	},
	runtimeEnv: {
		MONGODB_URI: process.env.MONGODB_URI,
		MONGODB_KEY: process.env.MONGODB_KEY,
		MONGODB_DB: process.env.MONGODB_DB,
		MONGODB_COLL: process.env.MONGODB_COLL,
		OPENAI_API_KEY_OFFICIAL: process.env.OPENAI_API_KEY_OFFICIAL,
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		OPENAI_URL: process.env.OPENAI_URL,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
	},
});
