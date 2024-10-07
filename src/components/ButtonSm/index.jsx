import styles from "./ButtonSm.module.scss"
import btn from "../../assets/icons/button-sm.svg"

export const ButtonSm = ({ text, link }) => {
  return (
    <a href={link ?? '#!'} className={styles.btn}>
      <img src={btn} alt="" />
      <span>{ text }</span>
      <div />
    </a>
  )
}
