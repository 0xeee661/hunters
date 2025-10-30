import { z } from 'zod'

export const envSchema = z.object({
	RESEND_API_KEY: z.string(),
	NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string(),
	CONTENTFUL_SPACE_ID: z.string(),
	CONTENTFUL_ACCESS_TOKEN: z.string(),
})

export const env = envSchema.parse(process.env)
