import { z } from 'zod'

export const envSchema = z.object({
	RESEND_API_KEY: z.string().optional(),
	NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().optional(),
	CONTENTFUL_SPACE_ID: z.string().optional(),
	CONTENTFUL_ACCESS_TOKEN: z.string().optional(),
})

export const env = envSchema.parse(process.env)
