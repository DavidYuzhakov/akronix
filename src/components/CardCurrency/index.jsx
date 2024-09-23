import styles from "./CardCurrency.module.scss"
import bottomImg from "../../assets/images/ton/currency-bottom.svg"
import { useInView } from "react-intersection-observer"

export function CardCurrency ({ title, text, icon, index }) {
  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true
  })

  return (
    <div 
      ref={ref} 
      className={`${styles.card} ${inView ? styles._animate : ''}`}
      style={{ 
        transition: `all .4s ease-in-out ${index / 2 - .5}s`
      }}
    >
      <div className={styles.top}>
        <img src={icon} alt="" />
      </div>
      <h3>{ title }</h3>
      <p>{ text }</p>
      <img className={styles.bottom} src={bottomImg} alt="" />
    </div>
  )
}