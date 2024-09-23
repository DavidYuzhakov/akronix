import styles from "./Block.module.scss"

import elImg from "../../assets/icons/block-el.svg"
import quoteLeft from "../../assets/icons/quote-left.svg";
import quoteRight from "../../assets/icons/quote-right.svg";
import { useInView } from "react-intersection-observer";

export function Block ({ suptitle, titleHeader, title, text, children, img, id }) {
  const {ref, inView} = useInView({
    threshold: .2,
  })

  return (
    <div id={id} className={`${styles.block} ${inView ? styles._animate : ''}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p>{ suptitle }</p>
          <h4>
            <img src={quoteLeft} alt="quote" />
            <span>{ titleHeader }</span>
            <img src={quoteRight} alt="quote" />
          </h4>
        </div>
        <div className={styles.content}>
          <h2 className="title">{ title.first }<br /> { title.second }</h2>
          <img className={styles.img} src={elImg} alt="" />
          <p className={styles.text}>{ text }</p>
          { children }
        </div>
      </div>
      {img && <img className={styles.bg} src={img} alt="bg" />}
    </div>
  )
}