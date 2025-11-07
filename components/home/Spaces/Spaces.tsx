'use client'

import Image from 'next/image'
import lines from 'public/delete/img/lines1.png'
import s from './Spaces.module.scss'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import Link from 'next/link'
import { Button } from '@/components/ui/Button/Button'
import { AppContext } from '@/context/AppContext'
import { use } from 'react'

export const SpacesSectionID = 'spaces'
export const Spaces = ({ linesOpacity }: { linesOpacity?: number }) => {
	const { toggleBooking } = use(AppContext)

	return (
		<section className={s.spaces} id={SpacesSectionID}>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="none"
				className={s.spaces__video}
			>
				<source src="/delete/videos/spaces2.mp4" type="video/mp4" />
			</video>
			<div className={s.spaces__overlay} />
			<Image src={lines} alt="Lines" className={s.spaces__lines} style={linesOpacity !== undefined ? { opacity: linesOpacity } : undefined} />
			<div className={s.spaces__content}>
				<div className={s.spaces__content__container}>
					<p className={s.spaces__content__text}>
						Espacios{' '}
						<span className={s.spaces__content__text__bold}>versátiles</span>
					</p>
					<Link href="/room" className={s.spaces__content__container__button}>
						<IoArrowForwardCircleOutline
							size={68}
							className={s.spaces__content__container__button__icon}
						/>
					</Link>
				</div>
				<p className={s.spaces__content__text}>
					un{' '}
					<span className={s.spaces__content__text__color}>
						DISEÑO SOFISTICADO
					</span>
				</p>
				<Button href="/room" className={s.spaces__content__button}>
					CONOCER HABITACIONES
				</Button>
			</div>
			<Button onClick={toggleBooking} className={s.spaces__button}>
				RESERVAR AHORA
			</Button>
		</section>
	)
}
