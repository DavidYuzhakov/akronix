import styles from './Form.module.scss'

import quoteLeft from '../../assets/icons/quote-left.svg'
import quoteRight from '../../assets/icons/quote-right.svg'
import el from '../../assets/icons/block-el.svg'
import lines from '../../assets/images/tokenomic/lines-price.svg'
import { FormContent } from "../FormContent"
import { useTranslation } from 'react-i18next'

export function Form() {
  const { t } = useTranslation()
  const price = 0.1234567
  const balance = 12345.67

  return (
    <div className={styles.block}>
      <div className={styles.head}>
        <p>{ t('tokenomic.form.head.suptitle') }</p>
        <h4>
          <img src={quoteLeft} alt="quote" />
          <span>{ t('tokenomic.form.head.title') }</span>
          <img src={quoteRight} alt="quote" />
        </h4>
      </div>
      <h2>
        { t('tokenomic.form.title.first') } <br /> { t('tokenomic.form.title.second') } $500 000
      </h2>
      <img className={styles.el} src={el} alt="" />
      <div className={styles.fragment}>
        <img src={lines} alt="" />
        <span className={styles.price}>1 akron = ${price}</span>
        <img src={lines} alt="" />
      </div>
      <FormContent balance={balance} />
      <p className={styles.text}>{ t('tokenomic.form.text') }</p>
    </div>
  )
}
