'use client'
import Image from 'next/image'
import lines from 'public/delete/img/lines5.png'
import s from './Experiences.module.scss'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import Link from 'next/link'
import { Button } from '@/components/ui/Button/Button'
import { use } from 'react'
import { AppContext } from '@/context/AppContext'

export const ExperiencesSectionID = 'experiences'
export const Experiences = () => {
	const { toggleBooking } = use(AppContext)
	return (
		<section className={s.experiences} id={ExperiencesSectionID}>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="none"
				className={s.experiences__video}
			>
				<source src="/delete/videos/experiences.mp4" type="video/mp4" />
			</video>
			<div className={s.experiences__overlay} />
			<Image src={lines} alt="Lines" className={s.experiences__lines} />
			<div className={s.experiences__content}>
				<div className={s.experiences__content__container}>
					<p className={s.experiences__content__text}>
						Experiencias{' '}
						<span className={s.experiences__content__text__bold}>que</span>
					</p>
					<Link
						href="/aliados"
						className={s.experiences__content__container__button}
					>
						<IoArrowForwardCircleOutline
							size={68}
							className={s.experiences__content__container__button__icon}
						/>
					</Link>
				</div>
				<p className={s.experiences__content__text}>
					<span className={s.experiences__content__text__color}>
						CONECTAN CONTIGO
					</span>
				</p>
				<Button href="/aliados" className={s.experiences__content__button}>
					CONOCER NUESTROS ALIADOS
				</Button>
			</div>
			<Button onClick={toggleBooking} className={s.experiences__button}>
				RESERVAR AHORA
			</Button>
		</section>
	)
}
