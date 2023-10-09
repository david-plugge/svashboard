import { shortid } from '$lib/server/utils';
import type { InferSelectModel } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const favourites = sqliteTable('favourites', {
	id: text('id').primaryKey().$defaultFn(shortid),
	name: text('name').unique().notNull(),
	description: text('description'),
	repositoryUrl: text('repository_url').notNull(),
	repositoryBranch: text('repository_branch').notNull()
});

export type Application = InferSelectModel<typeof favourites>;
