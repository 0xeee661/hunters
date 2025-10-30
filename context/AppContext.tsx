'use client'
import { createContext, useState } from 'react'

interface AppContextType {
	isBookingOpen: boolean
	toggleBooking: () => void
}

export const AppContext = createContext<AppContextType>({
	isBookingOpen: false,
	toggleBooking: () => {},
})

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [isBookingOpen, setIsBookingOpen] = useState(false)

	const toggleBooking = () => {
		setIsBookingOpen(!isBookingOpen)
	}

	return (
		<AppContext value={{ isBookingOpen, toggleBooking }}>{children}</AppContext>
	)
}
