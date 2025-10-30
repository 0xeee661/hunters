'use client'

import Image from 'next/image'
import lines from 'public/delete/img/lines2.png'
import s from './Places.module.scss'
import { SlLocationPin } from 'react-icons/sl'
import { Button } from '@/components/ui/Button/Button'
import { AppContext } from '@/context/AppContext'
import { use } from 'react'

export const PlacesSectionID = 'places'
export const Places = () => {
	const { toggleBooking } = use(AppContext)

	return (
		<section className={s.places} id={PlacesSectionID}>
			<Image src={lines} alt="Lines" className={s.places__lines} />
			<div className={s.places__content}>
				<video
					autoPlay
					loop
					muted
					playsInline
					preload="none"
					className={s.places__content__video}
				>
					<source src="/delete/videos/places.mp4" type="video/mp4" />
				</video>
				<div className={s.places__content__overlay}>
					<SlLocationPin size={68} />
					<h2 className={s.places__content__overlay__text}>
						Cerca de{' '}
						<span className={s.places__content__overlay__text__bold}>
							lugares
						</span>
						<br />
						llenos de{' '}
						<span className={s.places__content__overlay__text__color}>
							AVENTURA
						</span>
					</h2>
					<Button
						onClick={toggleBooking}
						className={s.places__content__overlay__button}
					>
						RESERVAR AHORA
					</Button>
				</div>
			</div>
		</section>
	)
}
