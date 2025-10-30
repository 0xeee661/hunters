import { alliancesData, huntersBlogData, huntersBlogDataNoLocale, huntersBlogSimple, textInnerAreasData } from '@/graphql/queries'
import { gql } from 'graphql-tag'
import { Query } from '@/types/graphql/graphql'
import { getGqlString } from '@/utils/helpers/getGqlString'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

type GetData = {
	preview?: boolean
	locale?: string
}

async function fetchGraphQL({
	query,
	next,
	variables,
}: {
	query: TypedDocumentNode
	variables?: { [key: string]: string | number | boolean | null | undefined }
	preview?: boolean
	next?: NextFetchRequestConfig
}): Promise<{
	data: Query
}> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({ query: getGqlString(query), variables }),
			next,
		}
	).then(response => response.json())
}

export const getAlliancesData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: alliancesData,
		preview,
		variables: { locale },
	})
	return response.data.allyCollection?.items
}

// Función muy simple para probar conexión básica
export const getHuntersBlogSimple = async () => {
	try {
		console.log('API: Testing very simple hunters-blog query')

		const response = await fetchGraphQL({
			query: huntersBlogSimple,
		})

		console.log('API: Simple response received')
		console.log('API: Simple response data:', response.data)

		const data = response.data?.huntersBlogCollection?.items
		console.log('API: Simple extracted items:', data)

		return data
	} catch (error) {
		console.error('API: Error in getHuntersBlogSimple:', error)
		throw error
	}
}

// Función de prueba para textInnerAreas sin locale
export const getTextInnerAreasDataNoLocale = async () => {
	try {
		console.log('API: Testing textInnerAreas without locale')

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

		console.log('API: No locale TextInnerAreas response:', response.data)

		const data = response.data?.textInnerAreasCollection?.items
		console.log('API: No locale extracted textInnerAreas items:', data)

		return data
	} catch (error) {
		console.error('API: Error in getTextInnerAreasDataNoLocale:', error)
		throw error
	}
}

// Función de prueba sin locale
export const getHuntersBlogDataNoLocale = async () => {
	try {
		console.log('API: Testing hunters-blog data without locale')

		const response = await fetchGraphQL({
			query: huntersBlogDataNoLocale,
		})

		console.log('API: No locale response received')
		console.log('API: No locale response data:', response.data)

		const data = response.data?.huntersBlogCollection?.items
		console.log('API: No locale extracted items:', data)

		return data
	} catch (error) {
		console.error('API: Error in getHuntersBlogDataNoLocale:', error)
		throw error
	}
}

export const getHuntersBlogData = async ({ preview, locale }: GetData) => {
	try {
		console.log('API: Fetching hunters-blog data with params:', { preview, locale })

		const response = await fetchGraphQL({
			query: huntersBlogData,
			preview,
			variables: { locale },
		})

		const data = response.data?.huntersBlogCollection?.items
		console.log('API: Extracted items:', data)

		return data
	} catch (error) {
		console.error('API: Error in getHuntersBlogData:', error)
		throw error
	}
}

export const getTextInnerAreasData = async ({ preview, locale }: GetData) => {
	try {
		console.log('API: Fetching text-inner-areas data with params:', { preview, locale })

		const response = await fetchGraphQL({
			query: textInnerAreasData,
			preview,
			variables: { locale },
		})


		const data = response.data?.textInnerAreasCollection?.items
		console.log('API: Extracted textInnerAreas items:', data)

		return data
	} catch (error) {
		console.error('API.: Error in getTextInnerAreasData:', error)
		throw error
	}
}
