import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/db/schemas/',
	driver: 'better-sqlite',
	dbCredentials: {
		url: 'sqlite.db'
	}
} satisfies Config;
