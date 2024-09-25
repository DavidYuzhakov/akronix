import robotImg from "../assets/images/ton/robot.png"
import pattern from "../assets/images/pattern.png"
import elImg from "../assets/images/ton/ton-el.svg"
import tonkeeper from "../assets/images/ton/tonkeeper.svg"
import arrow from "../assets/images/ton/arrow-right.svg"

import { CardCurrency } from "./CardCurrency"
import { Title } from "./Title"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"

export function Tone ({ cards }) {
  const { t } = useTranslation()
  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true
  })
  
  return (
    <div className='ton'>
      <div className="container ton-container">
        <img className="ton-bg" src={robotImg} alt="robot" />
        <div ref={ref} className={`ton-content ${inView ? '_animate' : ''}`}>
          <h2 className="title">{ t('ton.title') }</h2>
          <img className="ton-el" src={elImg} alt="" />
          <p className="ton-text">
            <span>{t('ton.text.first')}</span>
            {t('ton.text.second')}
          </p>
          <button>
            <img src={tonkeeper} alt="tonkeeper" />
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="ton-project">
          <Title text={t('ton.paragraph')} />
          <div className="ton-project__cards">
            {cards.length > 0 && cards.map((card, index) => <CardCurrency 
              key={t(`ton.cards.${index}.title`)} 
              title={t(`ton.cards.${index}.title`)} 
              text={t(`ton.cards.${index}.text`)} 
              {...card} 
              index={index + 1} 
            />)}
          </div>
        </div>
      </div>
      <img className="ton-pattern" src={pattern} alt="" />
    </div>
  )
}


