import elImg from '../assets/images/ton/ton-el.svg'
import fullElImg from '../assets/icons/block-el.svg'
import quote from '../assets/icons/quote-text.svg'
import quoteLeft from '../assets/icons/quote-left.svg'
import quoteRight from '../assets/icons/quote-right.svg'
import arrows from '../assets/icons/presale-arrows.svg'
import linesBg from '../assets/images/tokenomic/lines.svg'
import elArticle from '../assets/images/slider/el.svg'

import patternBg from '../assets/images/pattern.png'
import akronImg from '../assets/images/tokenomic/img.png'
import akronBg from '../assets/images/tokenomic/bg.png'

import { Timer } from './Timer'
import { Form } from './Form'
import { TransList } from './TransList'
import { Button } from './Button'

import { transactions } from '../data'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

export function Tokenomic({ akronList }) {
  const { t } = useTranslation()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <section className="tokenomic">
      <div className="tokenomic-akron">
        <div className="container tokenomic-akron__container">
          <div className="tokenomic-akron__content">
            <h2 className="title">{t('tokenomic.title')}</h2>
            <img className="ton-el" src={elImg} alt="" />
            <div
              ref={ref}
              className={`tokenomic-akron__items ${inView ? '_animate' : ''}`}
            >
              {akronList.map(({ precent }, index) => (
                <div
                  style={{
                    transition: `all .4s ease-in-out ${(index + 1) / 2 - 0.5}s`,
                  }}
                  key={index}
                  className="tokenomic-akron__item"
                >
                  <span className="precent">{precent}%</span>
                  <span className="text">
                    {t(`tokenomic.list.${index}.text`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <img className="tokenomic-akron__img" src={akronImg} alt="" />
        </div>
        <img className="tokenomic-akron__bg" src={akronBg} alt="" />
      </div>
      <div className="tokenomic-timer">
        <div className="container">
          <h2 className="title">{t('tokenomic.timer.title')}</h2>
          <img className="tokenomic-el" src={fullElImg} alt="" />
          <div className="tokenomic-timer__content">
            <div className="el-left">
              <img height={100} src={quote} alt="" />
              <img src={quote} alt="" />
            </div>
            <Timer targetTime={new Date('2024-08-18T10:00:00')} />
            <div className="el-right">
              <img height={100} src={quote} alt="" />
              <img src={quote} alt="" />
            </div>
            <img className="tokenomic-timer__bg" src={patternBg} alt="" />
            <img className="tokenomic-timer__lines" src={linesBg} alt="" />
          </div>
          <p className="tokenomic-timer__text">
            {t('tokenomic.timer.paragraph')}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="tokenomic-purchase">
          <Form />
          <TransList transactions={transactions} />
        </div>
      </div>
      <div className="tokenomic-articles">
        <div className="container">
          <article className="tokenomic-presale">
            <div className="tokenomic-presale__content">
              <h2>{ t('tokenomic.presale.title') }</h2>
              <p>{ t('tokenomic.presale.text') }</p>
            </div>
            <div className="tokenomic-presale__link">
              <div>
                <img src={arrows} alt="arrows" />
              </div>
              <button>{ t('tokenomic.presale.button') }</button>
            </div>

            <img className="el el-tl" src={elArticle} alt="" />
            <img className="el el-tr" src={elArticle} alt="" />
            <img className="el el-bl" src={elArticle} alt="" />
            <img className="el el-br" src={elArticle} alt="" />
          </article>
          <div className="tokenomic-buy">
            <p>
              <img src={quoteLeft} alt="quote" />
              <span>
                { t('tokenomic.presale.paragraph')}{ ' '}
                <span className="quantity">100 000 000 000 akron</span>
              </span>
              <img src={quoteRight} alt="quote" />
            </p>
            <Button text={t('tokenomic.presale.button-buy')} />
          </div>
        </div>
      </div>
    </section>
  )
}
