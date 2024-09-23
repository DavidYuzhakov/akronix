import { Title } from './Title'
import { Slider } from './Slider'

import logo from '../assets/icons/unity.svg'
import { slides } from '../data'

import elImg from "../assets/images/slider/el.svg"

export function Games() {
  return (
    <div id={'games'} className="games">
      <div className="container">
        <Title text={'доступные на данный момент игры:'} />
        <div className="games-wrapper">
          <Slider slides={slides} />
        </div>
        <div className="games-unity">
          <img className='el el-tl' src={elImg} alt="" />
          <img className='el el-tr' src={elImg} alt="" />
          <img className='el el-bl' src={elImg} alt="" />
          <img className='el el-br' src={elImg} alt="" />
          <div className="games-unity__content">
            <h2>интеграция игр с unity</h2>
            <p>
              Благодаря возможностям движка unity мы смогли интегрировать все
              преимущества 3d визуализации, красоты графики и особенностей
              Геймплея и всех 3д фишек в акроникс и сделали доступным запуск
              классных 3 д игр прямо из телеги.
            </p>
          </div>
          <img className='games-logo' src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}
