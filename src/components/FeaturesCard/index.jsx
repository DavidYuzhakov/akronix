import styles from "./FeaturesCard.module.scss"
import bottomImg from "../../assets/images/ton/currency-bottom.svg"
import { useInView } from "react-intersection-observer"

export function FeaturesCard ({ title, text, index }) {
  const {ref, inView} = useInView({
    threshold: .3,
    triggerOnce: true
  })

  return (
    <div 
      className={`${styles.card} ${inView ? styles._animate : ''}`}
      ref={ref}
      style={{
        transition: `all .4s ease-in-out ${index / 2 - .5}s`
      }}
    >
      <div className={styles.top}>
        <img src={`/akronix/features/${index}.svg`} alt="icon" />
      </div>
      <h3>{ title }</h3>
      <p>{ text }</p>
      <img className={styles.bottom} src={bottomImg} alt="" />
    </div>
  )
}