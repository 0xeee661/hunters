'use client'
import Image from 'next/image'
import s from './page.module.scss'
import restaurant1 from '@/public/delete/img/restaurant1.png'
import restaurant2 from '@/public/delete/img/restaurant2.jpg'
import restaurant3 from '@/public/delete/img/restaurant3.jpg'
import restaurant4 from '@/public/delete/img/restaurant4.jpg'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { WHATSAPP_LINK } from '@/lib/constants/app'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const RooftopPage = () => {
  return (
    <main className={s.rooftop}>
      <section className={s.rooftop__hero}>
        <h1 className={s.rooftop__hero__title}>
          <span>Rooftop</span>
          <span className={s.rooftop__hero__title__color}>By Hunters</span>
          <span className={s.rooftop__hero__title__subtitle}>Proximamente</span>
        </h1>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={s.rooftop__hero__video}
        >
          <source src="/delete/videos/spaces2.mp4" type="video/mp4" />
        </video>
      </section>
      <section className={s.rooftop__content}>
        <div className={s.rooftop__content__container}>
          <Image
            src={restaurant1}
            alt="Rooftop"
            className={s.rooftop__content__container__image}
          />

          {/* Iconos sociales posicionados en la sección de contenido */}
          <div className={s.rooftop__content__social}>
            <a
              href="https://www.facebook.com/p/Hunters-Concept-Hotel-100063919069916/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.rooftop__content__social__icon}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/huntersmedhotel/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={s.rooftop__content__social__icon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573116810440&text=%C2%A1Hola!%20Quiero%20reservar%20a%20la%20mejor%20tarifa%20en%20Hotel%20Hunters"
              target="_blank"
              rel="noopener noreferrer"
              className={s.rooftop__content__social__icon}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>
        <div className={s.rooftop__content__cards}>
          <Link
            href="/menu/Carta%20Linze%20club.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={s.rooftop__content__cards__card}
            style={{
              backgroundImage: `url(${restaurant2.src})`,
            }}
          >
            <span className={s.rooftop__content__cards__card__text}>
              MENÚ{' '}
              <IoArrowForwardCircleOutline
                size={40}
                className={s.rooftop__content__cards__card__icon}
              />
            </span>
          </Link>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={s.rooftop__content__cards__card}
            style={{
              backgroundImage: `url(${restaurant3.src})`,
            }}
          >
            <span className={s.rooftop__content__cards__card__text}>
              RESERVA{' '}
              <IoArrowForwardCircleOutline
                size={40}
                className={s.rooftop__content__cards__card__icon}
              />
            </span>
          </Link>
          <Gallery>
            {[restaurant1, restaurant2, restaurant3, restaurant4].map(
              (image, index) => (
                <Item
                  key={index}
                  original={image.src}
                  thumbnail={image.src}
                  width={image.width}
                  height={image.height}
                >
                  {({ ref, open }) =>
                    index === 0 ? (
                      <button
                        ref={ref}
                        onClick={open}
                        className={s.rooftop__content__cards__card}
                        style={{
                          backgroundImage: `url(${restaurant4.src})`,
                        }}
                      >
                        <span className={s.rooftop__content__cards__card__text}>
                          GALERÍA{' '}
                          <IoArrowForwardCircleOutline
                            size={40}
                            className={s.rooftop__content__cards__card__icon}
                          />
                        </span>
                      </button>
                    ) : (
                      <div ref={ref} style={{ position: 'absolute' }} />
                    )
                  }
                </Item>
              )
            )}
          </Gallery>
        </div>
      </section>
    </main>
  )
}

export default RooftopPage


