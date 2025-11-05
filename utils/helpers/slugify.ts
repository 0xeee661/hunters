/**
 * Convert a string to a URL-safe slug.
 * - Lowercases
 * - Removes diacritics (á -> a)
 * - Removes emojis and symbols
 * - Collapses spaces to single hyphens
 */
export function slugify(input: string | null | undefined): string {
  if (!input) return ''
  const normalized = input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    // keep letters, numbers, spaces and hyphens; remove punctuation, emojis and other symbols
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()

  return normalized
}

export default slugify


