'use client'
import Image from 'next/image'
import s from './page.module.scss'
import menu1 from '@/public/menu/menu1.jpg'
import menu2 from '@/public/menu/menu2.jpg'
// Usaremos rutas públicas para evitar advertencias de HMR con módulos estáticos
// Nota: evitamos importar rest.jpg porque Next intenta decodificar metadatos y el archivo puede no ser un JPEG válido.
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import Link from 'next/link'
import { WHATSAPP_LINK } from '@/lib/constants/app'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const RestaurantPage = () => {
	return (
		<main className={s.restaurant}>
			<section className={s.restaurant__hero}>
				<h1 className={s.restaurant__hero__title}>
					<span>Restaurante</span>
					<span className={s.restaurant__hero__title__color}>By Hunters</span>
					<span className={s.restaurant__hero__title__subtitle}>
						Proximamente
					</span>
				</h1>
				<video
					autoPlay
					loop
					muted
					playsInline
					preload="none"
					className={s.restaurant__hero__video}
				>
					<source src="/menu/restaurante_video.mp4" type="video/mp4" />
				</video>
			</section>
			<section className={s.restaurant__content}>
				<div className={s.restaurant__content__container}>
					<Image
						src={menu1}
						alt="Restaurante"
						className={s.restaurant__content__container__image}
					/>
				</div>
				<div className={s.restaurant__content__cards}>
					<Link
						href="/restaurant"
						/* target="_blank"
						rel="noopener noreferrer" */
						className={s.restaurant__content__cards__card}
						style={{
							backgroundImage: `url(${menu2.src})`,
						}}
					>
						<span className={s.restaurant__content__cards__card__text}>
							MENÚ{' '}
							<IoArrowForwardCircleOutline
								size={40}
								className={s.restaurant__content__cards__card__icon}
							/>
						</span>
					</Link>
					<Link
						href={WHATSAPP_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className={s.restaurant__content__cards__card}
						style={{
							// usar ruta pública directa para evitar decodificación
							backgroundImage: "url('/menu/menu3.jpg')",
						}}
					>
						<span className={s.restaurant__content__cards__card__text}>
							RESERVA{' '}
							<IoArrowForwardCircleOutline
								size={40}
								className={s.restaurant__content__cards__card__icon}
							/>
						</span>
					</Link>
					<Gallery>
						{(() => {
							// Lista deseada sin repetidos; usar Set para deduplicar por src
							const desired = [
								'/menu/menu3.jpg',
								'/menu/menu5.jpg',
								'/menu/menu6.jpg',
								'/menu/menu7.jpg',
								'/menu/menu8.jpg',
								'/menu/menu9.jpg',
								'/menu/menu10.jpg',
							]
							const unique = Array.from(new Set(desired))
							// map a objetos con dimensiones razonables; Photoswipe mantiene proporciones sin estirar
							// usar dimensiones de menu2.jpg para todos los ítems
							return unique.map((src) => ({
								src,
								w: 700,
								h: 800,
							}))
						})().map((img, index) => (
							<Item key={index} original={img.src} thumbnail={img.src} width={img.w} height={img.h}>
								{({ ref, open }) =>
									index === 0 ? (
										<button
											ref={ref}
											onClick={open}
											className={s.restaurant__content__cards__card}
											style={{ backgroundImage: "url('/menu/menu10.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
										>
											<span className={s.restaurant__content__cards__card__text}>
												GALERÍA{' '}
												<IoArrowForwardCircleOutline size={40} className={s.restaurant__content__cards__card__icon} />
											</span>
										</button>
									) : (
										<div ref={ref} style={{ position: 'absolute' }} />
									)
								}
							</Item>
						))}
					</Gallery>
				</div>
			</section>
		</main>
	)
}

export default RestaurantPage
