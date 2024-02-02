import { error, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { Argon2id } from 'oslo/password'
import { generateId } from 'lucia'
import { registerSchema } from '$lib/utils/form-schema'
import { db, schema } from '$lib/server/db'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) redirect(302, '/')

	const form = await superValidate(registerSchema)
	return { form }
}

export const actions: Actions = {
	register: async (event) => {
		const form = await superValidate(event, registerSchema)

		if (!form.valid) return error(400, { message: 'check fields again' })

		const { email, password } = form.data
		const hashedPassword = await new Argon2id().hash(password)
		const generatedId = generateId(15)
		const userId = `rt-${generatedId}`

		try {
			await db.insert(schema.user).values({ id: userId, email, password: hashedPassword })
		} catch (err) {
			// TODO: handle error
			console.error(err)
			error(500, { message: 'An unknown error occurred' })
		}

		redirect(302, '/login')
	}
}
