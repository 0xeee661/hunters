'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type ClampParagraphProps = {
  text: string
  fontSizePx?: number
  lineHeight?: number
  maxHeightPx: number
  className?: string
}

/**
 * Renders a justified paragraph that will not exceed maxHeightPx.
 * If the content is taller, it truncates at the last period within the limit.
 */
export default function ClampParagraph({
  text,
  fontSizePx = 20,
  lineHeight = 1.6,
  maxHeightPx,
  className,
}: ClampParagraphProps) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const safeText = typeof text === 'string' ? text : ''
  const [displayText, setDisplayText] = useState<string>(safeText)

  const style = useMemo(() => ({
    fontSize: `${fontSizePx}px`,
    lineHeight,
    textAlign: 'justify' as const,
    margin: 0,
  }), [fontSizePx, lineHeight])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Early set full text, then measure
    el.textContent = safeText

    // If fits, keep full
    if (el.scrollHeight <= maxHeightPx) {
      setDisplayText(safeText)
      return
    }

    // Binary search maximum length that fits
    let low = 0
    let high = safeText.length
    let best = 0

    const fits = (len: number) => {
      // Prefer cutting at last period before len
      const slice = safeText.slice(0, len)
      const lastDot = slice.lastIndexOf('.')
      const candidate = lastDot > 0 ? slice.slice(0, lastDot + 1) : slice
      el.textContent = candidate
      return el.scrollHeight <= maxHeightPx
    }

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (fits(mid)) {
        best = mid
        low = mid + 1
      } else {
        high = mid - 1
      }
    }

    // Finalize with last period within best
    const slice = safeText.slice(0, best)
    const lastDot = slice.lastIndexOf('.')
    let finalText = lastDot > 0 ? slice.slice(0, lastDot + 1) : slice

    // Safety: never leave empty - fallback to first sentence or truncated content
    if (!finalText || finalText.trim().length === 0) {
      const firstDot = safeText.indexOf('.')
      finalText =
        firstDot > 0
          ? safeText.slice(0, firstDot + 1)
          : safeText.slice(0, Math.min(140, safeText.length))
    }

    // Set both DOM and state to avoid flicker in some browsers
    el.textContent = finalText
    setDisplayText(finalText)
  }, [safeText, maxHeightPx, fontSizePx, lineHeight])

  return (
    <p ref={ref} className={className} style={style}>
      {displayText}
    </p>
  )
}


