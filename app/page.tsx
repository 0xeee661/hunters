import { Hero } from 'components/home/Hero/Hero'
import { Hero as RoomHero } from 'components/room/Hero/Hero'
import { Places } from 'components/home/Places/Places'
import { Spaces } from 'components/home/Spaces/Spaces'
import { Map } from 'components/home/Map/Map'
import { ScrollIndicator } from 'components/ScrollIndicator/ScrollIndicator'
import s from './page.module.scss'
import { Experiences } from 'components/home/Experiences/Experiences'
import Footer from '@/components/Footer/Footer'
import { TextSection } from '@/components/TextSection/TextSection'
import { getTextInnerAreasData } from '@/lib/api'

/**
 * Home Page - Server Component
 * Fetches text data from Contentful and maps to TextSection components
 * Note: Uses default locale (en-US) - Contentful space only has en-US locale configured
 */
const Home = async () => {
	// ✅ Fetch data from GraphQL (uses en-US by default)
	const textAreasData = await getTextInnerAreasData()

	// ✅ Safe destructuring with default null values
	const [firstTextSection = null, secondTextSection = null] = textAreasData ?? []

	// ✅ Map individual items to component-compatible format
	const firstTextSectionData = firstTextSection ? [firstTextSection] : null
	const secondTextSectionData = secondTextSection ? [secondTextSection] : null

	if (textAreasData) {
	}

	return (
		<main className={s.home}>
			<Hero />
			<TextSection textData={firstTextSectionData} lineHeight={1.8}/>
			<RoomHero />
			<Spaces />
			<TextSection textData={secondTextSectionData} /> 
			<Places />
			<Map />
			<Experiences />
			<ScrollIndicator />
			<Footer />
		</main>
	)
}

export default Home
