'use client'

import React, { useEffect, useMemo, useState } from 'react'
import styles from './TopBanner.module.scss'

/**
 * TopBanner Component
 * Banner promocional que se muestra en la parte superior de todas las páginas
 * @component
 */
export const TopBanner: React.FC = () => {
  const messages = useMemo(
    () => [
      (
        <>
          Si encuentras una tarifa más baja recibe{' '}
          <span className={styles.highlight}>10%Off</span>
        </>
      ),
      (<>Cancelación gratuita</>),
    ],
    []
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 10000) // 10s
    return () => clearInterval(id)
  }, [messages.length])

  return (
    <div className={styles.topBanner}>
      <div className={styles.container}>
        <p className={styles.text}>
          {messages[index]}{' '}
          <a href="tel:+573116810440" className={styles.link}>
            LLamar
          </a>
        </p>
      </div>
    </div>
  )
}

