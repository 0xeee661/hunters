import { gql } from 'graphql-tag'

export const alliancesData = gql`
	query AlliancesData($locale: String) {
		allyCollection(locale: $locale) {
			items {
				sys {
					id
				}
				name
				description
				benefit
				logo {
					url
				}
				image {
					url
				}
				phone
				address
				location {
					lat
					lon
				}
				category
			}
		}
	}
`

// Query muy simple para probar
export const huntersBlogSimple = gql`
	query HuntersBlogSimple {
		huntersBlogCollection {
			items {
				sys {
					id
				}
				title
			}
		}
	}
`

// Query sin locale para probar
export const huntersBlogDataNoLocale = gql`
	query HuntersBlogDataNoLocale {
		huntersBlogCollection {
			items {
				sys {
					id
				}
				title
				postWritter
				headerImage {
					url
					title
				}
				superiorParagraph
				middleImage {
					url
					title
				}
				authorMiddleImage
				inferiorParagraph
				bottomImage {
					url
					title
				}
			}
		}
	}
`

export const huntersBlogData = gql`
	query HuntersBlogData($locale: String) {
		huntersBlogCollection(locale: $locale) {
			items {
				sys {
					id
				}
				title
				postWritter
				headerImage {
					url
					title
				}
				superiorParagraph
				middleImage {
					url
					title
				}
				authorMiddleImage
				inferiorParagraph
				bottomImage {
					url
					title
				}
			}
		}
	}
`

export const textInnerAreasData = gql`
	query TextInnerAreasData($locale: String) {
		textInnerAreasCollection(locale: $locale) {
			items {
				sys {
					id
				}
				textInnerArea
			}
		}
	}
`
