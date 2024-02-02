import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { SECRET_DEV_DATABASE_CONNECTION, SECRET_DATABASE_AUTH_TOKEN } from '$env/static/private'

const client = createClient({
	url: SECRET_DEV_DATABASE_CONNECTION ?? '',
	authToken: SECRET_DATABASE_AUTH_TOKEN
})
export const db = drizzle(client)
