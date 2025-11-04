import s from './TextSection.module.scss'

type TextSectionProps = {
  textData?: Array<{
    sys: { id: string }
    textInnerArea?: string | null
  }> | null
}

export const TextSection = ({ textData }: TextSectionProps) => {

  return (
    <section className={s.textSection}>
      {textData && textData.length > 0 ? (
        textData.map((item) => (
          <div key={item.sys.id} className={s.textSection__item}>
            <p className={s.textSection__content}>
              {item.textInnerArea}
            </p>
          </div>
        ))
      ) : (
        <div className={s.textSection__item}>
          <p className={s.textSection__content}>
            Contenido de texto dinámico desde Contentful...
          </p>
        </div>
      )}
    </section>
  )
}
