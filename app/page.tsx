import { Hero } from 'components/home/Hero/Hero'
import { Hero as RoomHero } from 'components/room/Hero/Hero'
import { Places } from 'components/home/Places/Places'
import { Spaces } from 'components/home/Spaces/Spaces'
import { Map } from 'components/home/Map/Map'
import { ScrollIndicator } from 'components/ScrollIndicator/ScrollIndicator'
import s from './page.module.scss'
import { Experiences } from 'components/home/Experiences/Experiences'
import { TextSection } from '@/components/TextSection/TextSection'
import { getTextInnerAreasDataNoLocale } from '@/lib/api'
import Footer from '@/components/Footer/Footer'

const Home = async () => {
	// Obtener datos de textInnerAreas sin locale
	const testDataNoLocale = await getTextInnerAreasDataNoLocale()

	// Filtrar nulls para asegurar compatibilidad de tipos
	const textInnerAreasData = testDataNoLocale?.filter((item): item is NonNullable<typeof item> => item !== null) || []

	// Preparar data para cada TextSection - índice 0 para el primero, índice 1 para el segundo
	const firstTextSectionData = textInnerAreasData?.[0] ? [textInnerAreasData[0]] : []
	const secondTextSectionData = textInnerAreasData?.[1] ? [textInnerAreasData[1]] : []
	return (
		<main className={s.home}>
			<Hero />
			{/* <TextSection textData={firstTextSectionData} /> */}
			<RoomHero />
			<Spaces />
      {/* <TextSection textData={secondTextSectionData} /> */}
			<Places />
			<Map />
			<Experiences />
			<ScrollIndicator />
      <Footer />
		</main>
	)
}

export default Home
