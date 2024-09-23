import el from '../assets/icons/block-el.svg'
import arrowImg from '../assets/icons/arrow-double.svg'
import topEl from '../assets/images/ton/currency-bottom.svg'
import bottomEl from '../assets/images/roadmap/el.png'
import SimpleBar from 'simplebar-react'

import 'simplebar-react/dist/simplebar.min.css'

export function Roadmap({ steps }) {
  return (
    <div id="roadmap" className="roadmap">
      <h2 className="title">
        roadmap <br />
        наше пошаговое развитие
      </h2>
      <img className="roadmap__el" src={el} alt="" />
      <SimpleBar>
        <div className="container">
          <div className="roadmap__items">
            {steps
              .map((step, index) => (
                <div
                  className={`roadmap__item 
                  ${
                    index % 2 === 0
                      ? 'roadmap__item--left'
                      : 'roadmap__item--right'
                  } ${step.locked ? 'locked' : ''}`}
                  key={index}
                >
                  <div className="roadmap__arrow">
                    <img src={arrowImg} alt="" />
                  </div>
                  <div className="roadmap__content">
                    <img className="roadmap__top-el" src={topEl} alt="" />
                    <h3>{step.title}</h3>
                    <ul>
                      {step.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <div className="roadmap__bottom">
                      <img className="roadmap__bottom-el" src={bottomEl} alt="" />
                      <div className="roadmap__icon">
                        <img src={`/akronix/roadmap/${step.icon}`} alt="icon" />
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}
