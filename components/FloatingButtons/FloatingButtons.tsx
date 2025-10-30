import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '@/lib/constants/app'
import s from './FloatingButtons.module.scss'
import Script from 'next/script'

const FloatingButtons = () => {
	return (
		<>
			<a
				href={WHATSAPP_LINK}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="WhatsApp"
				className={s.floating_buttons__whatsapp}
				id="whatsapp-button"
			>
				<FaWhatsapp />
			</a>
			<Script
				id="script-infochat"
				src="https://cdn.asksuite.com/infochat.js?dataConfig=https://control.asksuite.com/api/companies/hunters-hotel-jalo-rent"
			/>
		</>
	)
}

export default FloatingButtons
