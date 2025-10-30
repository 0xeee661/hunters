import Image from 'next/image'
import s from './page.module.scss'
import lines6 from '@/public/delete/img/lines6.png'
import cover1 from '@/public/delete/img/room1.jpg'
import cover2 from '@/public/delete/img/room2.jpg'
import cover3 from '@/public/delete/img/hotel/room.png'
import cover4 from '@/public/delete/img/hotel/room2.png'
import cover5 from '@/public/delete/img/restaurant3.jpg'
import cover6 from '@/public/delete/img/restaurant4.jpg'
import map from '@/public/delete/img/map.svg'
import { Button } from '@/components/ui/Button/Button'
import { HiHeart } from 'react-icons/hi'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { getHuntersBlogDataNoLocale } from '@/lib/api'
import type { HuntersBlog } from '@/types/graphql/graphql'

const cards = [
  { id: 1, title: 'Tema 1', image: cover2 },
  { id: 2, title: 'Tema 2', image: cover3 },
  { id: 3, title: 'Tema 3', image: cover4 },
  { id: 4, title: 'Tema 4', image: cover5 },
  { id: 5, title: 'Tema 5', image: cover6 },
  { id: 6, title: 'Tema 6', image: cover1 },
]

const BlogPage = async () => {
  console.log('=== SERVER: Fetching blog data from Contentful ===')

  let blogData: HuntersBlog[] = []
  let dynamicPaddingBottom = 80 // Valor por defecto

  try {
    // Obtener los posts del blog desde Contentful
    const rawData = await getHuntersBlogDataNoLocale() || []
    blogData = rawData.filter((item): item is HuntersBlog => item !== null)

    console.log('SERVER: Blog data received:', blogData)
    console.log('SERVER: Type of blogData:', typeof blogData)
    console.log('SERVER: Is array?', Array.isArray(blogData))
    console.log('SERVER: Number of blog posts:', blogData?.length || 0)
    console.log('SERVER: blogData exists?', !!blogData)
    console.log('SERVER: blogData.length > 0?', blogData && blogData.length > 0)

    // Calcular espaciado dinámico basado en la cantidad de posts
    // Más posts = más espacio, pero siempre razonable
    dynamicPaddingBottom = blogData && blogData.length > 0
      ? Math.max(60, Math.min(180, 40 + (blogData.length * 20))) // Entre 60px y 180px
      : 80 // Espaciado por defecto cuando no hay posts

    console.log('SERVER: Calculated padding bottom:', dynamicPaddingBottom, 'px')

  } catch (error) {
    console.log('SERVER: Error fetching blog data:', error)
    console.error('SERVER: Full error details:', error)
  }

  return (
    <main
      className={s.blog}
      style={{
        '--more-padding-bottom': `${dynamicPaddingBottom || 80}px`
      } as React.CSSProperties}
    >
      <section className={s.blog__hero}>
        <h1 className={s.blog__hero__title}>
          <span>BLOG</span>
          <span className={s.blog__hero__title__color}>By Hunters</span>
        </h1>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={s.blog__hero__video}
        >
          <source src="/delete/videos/hero.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Mostrar el ÚLTIMO post como featured si existe */}
      {(() => {
        console.log('RENDER: About to render featured section')
        console.log('RENDER: blogData exists?', !!blogData)
        console.log('RENDER: blogData.length:', blogData?.length)
        console.log('RENDER: Condition result:', blogData && blogData.length > 0)
        const lastIndex = blogData ? blogData.length - 1 : -1
        console.log('RENDER: Last post index:', lastIndex)
        console.log('RENDER: Featured post title:', blogData?.[lastIndex]?.title)
        return blogData && blogData.length > 0
      })() && (() => {
        const lastIndex = blogData.length - 1
        const featuredPost = blogData[lastIndex]
        console.log('RENDER: Featured post (last):', featuredPost?.title)
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
        {blogData && blogData.length > 1 && blogData.slice(0, -1).map((post) => ( // slice(0, -1) = todos menos el último
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
              <Button href={`/blog/${post.title?.toLowerCase().replace(/\s+/g, '-')}`} className={s.blog__grid__card__button}>
                Ver más
              </Button>
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
        <Image src={lines6} alt="Lines" className={s.blog__more__lines} />
        <Button href="#" className={s.blog__more__button}>
          VER MÁS <IoArrowForwardCircleOutline size={24} />
        </Button>
        <Image src={map} alt="Decorative" className={s.blog__more__map} />
      </section>
    </main>
  )
}

export default BlogPage


