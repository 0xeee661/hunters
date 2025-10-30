'use client'
import s from './Map.module.scss'
import Image from 'next/image'
import lines from 'public/delete/img/lines4.png'
import map from 'public/delete/img/map.svg'
import mapMobile from 'public/delete/img/map_mobile.png'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export const MapSectionID = 'map'
export const Map = () => {
	const dataSource = [
		{
			sourceId: 1,
			original: '/delete/img/map.svg',
			width: '1024',
			height: '768',
		},
	]

	return (
		<section className={s.map} id={MapSectionID}>
			<p className={s.map__text}>
				Úbicados <br />
				en{' '}
				<span className={s.map__text__color}>
					la zona <br /> rosa
				</span>
			</p>
			<Image src={lines} alt="lines" className={s.map__lines} />
			<Image src={map} alt="map" className={s.map__map} />

			<Gallery dataSource={dataSource}>
				<Item sourceId={1}>
					{({ ref, open }) => (
						<Image
							src={mapMobile}
							alt="map"
							className={s.map__map_mobile}
							ref={ref}
							onClick={open}
						/>
					)}
				</Item>
			</Gallery>
		</section>
	)
}
