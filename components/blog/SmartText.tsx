import type { CSSProperties } from 'react'

type SmartTextProps = {
  text: string
  className?: string
  style?: CSSProperties
}

/**
 * Renders text. If it detects a numbered FAQ list (1. ..., 2. ...),
 * it renders it as an ordered list, otherwise as a paragraph.
 * Detection is tolerant to special line separators and prefixes like
 * "❓ Preguntas Frecuentes (FAQs)".
 */
export default function SmartText({ text, className, style }: SmartTextProps) {
  const normalized = (text || '')
    // Normalize uncommon line separators to spaces
    .replace(/\u2028|\u2029|\r?\n/g, ' ')
    .trim()

  // Find start of first numbered item (e.g., "1. ")
  const firstNumIdx = normalized.search(/\b\d+\.\s+/)
  const candidate = firstNumIdx >= 0 ? normalized.slice(firstNumIdx) : normalized

  // Capture each numbered block: "1. <content up to next 'N. ' or end>"
  // Use [\s\S] instead of the dotAll 's' flag for broader runtime compatibility.
  const itemRegex = /(\d+)\.\s+([\s\S]+?)(?=(?:\d+\.\s+)|$)/g
  const items: Array<{ num: string; content: string; q?: string; a?: string }> = []
  let match: RegExpExecArray | null
  while ((match = itemRegex.exec(candidate)) !== null) {
    const num = match[1]
    const content = match[2].trim()
    // Try to split into question and answer by the last '?' to keep the largest chunk
    // close to the image height if used with clamping elsewhere.
    const qm = content.lastIndexOf('?')
    const q = qm >= 0 ? content.slice(0, qm + 1).trim() : undefined
    const a = qm >= 0 ? content.slice(qm + 1).trim() : undefined
    items.push({ num, content, q, a })
  }

  const isFaqList = items.length >= 2

  if (!isFaqList) {
    return (
      <p className={className} style={style}>
        {normalized}
      </p>
    )
  }

  return (
    <ol className={className} style={style}>
      {items.map(({ num, q, a, content }) => (
        <li key={num} style={{ marginBottom: '0.6rem', textAlign: (style?.textAlign as CSSProperties['textAlign']) || 'start' }}>
          {q ? (
            <>
              <strong>{q}</strong>
              {a ? <> {a}</> : null}
            </>
          ) : (
            content
          )}
        </li>
      ))}
    </ol>
  )
}


