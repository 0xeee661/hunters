import { Hero } from 'components/home/Hero/Hero'
import { Hero as RoomHero } from 'components/room/Hero/Hero'
import { Places } from 'components/home/Places/Places'
import { Spaces } from 'components/home/Spaces/Spaces'
import { Map } from 'components/home/Map/Map'
import { ScrollIndicator } from 'components/ScrollIndicator/ScrollIndicator'
import s from './page.module.scss'
import { Experiences } from 'components/home/Experiences/Experiences'
import Footer from '@/components/Footer/Footer'

const Home = async () => {
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
