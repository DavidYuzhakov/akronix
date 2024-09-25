import bg from '../assets/images/banner/bg.svg'
import first from '../assets/images/banner/1.png'
import second from '../assets/images/banner/2.png'
import quoteLeft from '../assets/icons/quote-left.svg'
import quoteRight from '../assets/icons/quote-right.svg'
import { useTranslation } from 'react-i18next'

export function Banner () {
  const { t } = useTranslation()

  return (
    <div className='banner'>
      <div className="container">
        <div className="banner-wrapper">
          <img className='banner__element banner__element--first' src={first} alt="" />
          <img className='banner__element banner__element--second' src={second} alt="" />
          <div className="banner-content">
            <h3>{ t('banner.title') }</h3>
            <div className='banner-content__text'>
              <img src={quoteLeft} alt="quote" />
              { t('banner.text') }
              <img src={quoteRight} alt="quote" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
