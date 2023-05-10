import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		MONGODB_URI: z.string().url(),
		MONGODB_KEY: z.string().min(10),
		MONGODB_COLL: z.string().min(4),
		MONGODB_DB: z.string().min(4),
		OPENAI_API_KEY: z.string().min(1),
	},
	client: {
		NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
	},
	runtimeEnv: {
		MONGODB_URI: process.env.MONGODB_URI,
		MONGODB_KEY: process.env.MONGODB_KEY,
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
	},
});
