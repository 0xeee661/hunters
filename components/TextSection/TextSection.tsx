import s from './TextSection.module.scss'
import type { CSSProperties } from 'react'

type TextSectionProps = {
  textData?: Array<{
    sys: { id: string }
    textInnerArea?: string | null
  }> | null
  /**
   * Optional line-height override for paragraph content.
   * Use to tweak spacing only from specific pages (e.g., home page).
   */
  lineHeight?: CSSProperties['lineHeight']
  /**
   * Optional scroll snapping alignment override for the section container.
   * Useful to force snapping on specific pages/instances.
   */
  snapAlign?: CSSProperties['scrollSnapAlign']
  /**
   * If true, enforces that scrolling stops on this section at least once per gesture.
   */
  snapStop?: boolean
  /**
   * Optional explicit height for the section container.
   * Pass 'auto' (default behaviour) or any valid CSS height (e.g. '60vh').
   */
  sectionHeight?: CSSProperties['height']
  /**
   * Optional min-height for the section container.
   */
  sectionMinHeight?: CSSProperties['minHeight']
}

export const TextSection = ({ textData, lineHeight, snapAlign, snapStop, sectionHeight, sectionMinHeight }: TextSectionProps) => {

  const sectionStyle: CSSProperties = {
    ...(snapAlign || snapStop
      ? {
          scrollSnapAlign: snapAlign,
          scrollSnapStop: snapStop ? 'always' : undefined,
        }
      : {}),
    ...(sectionHeight ? { height: sectionHeight } : {}),
    ...(sectionMinHeight ? { minHeight: sectionMinHeight } : {}),
  }

  return (
    <section className={s.textSection} style={Object.keys(sectionStyle).length ? sectionStyle : undefined}>
      {textData && textData.length > 0 ? (
        textData.map((item) => (
          <div key={item.sys.id} className={s.textSection__item}>
            <p className={s.textSection__content} style={lineHeight ? { lineHeight } : undefined}>
              {item.textInnerArea}
            </p>
          </div>
        ))
      ) : (
        <div className={s.textSection__item}>
          <p className={s.textSection__content} style={lineHeight ? { lineHeight } : undefined}>
            Contenido de texto dinámico desde Contentful...
          </p>
        </div>
      )}
    </section>
  )
}
