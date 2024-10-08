import styles from './Form.module.scss'

import quoteLeft from '../../assets/icons/quote-left.svg'
import quoteRight from '../../assets/icons/quote-right.svg'
import el from '../../assets/icons/block-el.svg'
import lines from '../../assets/images/tokenomic/lines-price.svg'
import { FormContent } from "../FormContent"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useProofApi } from '../../hooks/useProofApi'
import { useAuth } from '../../context/AuthContext'
import useTonConnect from '../../hooks/useTonConnect'
import { useTonConnectUI } from '@tonconnect/ui-react'

export function Form() {
  const { t } = useTranslation()
  const ProofApi = useProofApi()
  const TonConnect = useTonConnect()
  const { isAuth, setIsAuth } = useAuth()
  const [tonConnectUI] = useTonConnectUI()

  const [infoPresale, setInfoPresale] = useState({})

  useEffect(() => {
    async function fetchInfo () {
      const info = await ProofApi.getPresaleInfo()
      setInfoPresale(info) 
    }
    fetchInfo()

    const subscribe = setInterval(() => {
      fetchInfo()
    }, 20000);

    return () => clearInterval(subscribe)
  }, [])

  useEffect(() => {
    if (isAuth) {
      TonConnect.fetchAuthUser()
    } else if (tonConnectUI.connected) {
      tonConnectUI.disconnect()
    }
  }, [isAuth])

  useEffect(() => {
    if (localStorage.getItem('token') && tonConnectUI.connected) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  })


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
        { t('tokenomic.form.title.first') } <br /> { t('tokenomic.form.title.second') } ${infoPresale.current_amount * infoPresale.price } 
      </h2>
      <img className={styles.el} src={el} alt="" />
      <div className={styles.fragment}>
        <img src={lines} alt="" />
        <span className={styles.price}>1 akron = ${infoPresale.price}</span>
        <img src={lines} alt="" />
      </div>
      <FormContent 
        available={infoPresale.max_amount * infoPresale.price - infoPresale.current_amount * infoPresale.price}
        price={infoPresale.price} 
        tonPrice={infoPresale.ton_price}
      />
      <p className={styles.text}>{ t('tokenomic.form.text') }</p>
    </div>
  )
}
