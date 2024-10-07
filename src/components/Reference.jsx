import { useInView } from 'react-intersection-observer'
import refImg from '../assets/images/ref.png'
import elImg from "../assets/images/ton/ton-el.svg"
import { useTranslation } from 'react-i18next'

export function Reference () {
  const { t } = useTranslation()
  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true
  }) 

  return (
    <div className='ton ton-reference'>
      <div className="container ton-container">
        <img className="ton-bg" src={refImg} alt="robot" />
        <div ref={ref} className={`ton-content ${inView ? '_animate' : ''}`}>
          <h2 className="title">{ t('title') }</h2>
          <img className="ton-el" src={elImg} alt="" />
          <p className="ton-text">
            <span>{ t('text.first') }</span>
            { t('text.second') }
          </p>
        </div>
      </div>
    </div>
  )
}
