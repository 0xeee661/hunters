'use client'
import { useEffect, useRef, useState, useMemo } from 'react'
import s from './ScrollIndicator.module.scss'
import { HeroSectionID } from '../home/Hero/Hero'
import { PlacesSectionID } from '../home/Places/Places'
import { SpacesSectionID } from '../home/Spaces/Spaces'
import { MapSectionID } from '../home/Map/Map'
import { ExperiencesSectionID } from '../home/Experiences/Experiences'
import { HeroRoomSectionID } from '../room/Hero/Hero'

export const ScrollIndicator = () => {
	const [activeSection, setActiveSection] = useState(0)
	const observerRef = useRef<IntersectionObserver | null>(null)
	const sectionIds = useMemo(
		() => [
			HeroSectionID,
			HeroRoomSectionID,
			SpacesSectionID,
			PlacesSectionID,
			MapSectionID,
			ExperiencesSectionID,
		],
		[]
	)

	useEffect(() => {
		// Clean up previous observer if it exists
		if (observerRef.current) {
			observerRef.current.disconnect()
		}

		// Create a new Intersection Observer
		observerRef.current = new IntersectionObserver(
			entries => {
				// Find the entry with the highest intersection ratio
				const visibleEntry = entries.reduce(
					(max, entry) =>
						entry.intersectionRatio > max.intersectionRatio ? entry : max,
					{ intersectionRatio: 0 } as IntersectionObserverEntry
				)

				if (visibleEntry.target && visibleEntry.intersectionRatio > 0.5) {
					// Get the index of the visible section
					const index = sectionIds.findIndex(
						id => id === visibleEntry.target.id
					)
					if (index !== -1) {
						setActiveSection(index)
					}
				}
			},
			{
				root: null, // viewport
				rootMargin: '0px',
				threshold: [0.5, 0.75], // Trigger when section is at least 50% visible
			}
		)

		// Observe all sections
		sectionIds.forEach(id => {
			const element = document.getElementById(id)
			if (element) {
				observerRef.current?.observe(element)
			}
		})

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [sectionIds])

	return (
		<div className={s.scroll_indicator}>
			{sectionIds.map((_, index) => {
				const isActive = index === activeSection
				const id = sectionIds[index]

				return (
					<button
						key={id}
						className={`${s.scroll_indicator__item} ${
							isActive ? s.active : ''
						}`}
						aria-label={`Ir a la sección ${index + 1}`}
						onClick={e => {
							e.preventDefault()
							document
								.getElementById(id)
								?.scrollIntoView({ behavior: 'smooth' })
						}}
					></button>
				)
			})}
		</div>
	)
}
