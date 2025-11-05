'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import s from './page.module.scss'
import linesLeft from '@/public/delete/img/lines4.png'
import cover1 from '@/public/delete/img/room1.jpg'
import cover2 from '@/public/delete/img/room2.jpg'
import cover3 from '@/public/delete/img/hotel/room.png'
import cover4 from '@/public/delete/img/hotel/room2.png'
import cover5 from '@/public/delete/img/restaurant3.jpg'
import cover6 from '@/public/delete/img/restaurant4.jpg'
import { Button } from '@/components/ui/Button/Button'
import { HiHeart } from 'react-icons/hi'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { getHuntersBlogDataNoLocale } from '@/lib/api'
import type { HuntersBlog } from '@/types/graphql/graphql'
import Footer from '@/components/Footer/Footer'

const cards = [
  { id: 1, title: 'Tema 1', image: cover2 },
  { id: 2, title: 'Tema 2', image: cover3 },
  { id: 3, title: 'Tema 3', image: cover4 },
  { id: 4, title: 'Tema 4', image: cover5 },
  { id: 5, title: 'Tema 5', image: cover6 },
  { id: 6, title: 'Tema 6', image: cover1 },
]

const BlogPage = () => {
  const [blogData, setBlogData] = useState<HuntersBlog[]>([])
  const [showAllPosts, setShowAllPosts] = useState(false)
  const [dynamicPaddingBottom, setDynamicPaddingBottom] = useState(80)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await getHuntersBlogDataNoLocale() || []
        const filteredData = rawData.filter((item): item is HuntersBlog => item !== null)
        setBlogData(filteredData)
        
        // Calcular espaciado dinámico
        const padding = filteredData && filteredData.length > 0
          ? Math.max(60, Math.min(180, 40 + (filteredData.length * 20)))
          : 80
        setDynamicPaddingBottom(padding)
      } catch (error) {
        console.log('Error fetching blog data:', error)
      }
    }
    fetchData()
  }, [])

  // Detectar si es mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Verificar al montar
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log(blogData)

  return (
    <main
      className={s.blog}
      style={{
        '--more-padding-bottom': `${dynamicPaddingBottom || 80}px`
      } as React.CSSProperties}
    >
      <section
        className={s.blog__hero}
        style={{
          backgroundImage: "url('/delete/img/blogBG.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className={s.blog__hero__title}>
          <span>BLOG</span>
          <span className={s.blog__hero__title__color}>By Hunters</span>
        </h1>
       
      </section>

      {/* Mostrar el ÚLTIMO post como featured si existe */}
      {(() => {
        return blogData && blogData.length > 0
      })() && (() => {
        const lastIndex = blogData.length - 1
        const featuredPost = blogData[lastIndex]
        return (
          <section className={s.blog__featured}>
            <div className={s.blog__featured__card}>
              {featuredPost.headerImage?.url && (
                <Image
                  src={featuredPost.headerImage.url}
                  alt={featuredPost.headerImage.title || featuredPost.title || ''}
                  className={s.blog__featured__image}
                  width={800}
                  height={600}
                />
              )}
              <div className={s.blog__featured__overlay}>
                <span className={s.blog__featured__heart}>
                  <HiHeart />
                </span>
                <div className={s.blog__featured__text}>
                  <h3 className={s.blog__featured__title}>{featuredPost.title}</h3>
                  <p className={s.blog__featured__author}>Por: {featuredPost.postWritter}</p>
                  <p>{featuredPost.superiorParagraph?.substring(0, 150)}...</p>
                </div>
              </div>
            </div>
            <div className={s.blog__featured__cta}>
              <Button href="/blog/tema-principal" className={s.blog__featured__button}>
                VER MÁS
              </Button>
            </div>
          </section>
        )
      })()}

      {/* Mostrar grid con posts reales (todos menos el último que es featured) */}
      <section className={s.blog__grid}>
        {blogData && blogData.length > 1 && blogData.slice(0, -1)
          .slice(0, isMobile ? undefined : (showAllPosts ? undefined : 9)) // En mobile mostrar todos, en desktop limitar a 9
          .map((post) => (
          <article key={post.sys.id} className={s.blog__grid__card}>
            <div
              className={s.blog__grid__card__cover}
              style={{
                backgroundImage: post.middleImage ? `url(${post.middleImage.url})` : 'none'
              }}
            />
            <div className={s.blog__grid__card__body}>
              
              <h4 className={s.blog__grid__card__title}>{post.title}</h4>
              <p className={s.blog__grid__card__author}>Por: {post.postWritter}</p>
              <p>{post.superiorParagraph?.substring(0, 100)}...</p>
              
              <div className={s.blog__grid__card__button__wrapper}>
                <Button href={`/blog/${post.title?.toLowerCase().replace(/\s+/g, '-')}`} 
                className={s.blog__grid__card__button}>
                  Ver más
                </Button>
              </div>
            </div>
          </article>
        ))}

        {/* Mostrar placeholders solo si NO hay posts de Contentful */}
        {(!blogData || blogData.length === 0) && cards.slice(0, 5).map((card) => (
          <article key={card.id} className={s.blog__grid__card}>
            <div
              className={s.blog__grid__card__cover}
              style={{ backgroundImage: `url(${card.image.src})` }}
            />
            <div className={s.blog__grid__card__body}>
              <h4 className={s.blog__grid__card__title}>{card.title}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <Button href={`/blog/${card.title.toLowerCase().replace(/\s+/g, '-')}`} className={s.blog__grid__card__button}>
                Ver más
              </Button>
            </div>
          </article>
        ))}
      </section>

      <section className={s.blog__more}>
        {/* Mostrar botón solo si hay más de 3 posts (4 o más en total) */}
        {blogData && blogData.length > 4 && (
          <button 
            onClick={() => setShowAllPosts(!showAllPosts)}
            className={s.blog__more__button}
          >
            <span className={s.blog__more__button__label}>{showAllPosts ? 'VER MENOS' : 'VER MÁS'}</span> <IoArrowForwardCircleOutline size={24} />
          </button>
        )}
      </section>

      <Footer />
    </main>
  )
}

export default BlogPage


