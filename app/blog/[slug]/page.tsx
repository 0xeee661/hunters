import Image from 'next/image'
import s from '../tema-principal/page.module.scss'
import { getHuntersBlogDataNoLocale } from '@/lib/api'
import slugify from '@/utils/helpers/slugify'
import type { HuntersBlog } from '@/types/graphql/graphql'

type Props = { params: Promise<{ slug: string }> }

export default async function BlogTemaPage({ params }: Props) {
  const { slug } = await params

  // Obtener todos los posts
  const blogData = await getHuntersBlogDataNoLocale()

  // El slug ya está en el formato correcto del título (first-content)
  // Buscar el post por slug generado a partir del título (sin emojis/diacríticos)
  const post = blogData?.find((p): p is HuntersBlog =>
    !!p?.title && slugify(p.title) === slug
  )


  if (!post) {
    return (
      <main className={s.detail}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Post no encontrado</h1>
          <p>El post &quot;{slug?.replace(/-/g, ' ')}&quot; no existe.</p>
        </div>
      </main>
    )
  }

  return (
    <main className={s.detail}>
      <section className={s.detail__hero}>
        {post.headerImage?.url && (
          <Image
            src={post.headerImage.url}
            alt={post.headerImage.title || post.title || ''}
            className={s.detail__hero__image}
            width={1200}
            height={600}
          />
        )}
        <div className={s.detail__hero__overlay}>
          <h1 className={s.detail__hero__title}>{post.title}</h1>
          <p className={s.detail__hero__subtitle}>Escrito por: {post.postWritter}</p>
        </div>
      </section>

      <section className={s.detail__content}>
        <div className={s.detail__content__cols}>
          {/* Puedes ajustar el tamaño/espaciado aquí */}
          <p style={{ fontSize: '20px', lineHeight: 1.6, textAlign: 'justify' }}>{post.superiorParagraph}</p>
        </div>
      </section>

      <section className={s.detail__wideImage}>
        {post.middleImage?.url && (
          <Image
            src={post.middleImage.url}
            alt={post.middleImage.title || 'Imagen del artículo'}
            className={s.detail__wideImage__img}
            width={1200}
            height={800}
          />
        )}
        <span className={s.detail__wideImage__caption}>{post.authorMiddleImage}</span>
      </section>

      <section className={s.detail__split}>
        <div className={s.detail__split__left}>
          <p className={s.detail__split__left__clamped} style={{ fontSize: '20px', lineHeight: 1.6, textAlign: 'justify' }}>
            {post?.inferiorParagraph || ''}
          </p>
        </div>
        <div className={s.detail__split__right}>
          {post.bottomImage?.url && (
            <Image
              src={post.bottomImage.url}
              alt={post.bottomImage.title || 'Imagen lateral'}
              className={s.detail__split__right__img}
              width={600}
              height={400}
            />
          )}
        </div>
      </section>
    </main>
  )
}


