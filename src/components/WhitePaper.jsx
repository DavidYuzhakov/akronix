import wpImg from '../assets/images/whitepaper/white-paper.png'
import wpBg from '../assets/images/whitepaper/bg.png'
import wpLines from '../assets/images/whitepaper/lines.svg'
import linesBg from '../assets/images/whitepaper/block-lines.svg'

import { ButtonSm } from "./ButtonSm"

export function WhitePaper() {
  return (
    <div id="whitepaper" className="whitepaper">
      <div className="container">
        <div className="whitepaper__container">
          <div className="whitepaper-wrapper">
            <div className="whitepaper__content">
              <h2>Ознакомьтесь с нашим официальным white paper</h2>
              <div className="whitepaper__img">
                <img src={wpImg} alt="whitepaper" />
              </div>
              <p>
                pdf файл содержит в себе более подробную информацию о платформе
                akronix, токене и функционале
              </p>
              <div>
                <ButtonSm text={'открыть'} />
                <a href="#">скачать(15mb)</a>
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
