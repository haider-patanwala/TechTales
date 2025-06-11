import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		CONTENTSTACK_HOST: z.string(),
		CONTENTSTACK_BRANCH: z.string(),
		CONTENTSTACK_ENVIRONMENT: z.string(),
		CONTENTSTACK_API_KEY: z.string(),
		CONTENTSTACK_DELIVERY_TOKEN: z.string(),
	},
	client: {},

	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		CONTENTSTACK_HOST: process.env.CONTENTSTACK_HOST,
		CONTENTSTACK_BRANCH: process.env.CONTENTSTACK_BRANCH,
		CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
		CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
		CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
});
