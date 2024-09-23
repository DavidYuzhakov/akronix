import styles from "./Title.module.scss"
import quoteLeft from "../../assets/icons/quote-left.svg"
import quoteRight from "../../assets/icons/quote-right.svg"

export function Title ({ text }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <img src={quoteLeft} alt="quote" />
        <h4>{ text }</h4>
        <img src={quoteRight} alt="quote" />
      </div>
      <span className="ton-project__line" />
    </div>
  )
}
