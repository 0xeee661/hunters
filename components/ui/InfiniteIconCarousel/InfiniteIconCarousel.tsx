'use client'

import s from './InfiniteIconCarousel.module.scss'
import { ReactNode, memo, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'

export type IconItem = {
    label: string
    href?: string
    icon?: ReactNode
}

type Props = {
	items: IconItem[]
	/**
	 * Total duration in seconds for one full loop. Larger value = slower.
	 */
	durationSeconds?: number
}

/**
 * Horizontally scrolls a list of icon cards infinitely from right to left.
 * Content is duplicated to create a seamless loop.
 */
export const InfiniteIconCarousel = memo(({ items, durationSeconds = 18 }: Props) => {
    const trackRef = useRef<HTMLUListElement | null>(null)
    const xRef = useRef<number>(0)
    const lastTsRef = useRef<number | null>(null)
    const rafRef = useRef<number | null>(null)

    // Duplicate items to ensure enough content to loop smoothly
    const loopItems = useMemo(() => [...items, ...items], [items])

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const computeGap = () => {
            const style = window.getComputedStyle(track)
            const gap = parseFloat(style.columnGap || '0') || 0
            return gap
        }

        const speedPxPerSec = 0.5 * (track.scrollWidth / Math.max(durationSeconds, 1))
        let gapPx = computeGap()

        const step = (ts: number) => {
            if (lastTsRef.current == null) {
                lastTsRef.current = ts
                rafRef.current = requestAnimationFrame(step)
                return
            }
            const dt = (ts - lastTsRef.current) / 1000
            lastTsRef.current = ts

            xRef.current -= speedPxPerSec * dt
            track.style.transform = `translateX(${xRef.current}px)`

            // Move first items to the end when fully out of view
            let first = track.firstElementChild as HTMLElement | null
            while (first) {
                const firstWidth = first.offsetWidth
                if (Math.abs(xRef.current) >= firstWidth + gapPx) {
                    track.appendChild(first)
                    xRef.current += firstWidth + gapPx
                    track.style.transform = `translateX(${xRef.current}px)`
                    first = track.firstElementChild as HTMLElement | null
                    continue
                }
                break
            }

            rafRef.current = requestAnimationFrame(step)
        }

        rafRef.current = requestAnimationFrame(step)
        const resizeObserver = new ResizeObserver(() => {
            gapPx = computeGap()
        })
        resizeObserver.observe(track)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            resizeObserver.disconnect()
            lastTsRef.current = null
        }
    }, [durationSeconds, loopItems.length])

    return (
        <div className={s.carousel}>
            <div className={s.marquee} aria-hidden={items.length === 0}>
                <ul className={s.carousel__track} aria-label="icon-cards" ref={trackRef}>
                    {loopItems.map((item, index) => {
                        const originalIndex = index % items.length
                        const isDark = originalIndex % 2 === 1
                        const cardClassName = isDark ? `${s.card} ${s['card--dark']}` : s.card
                        return (
                        <li key={`${item.label}-${index}`} className={cardClassName}>
                            {item.href ? (
                                <Link href={item.href} className={s.card__link} prefetch={false}>
                                    {item.icon ? <span className={s.card__icon}>{item.icon}</span> : null}
                                    <span className={s.card__label}>{item.label}</span>
                                </Link>
                            ) : (
                                <>
                                    {item.icon ? <span className={s.card__icon}>{item.icon}</span> : null}
                                    <span className={s.card__label}>{item.label}</span>
                                </>
                            )}
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    )
})

InfiniteIconCarousel.displayName = 'InfiniteIconCarousel'


