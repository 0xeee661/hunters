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
}

export const TextSection = ({ textData, lineHeight }: TextSectionProps) => {

  return (
    <section className={s.textSection}>
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
