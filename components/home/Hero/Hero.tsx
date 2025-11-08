'use client'

import { use } from 'react'
import s from './Hero.module.scss'
import { Button } from 'components/ui/Button/Button'
import { AppContext } from '@/context/AppContext'

export const HeroSectionID = 'hero'

type HomeHeroProps = {
  /** Desplazamiento vertical del bloque en mobile (ej: '-12%', '-60px') */
  mobileShiftY?: string
}

export const Hero = ({ mobileShiftY }: HomeHeroProps) => {
	const { toggleBooking } = use(AppContext)

	return (
		<section
			className={s.hero}
			id={HeroSectionID}
			style={
				mobileShiftY
					? ({ '--home-hero-mobile-shift-y': mobileShiftY } as React.CSSProperties)
					: undefined
			}
		>
			<div className={s.hero__content}>
				<h1 className={s.hero__content__title}>
					Nuevo Hotel en{' '}
					<span className={s.hero__content__title__bold}>Medellín</span> para
					<br />
					<span className={s.hero__content__title__color}>
						Cazadores
					</span> de{' '}
					<span className={s.hero__content__title__italic}>Experiencias</span>
				</h1>
				<Button onClick={toggleBooking}>RESERVAR AHORA</Button>
				<p className={s.hero__content__text}>En la calle 10</p>
			</div>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="none"
				className={s.hero__video}
			>
				<source src="/menu/hotel.mp4" type="video/mp4" />
			</video>
		</section>
	)
}
