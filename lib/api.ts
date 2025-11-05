import { alliancesData, huntersBlogData, huntersBlogDataNoLocale, huntersBlogSimple, textInnerAreasData } from '@/graphql/queries'
import { gql } from 'graphql-tag'
import { Query } from '@/types/graphql/graphql'
import { getGqlString } from '@/utils/helpers/getGqlString'
import { DEFAULT_LOCALE, AVAILABLE_LOCALES, type SupportedLocale } from '@/config/locales'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

type GetData = {
	preview?: boolean
	locale?: SupportedLocale | string // Allow string for flexibility, but default to available locales
}

type GraphQLResponse<T = Query> = {
	data?: T
	errors?: Array<{ message: string; extensions?: Record<string, unknown> }>
}

/**
 * Fetches data from Contentful GraphQL API
 * @param query GraphQL document
 * @param variables Query variables (locale, preview, etc)
 * @param next Next.js fetch options
 * @returns GraphQL response with data and/or errors
 */
async function fetchGraphQL({
	query,
	next,
	variables,
}: {
	query: TypedDocumentNode
	variables?: { [key: string]: string | number | boolean | null | undefined }
	preview?: boolean
	next?: NextFetchRequestConfig
}): Promise<GraphQLResponse> {
	const spaceId = process.env.CONTENTFUL_SPACE_ID || '1pjko1eowomd'
	const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'FfuoUZ_mulFz0FlT9QGHW7Ab0Z6vdm3aBBCpEXWJZLU'

	const queryString = getGqlString(query)

	if (!queryString) {
		throw new Error('[GraphQL Error] Query string is empty. Check getGqlString utility.')
	}

	const response = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ query: queryString, variables }),
			next,
		}
	)

	const json: GraphQLResponse = await response.json()

	// ✅ Log GraphQL errors for debugging
	if (json.errors?.length) {
		console.error(
			'[Contentful GraphQL Error]',
			JSON.stringify(
				{
					errors: json.errors.map(e => ({ message: e.message })),
					variables,
					spaceId,
				},
				null,
				2
			)
		)
	}

	return json
}

export const getAlliancesData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: alliancesData,
		preview,
		variables: { locale },
	})
	return response.data?.allyCollection?.items
}

// Función muy simple para probar conexión básica
export const getHuntersBlogSimple = async () => {
	try {

		const response = await fetchGraphQL({
			query: huntersBlogSimple,
		})

		const data = response.data?.huntersBlogCollection?.items

		return data
	} catch (error) {
		throw error
	}
}

// Función de prueba para textInnerAreas sin locale
export const getTextInnerAreasDataNoLocale = async () => {
	try {

		const response = await fetchGraphQL({
			query: gql`
				query TextInnerAreasNoLocale {
					textInnerAreasCollection {
						items {
							sys { id }
							textInnerArea
						}
					}
				}
			`,
		})

		const data = response.data?.textInnerAreasCollection?.items

		return data
	} catch (error) {
		throw error
	}
}

// Función de prueba sin locale
export const getHuntersBlogDataNoLocale = async () => {
	try {

		const response = await fetchGraphQL({
			query: huntersBlogDataNoLocale,
		})

		const data = response.data?.huntersBlogCollection?.items

		return data
	} catch (error) {
		throw error
	}
}

export const getHuntersBlogData = async ({ preview, locale }: GetData) => {
	try {

		const response = await fetchGraphQL({
			query: huntersBlogData,
			preview,
			variables: { locale },
		})

		const data = response.data?.huntersBlogCollection?.items

		return data
	} catch (error) {
		throw error
	}
}

/**
 * Fetches textInnerArea entries from Contentful
 * @param locale Language locale - defaults to DEFAULT_LOCALE (en-US)
 * @param preview Whether to include unpublished content
 * @returns Array of text area items or null if error
 */
export const getTextInnerAreasData = async ({ 
	locale = DEFAULT_LOCALE,
	preview = false 
}: GetData = {}) => {
	try {
		const response = await fetchGraphQL({
			query: textInnerAreasData,
			variables: { locale, preview },
		})

		// ✅ Defensive check: if GraphQL has errors, log them
		if (response.errors?.length) {
			console.error(
				`[TextInnerAreasData] GraphQL errors for locale="${locale}":`,
				response.errors
			)
			return null
		}

		// ✅ Safe extraction of data
		const items = response.data?.textInnerAreasCollection?.items

		if (!items) {
			console.warn(
				`[TextInnerAreasData] No items found for locale="${locale}". Response:`,
				JSON.stringify(response.data, null, 2)
			)
			return null
		}

		console.log(
			`[TextInnerAreasData] ✅ Fetched ${items.length} items for locale="${locale}"`
		)

		return items
	} catch (error) {
		console.error('[TextInnerAreasData] Exception:', error)
		return null
	}
}
