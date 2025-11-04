'use client'

import Image from 'next/image'
import s from './page.module.scss'
import lines from '@/public/delete/img/lines5.png'
import cover1 from '@/public/delete/img/room1.jpg'
// Evitar HMR issue importando la versión dentro de /hotel/
import bedImg from '@/public/delete/img/room3.jpg'
import cover2 from '@/public/delete/img/room2.jpg'
import cover3 from '@/public/delete/img/hotel/room2.png'
import cover4 from '@/public/delete/img/hotel/room.png'
import layerImg from '@/public/delete/img/layer.png'
import breakfastImg from '@/public/delete/img/hotel/desayuno.png'
import attendantImg from '@/public/menu/agent.png'
import linesLeft from '@/public/delete/img/lines4.png'
import { Button } from '@/components/ui/Button/Button'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import type { CSSProperties } from 'react'
import { AppContext } from '@/context/AppContext'
import { use } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import {
  IoWifiOutline,
  IoCafeOutline,
  IoBedOutline,
  IoSnowOutline,
} from 'react-icons/io5'

const HotelPage = () => {
  const { toggleBooking } = use(AppContext)

  return (
    <main className={s.hotel}>

      <section className={s.hotel__hero}>
        <div className={s.hotel__hero__text}>
          <h1 className={s.hotel__hero__title}>
            <span className={s.hotel__hero__title__row}>
              Cazadores <span className={s.hotel__hero__title__light}>de
              </span>
              <span className={s.hotel__hero__title__icon}>
                <IoArrowForwardCircleOutline /></span>
            </span>
            <span className={s.hotel__hero__title__highlight}>EXPERIENCIAS</span>
            <span className={s.hotel__hero__title__row}>
              <span className={s.hotel__hero__title__light}>en</span>
              <span className={s.hotel__hero__title__city}>MEDELLÍN</span>
            </span>
          </h1>
          <Button className={s.hotel__hero__cta} onClick={toggleBooking}>RESERVAR AHORA</Button>
          <p className={s.hotel__hero__desc}
            style={{ '--hero-desc-mobile-mt': '15%' } as CSSProperties}>
            Ubicado cerca a Provenza y El Poblado, en el corazón de la zona más vibrante y
            central de la ciudad.
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={s.hotel__hero__video}
        >
          <source src="/menu/hotel.mp4" type="video/mp4" />
        </video>
      </section>

      <section className={s.hotel__intro}>

        <div className={s.hotel__intro__left}>
          <div className={s.hotel__intro__centered}>
            <Image src={lines} alt="lines" className={s.hotel__intro__lines} />
            <div className={s.hotel__intro__ctaRow}>
              <Button className={`${s.small} ${s.hotel__intro__cta}`}>
                RESERVAR AHORA
              </Button>
              <IoArrowForwardCircleOutline size={50} />
            </div>
            <h2 className={s.hotel__intro__title}>
              <span className={s.hotel__intro__title__hunters}>Hunters</span> <span className={s.hotel__intro__title__hotel}>Hotel</span>
              <br /> <span className={s.hotel__intro__title__perfect}>es perfecto</span>
            </h2>
            <p className={s.hotel__intro__desc}>
              si tu plan es disfrutar de restaurantes, bares y la vida nocturna de Medellín a
              solo pasos de tu habitación.
            </p>
          </div>
        </div>

        <div className={s.hotel__intro__gallery}>
          <div className={`${s.card} ${s.tall}`}>
            <Image src={layerImg} alt="Galería" />

          </div>
        </div>

      </section>

      <section
        className={s.hotel__rooms}
        style={{
          '--rooms-height': '100vh',
          '--rooms-mobile-thumbs-mt': '-230px',
          '--rooms-mobile-cta-mt': '8px',
        } as CSSProperties}
      >
        {/* Imagen de fondo sin zoom */}
        <Image src={bedImg} alt="Habitación" className={s.hotel__rooms__bg} />
        <div className={s.hotel__rooms__overlay}>
          <div className={s.hotel__rooms__group}>
            <h3 className={s.hotel__rooms__title}>
              Habitaciones <span className={s.hotel__rooms__title__amenities}>modernas</span>
              <br /> <span className={s.hotel__rooms__title__secondary}>y las mejores</span> <span className={s.hotel__rooms__title__amenities}>amenidades</span>
            </h3>
            <ul className={s.hotel__rooms__icons}>
              <li>
                <IoWifiOutline />
                <span>wifi<br />24/7</span>
              </li>
              <li>
                <IoCafeOutline />
                <span>Coffe<br />station</span>
              </li>
              <li>
                <IoBedOutline />
                <span>King<br />Size</span>
              </li>
              <li>
                <IoSnowOutline />
                <span>Air<br />conditioning</span>
              </li>
            </ul>
          </div>
        </div>

        <Gallery>
          <div className={s.hotel__rooms__thumbs}>
            {[cover3, cover4, cover1, cover2].map((img, i) => (
              <div key={i} className={s.hotel__rooms__thumb}>
                <Item original={img.src} thumbnail={img.src} width={img.width} height={img.height}>
                  {({ ref, open }) => (
                    <Image ref={ref} onClick={open} src={img} alt={`thumb-${i}`} />
                  )}
                </Item>
              </div>
            ))}
          </div>
        </Gallery>

        <div className={s.hotel__rooms__ctaWrap}>
          <Button className={s.hotel__rooms__cta}>VER HABITACIONES</Button>
          <IoArrowForwardCircleOutline size={50} />
        </div>

      </section>

      <section
        className="flex flex-col items-center 
      justify-center
      overflow-hidden 
      lg:min-h-[100vh]  relative
      " id="politicas"

      >

        <div className="flex w-full px-4 lg:px-16  
        ">

          <div className="absolute inset-0 bg-gradient-to-br 
          from-[#39e29d] via-[#1fd18b] to-[#0b773f] xl:h-[33%] 
          lg:h-[32%] md:h-[33%] sm:h-[30%] h-[35%]">
            
            <div className="absolute inset-x-0 bottom-0 h-12 md:h-14 lg:h-[70%] 
          bg-gradient-to-t from-black/70 via-black/40 to-transparent 
          pointer-events-none z-0"></div>
          </div>

          {/* Overlay oscuro en la parte inferior */}

          <div className="w-[75%] z-10 pt-[5%]" >
            <h3>
              <span className="">
                <span className="font-montserrat 
                font-extrabold italic 
                leading-none tracking-normal 
                text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]
                text-black  
                ">El desayuno</span>
              </span>
              <br />
              <span className="
              font-montserrat font-semibold 
              italic text-[1.6rem] 
              sm:text-[3rem] 
              lg:text-[3.60rem] 
              xl:text-[3.75rem]
              leading-none 
              tracking-normal">viene incluido</span>
              <br />
              <span className="
              font-montserrat
              font-semibold 
              italic 
              text-[1.6rem] 
              sm:text-[3rem] 
              lg:text-[3.5rem] 
              xl:text-[4rem]
              leading-none 
              tracking-normal text-[#FFFAC9]">en tu tarifa</span>
            </h3>
            <small className="">*Aplican T&C.</small>
          </div>

          <div className="absolute pt-[5%]">
            <Image
              src={breakfastImg}
              alt="Desayuno"
              className="w-80 h-80 xl:w-[732px] xl:h-[732px]
              lg:w-[532px] lg:h-[532px]
              md:w-[432px] md:h-[432px]
              w-[300px] h-[300px]
              rotate-[60deg]
              xl:-mt-[20%] lg:-mt-[20%]  -mt-[10%] relative 
              lg:left-[80%] xl:left-[80%] md:left-[80%] left-[40%]"
            />
          </div>

        </div>

        <div className="w-full flex h-[40%] mb-[5%]">
          {/* Líneas verdes del inicio, detrás de agente y texto */}
          <Image
            src={linesLeft}
            alt="lines"
            className="z-0 absolute w-full xl:top-[43%] 
            lg:top-[60%]
            md:top-[57%]
            top-[67%]
            "
            
          />

          <div className="lg:w-[40%] w-[50%] ">
            <Image src={attendantImg} alt="Recepción"
              className="lg:w-[1272px] lg:h-[1272px]
              md:w-[972px] md:h-[972px]
              w-[820px] h-[532px]

              lg:right-[33%]
              lg:top-[16%]

              md:right-[32%]
              md:top-[14%]

              right-[32%]
              top-[26.5%]

              absolute
              z-20
              "
            />
          </div>

          <div className=" lg:pt-24 z-10 w-full lg:w-auto 
          lg:mt-[14%] xl:mt-[14%]
           md:mt-[25%] sm:mt-[30%] mt-[35%]
           md:pr-0
          pr-10">
            
            <h3>
              <p className="font-montserrat 
              font-normal 
              text-[1.5rem] sm:text-[3rem] 
              md:text-[2.5rem]
              lg:text-[3.5rem] xl:text-[4rem] 
              lg:pl-[44%] pl-[37%]
              leading-none tracking-normal 
              ">política de</p>
              <br />
              <p className="font-montserrat 
                font-bold italic text-[1.5rem] sm:text-[3.5rem] 
                md:text-[2.5rem]
                lg:text-[3.46rem] xl:text-[4.56rem] 
                leading-none tracking-normalwhitespace-nowrap pt-4
                text-[#39E29D] lg:pl-0 pl-[25%] -mt-8">
                <span>cancelación</span>
                <span className='pl-[28%] block lg:hidden'>gratuita</span> 
                <span className='hidden lg:inline'>{' '}</span>
                <span className='hidden lg:inline'>gratuita</span>
              </p>
              
              <br />
              <p className="font-montserrat font-normal 
              text-[1rem] sm:text-[1.3rem] 
              md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3.05rem] 
              leading-none tracking-normal lg:pl-0 pl-[30%] -mt-4">
                en la mayoría de  
                <span className='hidden lg:inline'>{' '}</span>
                <span className='hidden lg:inline
              '>nuestras tarifas</span>
              </p>
              <p className="font-montserrat font-normal 
              text-[1rem] sm:text-[1.3rem] 
              md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3.05rem] 
              leading-none tracking-normal lg:pl-0 pl-[33%] lg:hidden">
              nuestras tarifas
              </p>
            </h3>

            <p className="font-montserrat font-normal 
            text-[1.1rem] sm:text-[2rem]
            md:text-[2.2rem] lg:text-[3.3rem] xl:text-[4rem] 
            leading-none tracking-normal 
            lg:pt-12 md:pt-8 sm:pt-8 
            pt-8
            lg:pl-[35%] md:pl-[22%] pl-[36%]">
              y servicio en
              <br />
              recepción <span className="
                font-montserrat font-bold italic 
                text-[1.4rem] sm:text-[3.5rem] 
                md:text-[2.5rem] lg:text-[3.56rem] xl:text-[4.56rem] 
                leading-none tracking-normal text-right 
                text-[#39E29D] hidden lg:inline">24/7</span>
            </p>
            <p className="
                font-montserrat font-bold italic 
                text-[1.4rem] sm:text-[3.5rem] 
                md:text-[2.5rem]
                lg:text-[4.56rem] 
                leading-none tracking-normal text-right 
                text-[#39E29D] pr-12 md:pr-24 lg:hidden
                ">24/7</p>
          </div>

        </div>

      </section>
    </main>
  )
}

export default HotelPage


