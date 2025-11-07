import { redirect } from 'next/navigation'
import { getHuntersBlogDataNoLocale } from '@/lib/api'
import slugify from '@/utils/helpers/slugify'

const BlogDetailPage = async () => {
  // Obtener todos los posts
  const blogData = await getHuntersBlogDataNoLocale()

  // Preferir siempre el post cuyo título contenga "HUNTERS HOTEL" (case-insensitive)
  const preferred = blogData?.find(p => p?.title?.toLowerCase().includes('hunters hotel'))
  // Fallback: último post si no existe el preferido
  const lastPost = blogData?.[blogData.length - 1]
  const target = preferred || lastPost

  if (!target) {
    return <div>No hay posts disponibles</div>
  }

  // Redirigir a la URL del post objetivo
  const slug = slugify(target.title || '')
  redirect(`/blog/${slug}`)
}

export default BlogDetailPage


