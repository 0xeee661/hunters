'use client'
import s from './Header.module.scss'
import Image from 'next/image'
import logo from 'public/delete/img/logo.png'
import { Menu } from 'components/icons/Menu'
import { useState } from 'react'
import Link from 'next/link'
import { IoCloseOutline } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={s.header}>
      <div className={s.header__left}>
        <button
          className={s.header__left__button}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
        <a href="https://www.google.com/maps/place/Hunters+Concept+Hotel/@6.2088989,-75.5664345,17z/data=!3m1!4b1!4m9!3m8!1s0x8e442829bae7a0a5:0x8aaaba2d04ead55d!5m2!4m1!1i2!8m2!3d6.2088989!4d-75.5664345!16s%2Fg%2F11shpfs4w9?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D">
          <span className={s.header__left__location}>
            <MdOutlineLocationOn size={25} />
            Medellín, Poblado
          </span> 
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className={s.header__nav}>
        <ul className={s.header__nav__list}>
          <li className={s.header__nav__list__item}>
            <Link href="/" className={s.header__nav__list__item__link}>
              Inicio
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/hotel" className={s.header__nav__list__item__link}>
              Hotel
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/blog" className={s.header__nav__list__item__link}>
              Blog
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/room" className={s.header__nav__list__item__link}>
              Habitación
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/contact" className={s.header__nav__list__item__link}>
              Contáctanos
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/aliados" className={s.header__nav__list__item__link}>
              Aliados
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/restaurant" className={s.header__nav__list__item__link}>
              Restaurante
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/rooftop" className={s.header__nav__list__item__link}>
              Rooftop
            </Link>
          </li>
          <li className={s.header__nav__list__item}>
            <Link href="/privacy" className={s.header__nav__list__item__link}>
              Política de privacidad
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/" className={s.header__logo}>
        <Image src={logo} alt="logo" width={185} height={85} />
      </Link>
      <div
        className={`${s.header__menu} ${isMenuOpen ? s.open : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          className={s.header__menu__close}
          aria-label="Cerrar menú"
          onClick={toggleMenu}
        >
          <IoCloseOutline size={30} />
        </button>
        <ul className={s.header__menu__list}>
          <li className={s.header__menu__list__item}>
            <Link
              href="/"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Inicio
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/hotel"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Hotel
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/blog"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/room"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Habitación
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/contact"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Contáctanos
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/aliados"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Aliados
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/restaurant"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Restaurante
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/rooftop"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Rooftop
            </Link>
          </li>
          <li className={s.header__menu__list__item}>
            <Link
              href="/privacy"
              className={s.header__menu__list__item__link}
              onClick={toggleMenu}
            >
              Política de privacidad
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className={s.header__menu_overlay} onClick={toggleMenu} />
      )}
    </header>
  )
}
