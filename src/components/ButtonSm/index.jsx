import styles from "./ButtonSm.module.scss"
import btn from "../../assets/icons/button-sm.svg"

export const ButtonSm = ({ text }) => {
  return (
    <div className={styles.btn}>
      <img src={btn} alt="" />
      <span>{ text }</span>
      <div />
    </div>
  )
}
