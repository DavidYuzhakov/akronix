import quoteLeft from "../assets/icons/quote-left.svg"
import quoteRight from "../assets/icons/quote-right.svg"
import quoteText from "../assets/icons/quote-text.svg"
import tgIcon from "../assets/icons/tg.svg"
import ytIcon from "../assets/icons/yt.svg"
import xIcon from "../assets/icons/x.svg"
import dexIcon from "../assets/icons/dextool.svg"
import stonefiIcon from "../assets/icons/stonefi.svg"
import { useInView } from "react-intersection-observer"

export function About () {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true })
  
  return (
    <>
      <div className="about-title">
        <img src={quoteLeft} alt="quote" />
        <h5>Противостояние добра и зла</h5>
        <img src={quoteRight} alt="quote" />
      </div>
      <div className="about-text">
        <img src={quoteText} alt="qutoe" />
        <p>джедаев и ситхов, республики и империи в различных игровых вариациях и сюжетах станут увлечением широких масс аудитории, от заядлых геймеров до любителей провести свободные минуты за любимыми играми.</p>
        <img src={quoteText} alt="qutoe" />
      </div>
      <div ref={ref} className={`about-social ${inView ? '_animate' : ''}`}>
        <a href="#">
          <img src={tgIcon} alt="telegram" />
        </a>
        <a href="#">
          <img src={ytIcon} alt="youtube" />
        </a>
        <a href="#">
          <img src={xIcon} alt="x" />
        </a>
        <a href="#">
          <img src={dexIcon} alt="dextool" />
        </a>
        <a href="#">
          <img src={stonefiIcon} alt="stonefi" />
        </a>
      </div>
    </>
  )
}