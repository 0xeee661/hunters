import Image from 'next/image'
import lines from 'public/delete/img/lines3.png'
import s from './page.module.scss'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '@/lib/constants/app'

export default function ContactPage() {
	return (
		<main className={s.contact}>
			<Image src={lines} alt="Lines" className={s.contact__lines} />
			<div className={s.contact__content}>
				<ContactForm />
				<div className={s.contact__content__info}>
					<div className={s.contact__content__info__content}>
						<p className={s.contact__content__info__content__text}>
							Estamos aquí <br />
							<span className={s.contact__content__info__content__text__bold}>
								para escucharte
							</span>
						</p>
						<p className={s.contact__content__info__content__text}>
							Escribenos <br />
							<span className={s.contact__content__info__content__text__color}>
								Y CHARLEMOS
							</span>
						</p>
					</div>
					<div className={s.contact__content__info__social}>
						<a
							href="https://www.facebook.com/p/Hunters-Concept-Hotel-100063919069916/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://www.instagram.com/huntersmedhotel"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<FaInstagram />
						</a>
						<a
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Whatsapp"
						>
							<FaWhatsapp />
						</a>
					</div>
				</div>
			</div>
		</main>
	)
}
