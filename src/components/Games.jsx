import { Title } from './Title'
import { Slider } from './Slider'

import logo from '../assets/icons/unity.svg'
import { slides } from '../data'

import elImg from "../assets/images/slider/el.svg"
import { useTranslation } from 'react-i18next'

export function Games() {
  const { t } = useTranslation()

  return (
    <div id={'games'} className="games">
      <div className="container">
        <Title text={t('games.paragraph')} />
        <div className="games-wrapper">
          <Slider slides={slides} />
        </div>
        <div className="games-unity">
          <img className='el el-tl' src={elImg} alt="" />
          <img className='el el-tr' src={elImg} alt="" />
          <img className='el el-bl' src={elImg} alt="" />
          <img className='el el-br' src={elImg} alt="" />
          <div className="games-unity__content">
            <h2>{ t('games.title') }</h2>
            <p>{ t('games.text') }</p>
          </div>
          <img className='games-logo' src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}
