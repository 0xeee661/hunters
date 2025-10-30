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
import attendantImg from '@/public/delete/img/hotel/mesera.png'
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

      <section className={s.hotel__benefits} id="politicas">
        
        <div className={s.hotel__benefits__breakfast}>
                    
          <div className={s.hotel__benefits__breakfast__text} 
          style={{ 
            '--breakfast-text-y-desktop': '-150px',
            '--breakfast-text-y-mobile': '-5%',
            '--breakfast-pt': '0px', 
            '--breakfast-mobile-shift-x': '17%'
          } as CSSProperties}>
            <h3>
              <span className={s.hotel__benefits__breakfast__titleTop}>
                El <span className={s.hotel__benefits__breakfast__desayuno}>desayuno</span>
              </span>
              <br />
              <span className={s.hotel__benefits__breakfast__titleMid}>viene incluido</span>
              <br />
              <span className={s.hotel__benefits__breakfast__titleBottom}>en tu tarifa</span>
            </h3>
            <small className={s.hotel__benefits__breakfast__note}>*Aplican T&C.</small>
          </div>
          
          <div className={s.hotel__benefits__breakfast__imageWrap}>
            <Image
              src={breakfastImg}
              alt="Desayuno"
              className={s.hotel__benefits__breakfast__image}
              style={{ '--breakfast-rotate': '60deg' } as CSSProperties}
            />
          </div>

        </div>

        <div className={s.hotel__benefits__policy}>
          <Image src={attendantImg} alt="Recepción" 
          className={s.hotel__benefits__policy__agent} />
          
          <div className={s.hotel__benefits__policy__text} 
          style={{ '--policy-text-shift': '0px', 
          '--policy-mobile-shift-x': '-2%' } as CSSProperties}>
            <h3>
              <span className={s.hotel__benefits__policy__politica}>política de</span>{' '}
              <span className={s.hotel__benefits__policy__emph}>
                <span className={s.hotel__benefits__policy__emph__word1}>cancelación</span>{' '}
                <span className={s.hotel__benefits__policy__emph__word2}>gratuita</span>
              </span>
              <br />
              <span className={s.hotel__benefits__policy__tarifas}>
                <span className={s.hotel__benefits__policy__tarifas__word1}>en la mayoría de</span>{' '}
                <span className={s.hotel__benefits__policy__tarifas__word2}>nuestras tarifas</span>
              </span>
            </h3>
            <p className={s.hotel__benefits__policy__ys} style={{ '--ys-pt': '24px', '--ys-pl': '24px' } as CSSProperties}>
              <span className={s.hotel__benefits__policy__y}>y</span>
              <span className={s.hotel__benefits__policy__serv}>servicio en</span>
              <br />
              <span className={s.hotel__benefits__policy__pair}>
                <span className={s.hotel__benefits__policy__recep}>recepción</span>{' '}
                <span className={s.hotel__benefits__policy__time}>24/7</span>
              </span>
            </p>
          </div>
          
        </div>
        
      </section>

    </main>
  )
}

export default HotelPage


