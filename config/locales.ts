/**
 * Contentful Localization Configuration
 * 
 * ⚠️ IMPORTANT: Update AVAILABLE_LOCALES when you add new locales in Contentful
 * 
 * To add a new locale:
 * 1. Go to Contentful Dashboard → Space Settings → Locales
 * 2. Add the new locale (e.g., es-MX, fr-FR)
 * 3. Update the AVAILABLE_LOCALES array below
 * 4. Rebuild your types with: npm run contentful:generate-types
 */

export const AVAILABLE_LOCALES = ['en-US'] as const

/**
 * Default locale used when none is specified
 */
export const DEFAULT_LOCALE = AVAILABLE_LOCALES[0]

/**
 * Type-safe locale type
 */
export type SupportedLocale = typeof AVAILABLE_LOCALES[number]

/**
 * Validate if a locale is supported
 */
export function isValidLocale(locale: unknown): locale is SupportedLocale {
  return AVAILABLE_LOCALES.includes(locale as SupportedLocale)
}

/**
 * Get locale or fallback to default
 */
export function getLocaleOrDefault(locale?: string): SupportedLocale {
  if (locale && isValidLocale(locale)) {
    return locale
  }
  return DEFAULT_LOCALE
}

/**
 * Locale metadata for display purposes
 */
export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  'en-US': 'English (United States)',
}

