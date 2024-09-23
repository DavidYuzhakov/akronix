import { useState } from 'react'
import styles from './FormContent.module.scss'

import ton from '../../assets/icons/ton.svg'
import usdt from '../../assets/icons/usdt.svg'
import copy from '../../assets/icons/copy.svg'
import copied from '../../assets/icons/check.svg'

import notPassed from '../../assets/images/tokenomic/nft/item.svg'
import passed from '../../assets/icons/check.svg'
import arrow from '../../assets/images/tokenomic/nft/arrow.svg'

import { nft } from '../../data'

export function FormContent({ balance }) {
  const reference = 'https://www.youtube.com/watch?v=EpglImt321'
  const myScore = 750

  const [activeTab, setActiveTab] = useState('buy')
  const [currency, setCurrency] = useState('usdt')
  const [amount, setAmount] = useState(12345.67)
  const [value, setValue] = useState(1)

  const [isUsdt, setIsUsdt] = useState(false)
  const [isCopied, setIsCopied] = useState(false);
  const [enabledPay, setEnabledPay] = useState(false)


  function changeHandler(e) {
    if (e.target.value < 0) {
      setValue(0)
    } else {
      setValue(e.target.value)
    }
  }

  function submitHandler (e) {
    e.preventDefault()
    const type = e.target.dataset.type
    if (type === 'buy') {
      setEnabledPay(true)
    }
  }

  function tabHandler (tab) {
    if (enabledPay) {
      setActiveTab(tab)
    } else {
      setActiveTab('info')
    }
  }

  function copyHandler () {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
    navigator.clipboard.writeText(reference)
  }

  return (
    <form data-type={activeTab} onSubmit={submitHandler}>
      <div className={styles.tabs}>
        <div
          onClick={() => setActiveTab('buy')}
          className={`${styles.tab} ${styles.buy} ${activeTab === 'buy' ? styles.active : ''}`}
        >
          купить
        </div>
        <div
          onClick={() => tabHandler('claim')}
          className={`${styles.tab} ${styles.claim} ${activeTab === 'claim' ? styles.active : ''}`}
        >
          CLAIM
        </div>
        <div
          onClick={() => tabHandler('partner')}
          className={`${styles.tab} ${styles.partner} ${activeTab === 'partner' ? styles.active : ''}`}
        >
          Партнерка
        </div>
        <div
          onClick={() => tabHandler('nft')}
          className={`${styles.tab} ${styles.nft} ${activeTab === 'partner' ? styles.active : ''}`}
        >
          nft
        </div>
      </div>
      {activeTab === 'buy' &&
        <div className={styles.buy}>
          <fieldset>
            <legend className={styles.text}>Выберите валюту обмена:</legend>
            <label
              className={`${styles.currency} ${
                currency === 'usdt' ? styles.active : ''
              }`}
              htmlFor="usdt"
            >
              <input type="radio" id="usdt" onClick={() => setCurrency('usdt')} />
              <img src={usdt} alt="usdt" />
              <span>USDT</span>
            </label>
            <label
              className={`${styles.currency} ${
                currency === 'ton' ? styles.active : ''
              }`}
              htmlFor="ton"
            >
              <input type="radio" id="ton" onClick={() => setCurrency('ton')} />
              <img src={ton} alt="usdt" />
              <span>ton</span>
            </label>
          </fieldset>
          <div className={styles.inputField}>
            <label htmlFor="amount">
              <span>{currency} вы платите:</span>
              <span>БАЛАНС: {balance}</span>
            </label>
            <input
              id="amount"
              value={value}
              type="number"
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="akron">
              <span>AKRON вы получаете:</span>
              <button type="button">макс.</button>
            </label>
            <input
              id="akron"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className={'btn'} type="submit">
            Подключить кошелек
          </button>
        </div>
      }
      {activeTab === 'claim' &&
        <div className={styles.claim}>
          <p className={styles.text}>всего вы получите</p>
          <h3>12345.67 akron</h3>
          <ul className={styles.list}>
            <li>
              <div>
                <span>Объем разлока:</span>
                <span>125 дней</span>
              </div>
            </li>
            <li>
              <div>
                <span>До разлока:</span>
                <span>12:55:34:12</span>
              </div>
            </li>
            <li>
              <div>
                <span>Ежемесячный разлок:</span>
                <span>4567 AKRON</span>
              </div>
            </li>
            <li>
              <div>
                <span>всего разлочено:</span>
                <span>482398.43 akron</span>
              </div>
            </li>
          </ul>
          <button className='btn' type="submit">claim akron</button>
        </div>
      }
      {activeTab === 'partner' &&
        <div className={styles.partner}>
          <p className={styles.text}>ваша партнерская ссылка:</p>
          <div className={`${styles.inputField} ${styles.field}`}>
            <input
              value={reference}
              type="text"
              onChange={changeHandler}
              disabled
            />
            <img onClick={copyHandler} src={isCopied ? copied : copy} alt="copy" />
          </div>
          <ul className={styles.list}>
            <li>
              <div>
                <span>Всего партнеров:</span>
                <span>123456</span>
              </div>
            </li>
            <li>
              <div>
                <span>Партнеры инвестировали:</span>
                <span>$1234567.86</span>
              </div>
            </li>
          </ul>
          <div className={styles.info}>
            <div className={styles.card}>
              <h5>вы заработали:</h5>
              <p>12347.24 ton</p>
              <p>1234.34 usdt</p>
            </div>
            <div className={styles.card}>
              <h5>доступно для клема:</h5>
              <p>124.56 ton</p>
              <p>2759.99 usdt</p>
            </div>
          </div>
          <button className='btn' type="submit">claim rewards</button>
        </div>
      }
      {activeTab === 'info' &&
        <div className={styles.information}>
          <p className={styles.text}>вы не подключили кошелек:</p>
          <button onClick={() => setActiveTab('buy')} className='btn' type='button'>подключить кошелек</button>
        </div>
      }
      {activeTab === 'nft' && 
        <div className={styles.nft}>
          <div className={styles.nftTop}>
            <legend>ваша прогресс бонусных NFT:</legend>
            <div className={styles.switch}>
              <label className={isUsdt ? styles.active : ''}>
                <img src={usdt} alt="usdt" />
                usdt
              </label>
              <label className={styles.switcher}>
                <input checked={isUsdt} type="checkbox" onChange={() => setIsUsdt(prev => !prev)} />
                <span className={isUsdt ? styles.left : ''} />
              </label>
              <label className={!isUsdt ? styles.active : ''}>
                <img src={ton} alt="ton" />
                ton
              </label>
            </div>
          </div>
          <div className={styles.nftContent}>
            <div className={styles.progressBar}>
              {[...new Array(82)].map((_, i) => (
                <span className={(i + 1) <= 45 ? styles.fill : ''} />
              ))}
            </div>
            {nft.map(card => (
              <div key={card.id} className={styles.nftCard}>
                <img src={arrow} alt="arrow" />
                <div className={styles.content}>
                  <div className={styles.score}>
                    { card.score }
                  </div>
                  <div className={styles.el}>
                    <img src={myScore > card.score ? passed : notPassed} alt="" />
                  </div>
                  <img className={styles.char} src={`/akronix/nft/${card.id}.png`} alt="character" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.info}>
            <div className={styles.card}>
              <h5>вы инвестировали:</h5>
              <p>340.56 ton</p>
            </div>
            <div className={styles.card}>
              <h5>до след. NFT:</h5>
              <p>760.56 ton</p>
            </div>
          </div>
          <button className='btn' type='submit'>
            claim nft
          </button>
        </div>
      }
    </form>
  )
}
