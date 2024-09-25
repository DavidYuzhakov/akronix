import bgIntro from "../assets/images/intro/bg.png"
import character from "../assets/images/intro/character.png"
import videoImg from "../assets/images/video-player.png"
import playImg from "../assets/icons/play.svg"

import { Button } from "./Button"
import { useInView } from 'react-intersection-observer'
import { useTranslation } from "react-i18next"

export function Intro () {
  const { t } = useTranslation()
  const { ref, inView } = useInView({
    threshold: .1,
    triggerOnce: true
  })

  return (
    <div ref={ref} className={`intro ${inView ? '_animate' : ''}`}>
      <img className='intro-bg' src={bgIntro} alt="" /> 
      <div className="container">
        <img className={`intro__character`} src={character} alt="character" />
        <div className={`intro__content`}>
          <h1>the stars legacy</h1>
          <Button notAnimate text={t('intro.button')} />
        </div>
      </div>
      <div className="video">
        <img className="video-img" src={videoImg} alt="video" />
        <button>
          <img src={playImg} alt="play" />
        </button>
        <div className="video-bg" />
      </div>
    </div>
  )
}

