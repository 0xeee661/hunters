'use client'
import Image from 'next/image'
import s from './page.module.scss'
import menu1 from '@/public/menu/menu1.jpg'
import menu2 from '@/public/menu/menu2.jpg'
// Usaremos rutas públicas para evitar advertencias de HMR con módulos estáticos
// Nota: evitamos importar rest.jpg porque Next intenta decodificar metadatos y el archivo puede no ser un JPEG válido.
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import Link from 'next/link'
import { WHATSAPP_LINK } from '@/lib/constants/app'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { TextSection } from '@/components/TextSection/TextSection'
import Footer from '@/components/Footer/Footer'

const desired = [
  '/menu/menu1.jpg',
  '/menu/menu2.jpg',
  '/menu/menu3.jpg',
  '/menu/menu4.jpg',
  '/menu/menu5.jpg',
  '/menu/menu6.jpg',
]
const textData = [
  {
    sys: { id: '1' },
    textInnerArea: " Un punto de encuentro donde el buen gusto se siente en cada detalle.En Linze, la gastronomía se mezcla con la energía de la música, los cócteles y las conversaciones que fluyen sin prisa. Creado para quienes disfrutan de los sabores bien hechos, las atmósferas relajadas y las experiencias que se sienten auténticas.Vení a probar, a brindar o simplemente a dejarte llevar.En Linze, el momento siempre se siente justo."
  }
]

const RestaurantPage = () => {
	return (
		<main className={s.restaurant}>
			<section className={s.restaurant__hero}>
				<h1 className={s.restaurant__hero__title}>
					<span className={s.restaurant__hero__title__color}>
            <Image src="/menu/linzeLogo.png" alt="Linze" width={200} height={200} />
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
					<source src="/menu/restauranteVideo.mp4" type="video/mp4" />
				</video>
			</section>
      <TextSection textData={textData} />
			<section className={s.restaurant__content}>
				<div className={s.restaurant__content__container}>
					<Image
						src={menu1}
						alt="Restaurante"
						className={s.restaurant__content__container__image}
					/>

					{/* Iconos sociales posicionados en la sección de contenido */}
					<div className={s.restaurant__content__social}>
						{/* <a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className={s.restaurant__content__social__icon}
							aria-label="Facebook"
						>
							<FaFacebookF />
						</a> */}
						<a
							href="https://www.instagram.com/linze.club/"
							target="_blank"
							rel="noopener noreferrer"
							className={s.restaurant__content__social__icon}
							aria-label="Instagram"
						>
							<FaInstagram />
						</a>
					{/*	<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className={s.restaurant__content__social__icon}
							aria-label="TikTok"
						>
							<SiTiktok />
						</a> */}
					</div>
				</div>
				<div className={s.restaurant__content__cards}>
					<Link
						href="/menu/Carta%20Linze%20club.pdf"
            target="_blank"
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
							// Lista de imágenes con dimensiones específicas para cada una
							const images = [
								{ src: '/menu/restaurant/rest1.png', w: 700, h: 600 },
								{ src: '/menu/restaurant/rest2.jpg', w: 600, h: 800 },
								{ src: '/menu/restaurant/rest3.jpg', w: 500, h: 500 },
								{ src: '/menu/restaurant/rest4.jpg', w: 550, h: 750 },
								{ src: '/menu/restaurant/rest5.jpg', w: 650, h: 450 },
								{ src: '/menu/restaurant/rest6.jpg', w: 500, h: 700 },
								{ src: '/menu/restaurant/rest7.jpg', w: 500, h: 550 },
								{ src: '/menu/restaurant/rest8.jpg', w: 600, h: 650 },
								{ src: '/menu/restaurant/rest9.jpg', w: 550, h: 600 },
								{ src: '/menu/restaurant/rest10.jpg', w: 500, h: 500 },
								{ src: '/menu/restaurant/rest11.jpg', w: 500, h: 550 },
								{ src: '/menu/restaurant/rest12.jpg', w: 600, h: 700 },
							]

							// Eliminar duplicados por src si es necesario
							const uniqueImages = images.filter((image, index, self) =>
								index === self.findIndex(img => img.src === image.src)
							)

							return uniqueImages
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
			<Footer />
		</main>
	)
}

export default RestaurantPage
