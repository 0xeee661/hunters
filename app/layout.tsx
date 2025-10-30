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
  title: 'Hunters',
  description: 'Un nuevo proyecto hotelero',
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
