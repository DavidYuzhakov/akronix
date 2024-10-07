import { useTranslation } from "react-i18next";
import quoteText from "../assets/icons/quote-text.svg"
import arrow from "../assets/images/ton/arrow-right.svg"
import copied from "../assets/icons/check.svg"

import { useState } from "react";

export function Token () {
  const { t } = useTranslation()
  const [isCopied, setIsCopied] = useState(false)
  const token = 'EQA9IwEJ9djs2VnWTdwNCTUqW8qb-ESKFbpNlNS8Wg5yQB2u';

  function copyHandler () {ы
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
    avigator.clipboard.writeText(token)
  }

  return (
    <>
      <div className="about-text token-text">
        <img src={quoteText} alt="qutoe" />
        <p>{ t('token.text-quote') }</p>
        <img src={quoteText} alt="qutoe" />
      </div>
      <p className="token-name">{ t('token.paragraph')}</p>
      <button onClick={copyHandler} className="token-btn">
        <div>{token.slice(0, -3)}</div>
        <span>{token.slice(-3)}</span>
        <img width={23} height={23} src={isCopied ? copied :arrow} alt="arrow" />
      </button>
    </>
  )
}