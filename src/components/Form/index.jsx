import { useState } from 'react'
import styles from './Form.module.scss'

import quoteLeft from '../../assets/icons/quote-left.svg'
import quoteRight from '../../assets/icons/quote-right.svg'
import el from '../../assets/icons/block-el.svg'
import lines from '../../assets/images/tokenomic/lines-price.svg'
import { FormContent } from "../FormContent"

export function Form() {
  const price = 0.1234567
  const balance = 12345.67

  return (
    <div className={styles.block}>
      <div className={styles.head}>
        <p>akron presale</p>
        <h4>
          <img src={quoteLeft} alt="quote" />
          <span>форма покупки</span>
          <img src={quoteRight} alt="quote" />
        </h4>
      </div>
      <h2>
        собрано <br /> более $500 000
      </h2>
      <img className={styles.el} src={el} alt="" />
      <div className={styles.fragment}>
        <img src={lines} alt="" />
        <span className={styles.price}>1 akron = ${price}</span>
        <img src={lines} alt="" />
      </div>
      <FormContent balance={balance} />
      <p className={styles.text}>для корректной работы с блокчейном реккомендуем использовать кошелек Tonkeeper</p>
    </div>
  )
}
