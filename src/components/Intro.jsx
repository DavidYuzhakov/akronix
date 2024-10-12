import bgIntro from "../assets/images/intro/bg.png"
import character from "../assets/images/intro/character.png"
import videoImg from "../assets/images/video-player.png"
import playImg from "../assets/icons/play.svg"
import video from "../assets/video.mp4"

import { Button } from "./Button"
import { useInView } from 'react-intersection-observer'
import { useTranslation } from "react-i18next"
import { useState } from "react"

export function Intro () {
  const [showVideo, setShowVideo] = useState(false)
  const { t } = useTranslation()
  const { ref, inView } = useInView({
    threshold: .1,
    triggerOnce: true
  })

  function openModal () {
    setShowVideo(true)
    document.body.classList.add('lock')
  }

  function closeModal (e) {
    if (!e.target.closest('.video')) {
      setShowVideo(false)
      document.body.classList.remove('lock')
    }
  }

  return (
    <>
      <div ref={ref} className={`intro ${inView ? '_animate' : ''}`}>
        <img className='intro-bg' src={bgIntro} alt="" /> 
        <div className="container">
          <img className={`intro__character`} src={character} alt="character" />
          <div className={`intro__content`}>
            <h1>the stars legacy</h1>
            <Button link={'https://t.me/akronix_bot'} notAnimate text={t('intro.button')} />
          </div>
        </div>
        <div className="video">
          <img className="video-img" src={videoImg} alt="video" />
          <button onClick={() => openModal()} type="button">
            <img src={playImg} alt="play" />
          </button>
          <div className="video-bg" />
        </div>
      </div>
      {showVideo && <div onClick={(e) => closeModal(e)} className="dropdown">
        <video className='video' width={840} height={560} autoPlay muted controls src={video}></video>
      </div>}
    </>
  )
}

