'use client'
import s from './Footer.module.scss'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer__container}>
				{/* Redes sociales - izquierda */}
				<div className={s.footer__social}>
					<a
						href="https://www.facebook.com/p/Hunters-Concept-Hotel-100063919069916/"
						target="_blank"
						rel="noopener noreferrer"
						className={s.footer__social__icon}
						aria-label="Facebook"
					>
						<FaFacebookF />
					</a>
					<a
						href="https://www.instagram.com/huntersmedhotel"
						target="_blank"
						rel="noopener noreferrer"
						className={s.footer__social__icon}
						aria-label="Instagram"
					>
						<FaInstagram />
					</a>
				</div>

				{/* Políticas - centro */}
				<div className={s.footer__policies}>
					<Link href="/privacy" className={s.footer__policies__link}>
						Políticas de Privacidad
					</Link>
				</div>

				{/* Teléfono - derecha */}
				<div className={s.footer__contact}>
					<a href="tel:+5491123456789" className={s.footer__contact__phone}>
            +57 311 6810440
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
