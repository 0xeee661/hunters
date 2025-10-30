'use server'
import { Resend } from 'resend'

const resend =
	process.env.RESEND_API_KEY && new Resend(process.env.RESEND_API_KEY)

export const sendContactInfo = async ({
	name,
	phone,
	email,
	observations,
}: {
	name: string
	phone: string
	email: string
	observations: string
}) => {
	if (!resend) {
		return {
			error: 'Resend not configured',
		}
	}

	const { error } = await resend.emails.send({
		from: 'Formulario de Contacto <formulario@hunters.com.co>',
		to: 'comercial@hunters.com.co',
		subject: 'Nueva información de contacto recibida',
		react: (
			<div>
				<h1>Información de contacto</h1>
				<p>
					<strong>Nombre:</strong> {name}
				</p>
				<p>
					<strong>Celular:</strong> {phone}
				</p>
				<p>
					<strong>Correo:</strong> {email}
				</p>
				<p>
					<strong>Observaciones:</strong> {observations}
				</p>
			</div>
		),
	})

	return error ? { error } : { success: true }
}
