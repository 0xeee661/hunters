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
		`https://graphql.contentful.com/content/v1/spaces/1pjko1eowomd`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer FfuoUZ_mulFz0FlT9QGHW7Ab0Z6vdm3aBBCpEXWJZLU`,
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

export const getTextInnerAreasData = async ({ preview, locale }: GetData) => {
	try {

		const response = await fetchGraphQL({
			query: textInnerAreasData,
			preview,
			variables: { locale },
		})


		const data = response.data?.textInnerAreasCollection?.items

		return data
	} catch (error) {
		throw error
	}
}
