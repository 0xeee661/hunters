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
  /**
   * Optional padding-top for mobile devices at 768px (CSS variable).
   * Example: '40px', '5vh', etc.
   */
  sectionPaddingTopMobile?: string
  /**
   * Optional padding-top for mobile devices at 425px (CSS variable).
   * Example: '40px', '5vh', etc.
   */
  sectionPaddingTopMobile425?: string
  /**
   * Optional padding-top for mobile devices at 375px (CSS variable).
   * Example: '40px', '5vh', etc.
   */
  sectionPaddingTopMobile375?: string
  /**
   * Optional height for mobile devices at 768px (CSS variable).
   * Example: '50vh', '400px', 'auto', etc.
   */
  sectionHeightMobile?: CSSProperties['height']
  /**
   * Optional height for mobile devices at 425px (CSS variable).
   * Example: '50vh', '400px', 'auto', etc.
   */
  sectionHeightMobile425?: CSSProperties['height']
  /**
   * Optional height for mobile devices at 375px (CSS variable).
   * Example: '50vh', '400px', 'auto', etc.
   */
  sectionHeightMobile375?: CSSProperties['height']
}

export const TextSection = ({ textData, lineHeight, snapAlign, snapStop, sectionHeight, sectionMinHeight, sectionPaddingTopMobile, sectionPaddingTopMobile425, sectionPaddingTopMobile375, sectionHeightMobile, sectionHeightMobile425, sectionHeightMobile375 }: TextSectionProps) => {

  const sectionStyle: CSSProperties = {
    ...(snapAlign || snapStop
      ? {
          scrollSnapAlign: snapAlign,
          scrollSnapStop: snapStop ? 'always' : undefined,
        }
      : {}),
    ...(sectionHeight ? { height: sectionHeight } : {}),
    ...(sectionMinHeight ? { minHeight: sectionMinHeight } : {}),
    ...(sectionPaddingTopMobile ? { '--text-section-pt-mobile': sectionPaddingTopMobile } as React.CSSProperties : {}),
    ...(sectionPaddingTopMobile425 ? { '--text-section-pt-mobile-425': sectionPaddingTopMobile425 } as React.CSSProperties : {}),
    ...(sectionPaddingTopMobile375 ? { '--text-section-pt-mobile-375': sectionPaddingTopMobile375 } as React.CSSProperties : {}),
    ...(sectionHeightMobile ? { '--text-section-h-mobile': sectionHeightMobile } as React.CSSProperties : {}),
    ...(sectionHeightMobile425 ? { '--text-section-h-mobile-425': sectionHeightMobile425 } as React.CSSProperties : {}),
    ...(sectionHeightMobile375 ? { '--text-section-h-mobile-375': sectionHeightMobile375 } as React.CSSProperties : {}),
  }

  return (
    <section className={s.textSection} style={Object.keys(sectionStyle).length ? sectionStyle : undefined}>
      {textData && textData.length > 0 ? (
        textData.map((item) => (
          <div key={item.sys.id} className={s.textSection__item}>
            <p 
              className={s.textSection__content} 
              style={lineHeight ? { 
                lineHeight,
                '--text-line-height': lineHeight 
              } as React.CSSProperties : undefined}
            >
              {item.textInnerArea}
            </p>
          </div>
        ))
      ) : (
        <div className={s.textSection__item}>
          <p 
            className={s.textSection__content} 
            style={lineHeight ? { 
              lineHeight,
              '--text-line-height': lineHeight 
            } as React.CSSProperties : undefined}
          >
            Contenido de texto dinámico desde Contentful...
          </p>
        </div>
      )}
    </section>
  )
}
