import { superValidate } from 'sveltekit-superforms/server'
import { registerSchema } from '$lib/utils/form-schema'
import type { Actions, PageServerLoad } from './$types'
import { fail } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
	const form = await superValidate(registerSchema)
	return { form }
}

export const actions: Actions = {
	register: async (event) => {
		const form = await superValidate(event, registerSchema)
		console.log('REGISTER POST', form)

		if (!form.valid) return fail(400, form.errors)

		// TODO: look up user from db

		return { form }
	}
}
