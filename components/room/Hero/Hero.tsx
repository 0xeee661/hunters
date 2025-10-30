'use client'
import { Button } from '@/components/ui/Button/Button'
import s from './Hero.module.scss'
import Image from 'next/image'
import { AppContext } from '@/context/AppContext'
import { use, useRef } from 'react'
import type { MutableRefObject, MouseEvent as ReactMouseEvent } from 'react'
import Slider, { Settings } from 'react-slick'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { InfiniteIconCarousel } from '@/components/ui/InfiniteIconCarousel/InfiniteIconCarousel'

const images = [
	{ src: '/delete/img/room1.jpg', width: 1364, height: 910 },
	{ src: '/delete/img/room2.jpg', width: 606, height: 910 },
	{ src: '/delete/img/room3.jpg', width: 1364, height: 910 },
	{ src: '/delete/img/room4.jpg', width: 1364, height: 910 },
	{ src: '/delete/img/room5.jpg', width: 1333, height: 890 },
	{ src: '/delete/img/room6.jpg', width: 1334, height: 890 },
]

type ArrowProps = {
	className: string
	style: React.CSSProperties
	onClick: () => void
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
	return (
		<IoIosArrowForward
			className={className}
			style={style}
			onClick={onClick}
			color="white"
		/>
	)
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
	return (
		<IoIosArrowBack
			className={className}
			style={style}
			onClick={onClick}
			color="white"
		/>
	)
}

export const HeroRoomSectionID = 'room-hero'
export const Hero = () => {
	const { toggleBooking } = use(AppContext)
    const openersRef = useRef<Array<(() => void) | undefined>>([])

	const iconItems = [
		{ label: 'hotel', href: '/hotel' },
		{ label: 'restaurante', href: '/restaurant' },
		{ label: 'rooftop', href: '/rooftop' },
		{ label: 'aliados', href: '/aliados' },
	]
	const settings: Settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow className="" style={{}} onClick={() => {}} />,
		prevArrow: <SamplePrevArrow className="" style={{}} onClick={() => {}} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<section className={s.hero} id={HeroRoomSectionID}>
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="none"
				className={s.hero__video}
			>
				<source src="/delete/videos/room.mp4" type="video/mp4" />
			</video>
			<h1 className={s.hero__title}>
				Conéctate <span className={s.hero__title__italic}>con espacios</span>
				<br />
				que te <span className={s.hero__title__color}>INSPIRAN</span>
			</h1>
			<Button onClick={toggleBooking} className={s.hero__button}>
				RESERVAR AHORA
			</Button>
            <Slider {...settings} className={s.hero__slider}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        onClick={() => openersRef.current[index]?.()}
                        src={image.src}
                        alt={`photo-${index + 1}`}
                        width={178}
                        height={169}
                        className={s.hero__slider__item}
                    />
                ))}
            </Slider>
            <Gallery
                withCaption
                options={{ bgOpacity: 0.95, showHideOpacity: true, wheelToZoom: true }}
            >
                <div style={{ display: 'none' }}>
                    {images.map((image, index) => (
                        <Item
                            key={`pswp-${index}`}
                            original={image.src}
                            thumbnail={image.src}
                            width={image.width}
                            height={image.height}
                            caption={`Foto ${index + 1}`}
                        >
                            {({ ref, open }) => {
                                openersRef.current[index] = () => open({} as ReactMouseEvent<Element, MouseEvent>)
                                return (
                                    // hidden anchor for PhotoSwipe registration
                                    <img ref={ref as unknown as MutableRefObject<HTMLImageElement | null>} src={image.src} alt="" />
                                )
                            }}
                        </Item>
                    ))}
                </div>
            </Gallery>
			<InfiniteIconCarousel items={iconItems} durationSeconds={22} />
			<div className={s.hero__photos}></div>
		</section>
	)
}
