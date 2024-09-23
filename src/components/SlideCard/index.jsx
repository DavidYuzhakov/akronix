import styles from './SlideCard.module.scss'
import elBottom from '../../assets/images/ton/currency-bottom.svg'
import elTop from '../../assets/images/slider/el.svg'
import { ButtonSm } from '../ButtonSm'

export function SlideCard ({ title, text, imgId, btnText }) {
  return (
    <div style={{ backgroundImage: `url('/akronix/slides/${imgId}.jpg')` }} className={styles.slide}>
      <div className={styles.content}>
        <div className={styles.head}>
          <img src={`/akronix/slides/${imgId}.svg`} alt="icon" />
          <span className={styles.line} />
          <h3><span>{ title.first } </span> { title.second }</h3>
        </div>
        <p>{ text }</p>
        <ButtonSm text={btnText ? btnText : 'играть'} />
      </div>
      <img className={styles.elBottom} src={elBottom} alt="" />
      <img className={styles.elTop} src={elTop} alt="" />
      <img className={styles.char} src={`/akronix/slides/${imgId}.png`} alt="" />
    </div> 
  )
}