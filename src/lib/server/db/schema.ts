import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
	id: text('id').notNull().primaryKey().unique().notNull(),
	email: text('email').unique().notNull(),
	password: text('password'),
	createdAt: text('createdAt').default(sql`CURRENT_DATE`)
	// TODO: provider (oAuth)
})

export const session = sqliteTable('session', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at').notNull()
})
