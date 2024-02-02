import type { Config } from 'drizzle-kit'

export default {
	schema: './src/lib/server/db/schema.ts',
	driver: 'turso',
	dbCredentials: {
		url: process.env.SECRET_DEV_DATABASE_CONNECTION ?? '',
		authToken: process.env.SECRET_DATABASE_AUTH_TOKEN ?? ''
	},
	out: './drizzle'
} satisfies Config
