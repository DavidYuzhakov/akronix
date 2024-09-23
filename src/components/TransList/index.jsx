import ton from "../../assets/icons/ton.svg"
import usdt from "../../assets/icons/usdt.svg"
import arrow from "../../assets/images/ton/arrow-right.svg"

import styles from "./TransList.module.scss"
import { Title } from "../Title"
import { useInView } from "react-intersection-observer"

export function TransList ({ transactions }) {
  const {ref, inView} = useInView({
    threshold: .1,
    triggerOnce: true
  })

  return (
    <div className={styles.wrapper}>
      <Title text={'последние транзакции'} />
      <div ref={ref} className={`${styles.list} ${inView ? styles._animate : ''}`}>
        {transactions.slice(0, 15).map((transaction, i) => (
          <div 
            key={i} 
            style={{ transition: `opacity .4s ease-in-out 0.${i}s` }}
            className={styles.item}
          >
            <div className={styles.left}>
              <img src={transaction.type === 'ton' ? ton : usdt} alt={transaction.type} />
              <span>{ transaction.value } { transaction.type }</span>
            </div>
            <div className={styles.right}>
              <a className={styles.token} href="#">{ transaction.link }</a>
              <a href="#"><img src={arrow} alt="arrow" /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
