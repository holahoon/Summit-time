import { z } from 'zod'

export const registerSchema = z.object({
	email: z.string().email({ message: 'check email format' }),
	password: z.string().min(8),
	confirmPassword: z.string().min(8)
})

export type RegisterSchema = typeof registerSchema
