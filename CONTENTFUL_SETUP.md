# 🎯 Contentful GraphQL Setup Guide

## Problem Solved ✅

**Error:**
```
[Contentful GraphQL Error] Requested locale 'es-MX' does not exist in the space
```

**Solution:** Updated configuration to use only available locales (currently `en-US`)

---

## 📍 Current Configuration

### Available Locales
- ✅ `en-US` (English - United States)

### Default Locale
- `en-US`

---

## 🔧 How to Add New Locales

### Step 1: Configure in Contentful Dashboard
1. Go to **Space Settings** → **Locales**
2. Click **Add Locale**
3. Select locale (e.g., `es-MX`, `fr-FR`, `de-DE`)
4. Set as fallback locale if needed
5. Publish your entries for the new locale

### Step 2: Update Configuration
Edit `/config/locales.ts`:

```typescript
export const AVAILABLE_LOCALES = ['en-US', 'es-MX', 'fr-FR'] as const
```

### Step 3: Regenerate Types
```bash
npm run contentful:generate-types
```

---

## 📚 Architecture

### File Structure

```
config/
├── locales.ts              ← 🔑 Central locale configuration
├── env.ts                  ← Environment variables

lib/
├── api.ts                  ← GraphQL fetching functions
│   ├── fetchGraphQL()      ← Core fetch with error handling
│   ├── getTextInnerAreasData()
│   └── ...other queries

app/
├── page.tsx                ← Server component using locales
```

### Key Files

| File | Purpose | Action Required |
|------|---------|-----------------|
| `config/locales.ts` | Centralized locale config | Update when adding locales |
| `lib/api.ts` | GraphQL functions | Uses config automatically |
| `graphql/queries.ts` | GraphQL queries | No changes needed |

---

## 💡 Usage Examples

### Default Locale (en-US)
```typescript
const data = await getTextInnerAreasData()
```

### Specific Locale
```typescript
const data = await getTextInnerAreasData({ locale: 'es-MX' })
```

### With Preview (Draft Content)
```typescript
const data = await getTextInnerAreasData({ 
  locale: 'en-US', 
  preview: true 
})
```

---

## 🚨 Troubleshooting

### Error: "Requested locale 'X' does not exist"
1. Check `config/locales.ts`
2. Verify locale exists in Contentful Dashboard
3. Regenerate types: `npm run contentful:generate-types`
4. Restart dev server

### Error: "No items found for locale"
1. Ensure entries are **published** in that locale
2. Check entries exist in Contentful
3. Verify field names match GraphQL schema
4. Review console logs: `[TextInnerAreasData]`

### Cannot find locale in type hints
1. Update `AVAILABLE_LOCALES` in `config/locales.ts`
2. Run `npm run contentful:generate-types`
3. Restart TypeScript server in IDE

---

## 📋 Localization Workflow

```
1. Create Content in Contentful
   ├── Create entry (e.g., TextInnerArea)
   ├── Fill fields (e.g., textInnerArea: "My text")
   └── Publish

2. Add Translations
   ├── Go to entry
   ├── Click locale dropdown
   ├── Select new locale (e.g., es-MX)
   ├── Translate content
   └── Publish

3. Update Config
   ├── Edit config/locales.ts
   ├── Add new locale to AVAILABLE_LOCALES
   └── Regenerate types

4. Use in Code
   ├── Default: await getTextInnerAreasData()
   ├── Specific: await getTextInnerAreasData({ locale: 'es-MX' })
   └── Done!
```

---

## 🔐 Environment Variables

Ensure these are set in your `.env.local`:

```bash
CONTENTFUL_SPACE_ID=1pjko1eowomd
CONTENTFUL_ACCESS_TOKEN=FfuoUZ_mulFz0FlT9QGHW7Ab0Z6vdm3aBBCpEXWJZLU

# For preview (draft content):
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

---

## ✨ Best Practices

✅ **DO:**
- Keep `config/locales.ts` as single source of truth
- Update locale config before using in code
- Regenerate types after changing locales
- Use `DEFAULT_LOCALE` constant instead of hardcoding

❌ **DON'T:**
- Hardcode locale strings in components
- Forget to update `AVAILABLE_LOCALES`
- Skip regenerating types
- Mix locale handling across files

---

## 📞 Quick Reference

```typescript
// config/locales.ts
import { DEFAULT_LOCALE, AVAILABLE_LOCALES, getLocaleOrDefault } from '@/config/locales'

// Using locales
const locale = getLocaleOrDefault('es-MX') // Validates and returns default if invalid
const data = await getTextInnerAreasData({ locale })
```

---

**Last Updated:** November 5, 2025  
**Status:** ✅ Production Ready  
**Space ID:** 1pjko1eowomd

