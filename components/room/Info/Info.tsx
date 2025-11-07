'use client'
import Image from 'next/image'
import s from './Info.module.scss'
import { Button } from '@/components/ui/Button/Button'
import { use } from 'react'
import { AppContext } from '@/context/AppContext'
import lines from 'public/delete/img/lines6.png'

export const Info = () => {
	const { toggleBooking } = use(AppContext)

	return (
		<section className={s.info}>
			<Image src={lines} alt="Lines" className={s.info__lines} />
			<div className={s.info__content}>
				<div className={s.info__content__title}>
					<p className={s.info__content__title__text}>
						“Estética <br />
						<span className={s.info__content__title__text__bold}>
							contemporánea
						</span>
					</p>
					<p className={s.info__content__title__text}>
						y confort <br className={s.info__content__title__text__br} />
						<span className={s.info__content__title__text__color}>
							ABSOLUTO”
						</span>
					</p>
				</div>
				<p className={s.info__content__text}>
        En Hotel Hunters, nuestras habitaciones tienen diseño modero 
        y espacios amplios que te brindarán comodidad sin límites. 
        Cuentan con una cama King Size, baño con ducha de agua caliente, 
        Smart TV de 50&quot; con conexión por cable, aire acondicionado, 
        caja fuerte digital, escritorio, Internet por Wifi y 
        otras amenidades que harán de tu paso por Medellín, 
        una experiencia insuperable.
				</p>
				
				<div className={s.info__amenities} aria-label="Amenidades">
					<h4 className={s.info__content__text}>Amenidades</h4>
					<ul className={s.info__content__text}>
						<li>Nevera</li>
						<li>Caja de seguridad</li>
						<li>Aire acondicionado</li>
						<li>Televisor de 52” con cable</li>
						<li>2 botellas de agua de cortesía</li>
						<li>Estación de café y té</li>
						<li>Secador de cabello</li>
						<li>Plancha para ropa</li>
					</ul>
				</div>
				<Button className={s.info__content__button} onClick={toggleBooking}>
					RESERVAR AHORA
				</Button>
			</div>
			<div className={s.info__photo}>
				<Image
					src="/delete/img/room1.jpg"
					alt="room"
					width={1364}
					height={910}
					className={s.info__photo__image}
				/>
				<Button className={s.info__photo__button} onClick={toggleBooking}>
					RESERVAR AHORA
				</Button>
			</div>
		</section>
	)
}
