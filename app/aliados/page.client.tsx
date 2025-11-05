'use client'
import s from './page.module.scss'
import { IoArrowForwardCircleOutline, IoClose } from 'react-icons/io5'
import { Ally, Maybe } from '@/types/graphql/graphql'
import { useState } from 'react'
import { FaSquarePhone } from 'react-icons/fa6'
import {
	APIProvider,
	Map as MapGoogle,
	Marker,
} from '@vis.gl/react-google-maps'
import Footer from '@/components/Footer/Footer'

export const Allies = ({ data }: { data?: Maybe<Ally>[] }) => {
	const [currentAlly, setCurrentAlly] = useState<Maybe<Ally>>()

	const closeModal = () => setCurrentAlly(undefined)

	return (
		<main className={s.allies}>
			<section className={s.allies__hero}>
				<h1 className={s.allies__hero__title}>
					<span>Aliados</span>
					<span className={s.allies__hero__title__color}>By Hunters</span>
				</h1>
				<video
					autoPlay
					loop
					muted
					playsInline
					preload="none"
					className={s.allies__hero__video}
				>
					<source src="/delete/videos/restaurant.mp4" type="video/mp4" />
				</video>
			</section>
			<section className={s.allies__content}>
				<div className={s.allies__content__cards}>
					{data?.map(item => (
						<button
							key={item?.sys.id}
							className={s.allies__content__cards__card}
							style={{
								backgroundImage: `url(${item?.image?.url})`,
							}}
							onClick={() => setCurrentAlly(item)}
						>
							<span className={s.allies__content__cards__card__text}>
								{item?.name}
								<IoArrowForwardCircleOutline
									size={40}
									className={s.allies__content__cards__card__icon}
								/>
							</span>
						</button>
					))}
				</div>
			</section>
			{currentAlly && (
				<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
					<div className={s.allies__modal}>
						<div className={s.allies__modal__overlay} onClick={closeModal} />
						<div className={s.allies__modal__content}>
							<div className={s.allies__modal__content__right}>
								{currentAlly.logo?.url && (
									<div className={s.allies__modal__content__right__logo}>
										<img
											src={currentAlly.logo?.url}
											alt={`${currentAlly?.name} Logo`}
											className={s.allies__modal__content__right__logo__img}
										/>
									</div>
								)}
								{currentAlly.location?.lat && currentAlly.location?.lon && (
									<MapGoogle
										className={s.allies__modal__content__right__map}
										defaultCenter={{
											lat: currentAlly.location?.lat,
											lng: currentAlly.location?.lon,
										}}
										defaultZoom={18}
										scrollwheel={false}
										mapTypeControl={false}
										fullscreenControl={false}
										streetViewControl={false}
									>
										<Marker
											position={{
												lat: currentAlly.location?.lat,
												lng: currentAlly.location?.lon,
											}}
										/>
									</MapGoogle>
								)}
							</div>
							<div className={s.allies__modal__content__left}>
								{currentAlly.image?.url && (
									<img
										src={currentAlly.image?.url}
										alt={currentAlly?.name || ''}
										className={s.allies__modal__content__left__img}
									/>
								)}
								<div className={s.allies__modal__content__left__info}>
									{currentAlly.logo?.url && (
										<div className={s.allies__modal__content__left__info__logo}>
											<img
												src={currentAlly.logo?.url}
												alt={`${currentAlly?.name} Logo`}
												className={
													s.allies__modal__content__left__info__logo__img
												}
											/>
										</div>
									)}
									<p className={s.allies__modal__content__left__info__text1}>
										{currentAlly.description}
									</p>
									<p className={s.allies__modal__content__left__info__text2}>
										{currentAlly.benefit}
									</p>
									<div className={s.allies__modal__content__left__info__line} />
									<p className={s.allies__modal__content__left__info__phone}>
										<FaSquarePhone />
										{currentAlly.phone}
									</p>
									<p className={s.allies__modal__content__left__info__address}>
										{currentAlly.address}
									</p>
								</div>
							</div>

							<button
								onClick={closeModal}
								aria-label="Cerrar modal"
								className={s.allies__modal__content__close}
							>
								<IoClose />
							</button>
						</div>
					</div>
				</APIProvider>
			)}
    
    <Footer />

		</main>

    
	)
}
