'use client'
import s from './Booking.module.scss'
import DatePicker from 'react-datepicker'
import { forwardRef, use, useState } from 'react'
import { format, addDays, isAfter } from 'date-fns'
import { es } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import { AppContext } from '@/context/AppContext'
import { IoClose } from 'react-icons/io5'

export const Booking = () => {
	const { isBookingOpen, toggleBooking } = use(AppContext)
	type DateState = Date | undefined
	const initialDate = new Date()
	const formatString = 'yyyy-MM-dd'
	const [startDate, setStartDate] = useState<DateState>(initialDate)
	const [endDate, setEndDate] = useState<DateState>(addDays(initialDate, 1))
	const formatStartDay = startDate && format(startDate, formatString)
	const formatEndDate = endDate && format(endDate, formatString)
	const [promoCode, setPromoCode] = useState('')

	return isBookingOpen ? (
		<div className={s.container}>
			<div className={s.container__overlay} onClick={toggleBooking} />
			<div className={s.booking}>
				<div className={s.booking__inputs}>
					<div className={s.booking__inputs__container}>
						<span className={s.booking__inputs__container__text}>CHEK IN</span>
						<DatePicker
							selected={startDate}
							onChange={date => {
								setStartDate(date || undefined)
								if (date && endDate && isAfter(date, endDate)) {
									setEndDate(addDays(date, 1))
								}
							}}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							showDisabledMonthNavigation
							minDate={initialDate}
							customInput={<CustomInput />}
							locale={es}
						/>
					</div>
					<div className={s.booking__inputs__container}>
						<span className={s.booking__inputs__container__text}>CHEK OUT</span>
						<DatePicker
							selected={endDate}
							onChange={date => {
								setEndDate(date || undefined)
							}}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
							showDisabledMonthNavigation
							customInput={<CustomInput />}
						/>
					</div>
				</div>
				<input
					type="text"
					className={s.booking__input}
					placeholder="CÓDIGO PROMOCIONAL"
					value={promoCode}
					onChange={e => setPromoCode(e.target.value)}
				/>
				<a
					href={`https://hotels.cloudbeds.com/en/reservation/O1Cjhd?checkin=${formatStartDay}&checkout=${formatEndDate}${
						promoCode ? `&promo=${promoCode}` : ''
					}`}
					target="_blank"
					rel="noopener noreferrer"
					className={s.booking__button}
				>
					RESERVA AHORA
				</a>
			</div>
			<button className={s.container__close} onClick={toggleBooking}>
				<IoClose size={34} />
			</button>
		</div>
	) : null
}

interface CustomInputProps {
	value?: string
	onClick?: () => void
}
const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
	({ value, onClick }, ref) => {
		const date = value && new Date(value)
		const day = date && format(date, 'd', { locale: es })
		const month = date && format(date, 'MMMM', { locale: es }).toUpperCase()

		return (
			<button
				onClick={onClick}
				ref={ref}
				className={s.booking__inputs__container__item}
			>
				<span className={s.booking__inputs__container__item__day}>{day}</span>
				<span className={s.booking__inputs__container__item__text}>
					{month}
				</span>
			</button>
		)
	}
)

CustomInput.displayName = 'CustomInput'
