import Image from 'next/image'
import s from '../tema-principal/page.module.scss'
import { getHuntersBlogDataNoLocale } from '@/lib/api'
import type { HuntersBlog } from '@/types/graphql/graphql'

type Props = { params: Promise<{ slug: string }> }

export default async function BlogTemaPage({ params }: Props) {
  const { slug } = await params

  console.log('=== BLOG SLUG PAGE: Loading page for slug:', slug)

  // Obtener todos los posts
  const blogData = await getHuntersBlogDataNoLocale()
  console.log('BLOG SLUG PAGE: Blog data received:', blogData?.length, 'posts')

  // El slug ya está en el formato correcto del título (first-content)
  const postTitle = slug?.toLowerCase()
  console.log('BLOG SLUG PAGE: Looking for post with title:', postTitle)

  // Buscar el post por título exacto
  const post = blogData?.find((p): p is HuntersBlog =>
    p?.title?.toLowerCase() === postTitle
  )

  console.log('BLOG SLUG PAGE: Post found:', post ? 'YES' : 'NO')

  if (!post) {
    console.log('BLOG SLUG PAGE: Post not found for slug:', slug)
    return (
      <main className={s.detail}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Post no encontrado</h1>
          <p>El post &quot;{slug?.replace(/-/g, ' ')}&quot; no existe.</p>
        </div>
      </main>
    )
  }

  console.log('BLOG SLUG PAGE: Using post data:', {
    title: post.title,
    author: post.postWritter,
    hasHeaderImage: !!post.headerImage,
    hasMiddleImage: !!post.middleImage,
    hasBottomImage: !!post.bottomImage
  })

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
          <p>{post.superiorParagraph}</p>
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
          <p>{post.inferiorParagraph}</p>
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


