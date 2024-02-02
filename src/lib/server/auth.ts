import { Lucia } from 'lucia'
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle'
import { dev } from '$app/environment'
import { db } from './db'
import { session, user } from './db/schema'

export const adapter = new DrizzleSQLiteAdapter(db, session, user)

export const auth = new Lucia(adapter, {
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
		Lucia: typeof auth
		DatabaseUserAttributes: Omit<typeof user, 'id'>
	}
}
