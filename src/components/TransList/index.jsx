import ton from "../../assets/icons/ton.svg"
import usdt from "../../assets/icons/usdt.svg"
import arrow from "../../assets/images/ton/arrow-right.svg"

import styles from "./TransList.module.scss"
import { Title } from "../Title"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"
import { useForm } from "../../context/FormContext"

export function TransList () {
  const { t } = useTranslation()
  const { infoPresale } = useForm()

  const {ref, inView} = useInView({
    threshold: .1,
    triggerOnce: true
  })

  return (
    <div className={styles.wrapper}>
      <Title text={t('tokenomic.form.paragraph')} />
      <div ref={ref} className={`${styles.list} ${inView ? styles._animate : ''}`}>
        {infoPresale.last_transactions?.length > 0 ? infoPresale.last_transactions.map((transaction, i) => (
          <div 
            key={transaction.id} 
            style={{ transition: `opacity .4s ease-in-out 0.${i}s` }}
            className={styles.item}
          >
            <div className={styles.left}>
              <img src={transaction.is_ton ? ton : usdt} alt={transaction.type} />
              <span>{ transaction.amount } { transaction.is_ton ? 'ton' : 'usdt' }</span>
            </div>
            <div className={styles.right}>
              <a className={styles.token} href="#">{ transaction.hash }</a>
              <a href="#"><img src={arrow} alt="arrow" /></a>
            </div>
          </div>
        )) : t('tokenomic.form.warn_text')}
      </div>
    </div>
  )
}
