import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { TopBanner } from '@/components/TopBanner/TopBanner'
import { Header } from '@/components/Header/Header'
import FloatingButtons from '@/components/FloatingButtons/FloatingButtons'
import { Booking } from '@/components/Booking/Booking'
import { AppProvider } from '@/context/AppContext'

import '@/config/env'
import { GoogleAnalitics } from '@/components/Google/GoogleAnalitics'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '🏨 Hunters Hotel Medellín: La Mejor Experiencia Hotelera con Transporte al Aeropuerto, Desayuno Incluido y Estilo Boutique',
  description:'Descubre por qué Hunters Hotel by Jalo en Medellín redefine la hospitalidad con su concepto único. Ofrece transporte al aeropuerto, desayuno incluido, diseño moderno, política pet-friendly, cancelación flexible y ubicación ideal en El Poblado.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable}`}>
       
        <AppProvider>
          <TopBanner />
          <Header />
          <FloatingButtons />
          {children}
          <Booking />
          <GoogleAnalitics />
        </AppProvider>
      </body>
    </html>
  )
}
