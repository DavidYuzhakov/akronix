import wpImg from '../assets/images/whitepaper/white-paper.png'
import wpBg from '../assets/images/whitepaper/bg.png'
import wpLines from '../assets/images/whitepaper/lines.svg'
import linesBg from '../assets/images/whitepaper/block-lines.svg'

import { ButtonSm } from "./ButtonSm"
import { useTranslation } from 'react-i18next'

export function WhitePaper() {
  const { t } = useTranslation()

  return (
    <div id="whitepaper" className="whitepaper">
      <div className="container">
        <div className="whitepaper__container">
          <div className="whitepaper-wrapper">
            <div className="whitepaper__content">
              <h2>{ t('whitepaper.title') }</h2>
              <div className="whitepaper__img">
                <img src={wpImg} alt="whitepaper" />
              </div>
              <p>{ t('whitepaper.text') }</p>
              <div>
                <ButtonSm text={ t('whitepaper.button') } />
                <a href="#">{ t('whitepaper.download') }</a>
              </div>
            </div>
          </div>
          <img className="whitepaper__block-lines" src={linesBg} alt="" />
          <img src={wpLines} className="whitepaper__lines" />
        </div>
        <img className="whitepaper__bg" src={wpBg} alt="" />
      </div>
    </div>
  )
}
