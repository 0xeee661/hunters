'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button/Button'
import s from './ContactForm.module.scss'
import { useState } from 'react'
import { sendContactInfo } from '@/lib/server/actions/sendContactInfo'

interface FormData {
	name: string
	email: string
	phone: string
	observations: string
}

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormData>()
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	const onSubmit = handleSubmit(async info => {
		const res = await sendContactInfo(info)
		if (res.error) {
			setError(true)
		} else {
			setSuccess(true)
		}
	})

	return (
		<form className={s.contact_form} onSubmit={onSubmit}>
			{error && (
				<p className={s.contact_form__error}>
					Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.
				</p>
			)}
			{success ? (
				<p className={s.contact_form__success}>Gracias por tu mensaje.</p>
			) : (
				<>
					<label className={s.contact_form__label}>
						<span className={s.contact_form__label__text}>Nombre *</span>
						<input
							{...register('name', { required: 'El nombre es requerido' })}
							type="text"
							className={s.contact_form__label__input}
							disabled={isSubmitting}
						/>
						{errors.name && (
							<span className={s.contact_form__label__error}>
								{errors.name.message}
							</span>
						)}
					</label>
					<label className={s.contact_form__label}>
						<span className={s.contact_form__label__text}>Correo *</span>
						<input
							{...register('email', { required: 'El correo es requerido' })}
							type="email"
							className={s.contact_form__label__input}
							disabled={isSubmitting}
						/>
						{errors.email && (
							<span className={s.contact_form__label__error}>
								{errors.email.message}
							</span>
						)}
					</label>
					<label className={s.contact_form__label}>
						<span className={s.contact_form__label__text}>Celular *</span>
						<input
							{...register('phone', { required: 'El teléfono es requerido' })}
							type="tel"
							className={s.contact_form__label__input}
							disabled={isSubmitting}
						/>
						{errors.phone && (
							<span className={s.contact_form__label__error}>
								{errors.phone.message}
							</span>
						)}
					</label>
					<label className={s.contact_form__label}>
						<span className={s.contact_form__label__text}>Obervaciones *</span>
						<textarea
							{...register('observations', {
								required: 'Las observaciones son requeridas',
							})}
							className={s.contact_form__label__textarea}
							disabled={isSubmitting}
						/>
						{errors.observations && (
							<span className={s.contact_form__label__error}>
								{errors.observations.message}
							</span>
						)}
					</label>
					<Button
						className={s.contact_form__button}
						type="submit"
						disabled={success || isSubmitting}
					>
						Enviar
					</Button>
				</>
			)}
		</form>
	)
}
