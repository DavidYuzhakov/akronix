import styles from "./ButtonSm.module.scss"
import btn from "../../assets/icons/button-sm.svg"

export const ButtonSm = ({ text, link }) => {
  return (
    <a href={link ?? '#!'}  target={"_blank"} className={styles.btn}>
      <img src={btn} alt="" />
      <span>{ text }</span>
      <div />
    </a>
  )
}
