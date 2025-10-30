import { getAlliancesData } from '@/lib/api'
import { Allies } from './page.client'

export const metadata = {
	title: 'Aliados By Hunters',
	description: 'Aliados By Hunters',
}

const AlliesPage = async () => {
	const data = await getAlliancesData({})

	return <Allies data={data} />
}

export default AlliesPage
