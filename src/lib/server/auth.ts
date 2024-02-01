import { Lucia } from 'lucia'
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle'
import { dev } from '$app/environment'
import { db } from './db'
import { sessionTable, userTable } from './db/schema'

export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable)

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes(databaseUserAttributes) {
		return {
			// firstName: databaseUserAttributes.firstName,
			// lastName: databaseUserAttributes.lastName,
			email: databaseUserAttributes.email
		}
	}
})

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia
		DatabaseUserAttributes: Omit<typeof userTable, 'id'>
	}
}
