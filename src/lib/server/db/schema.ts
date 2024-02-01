/**
 * Replace with Turso or Pocketbase
 * Remove packages:
 * @types/better-sqlite3
 * better-sqlite3
 */

import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable('user', {
	id: text('id').notNull().primaryKey(),
	// firstName: text('first_name'),
	// lastName: text('last_name'),
	email: text('email').unique()
})

export const sessionTable = sqliteTable('session', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: integer('expires_at').notNull()
})
