import { redirect } from 'next/navigation'
import { getHuntersBlogDataNoLocale } from '@/lib/api'

const BlogDetailPage = async () => {
  // Obtener el ÚLTIMO post del array (último índice)
  const blogData = await getHuntersBlogDataNoLocale()
  const lastPost = blogData?.[blogData.length - 1]

  if (!lastPost) {
    return <div>No hay posts disponibles</div>
  }

  // Redirigir a la URL del último post
  const slug = lastPost.title?.toLowerCase().replace(/\s+/g, '-')
  redirect(`/blog/${slug}`)
}

export default BlogDetailPage


