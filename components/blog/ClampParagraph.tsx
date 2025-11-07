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
  const [displayText, setDisplayText] = useState<string>(text)

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
    el.textContent = text

    // If fits, keep full
    if (el.scrollHeight <= maxHeightPx) {
      setDisplayText(text)
      return
    }

    // Binary search maximum length that fits
    let low = 0
    let high = text.length
    let best = 0

    const fits = (len: number) => {
      // Prefer cutting at last period before len
      const slice = text.slice(0, len)
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
    const slice = text.slice(0, best)
    const lastDot = slice.lastIndexOf('.')
    const finalText = lastDot > 0 ? slice.slice(0, lastDot + 1) : slice
    setDisplayText(finalText || text)
  }, [text, maxHeightPx])

  return (
    <p ref={ref} className={className} style={style}>
      {displayText}
    </p>
  )
}


