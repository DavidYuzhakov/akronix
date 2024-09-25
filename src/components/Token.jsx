import { useTranslation } from "react-i18next";
import quoteText from "../assets/icons/quote-text.svg"
import arrow from "../assets/images/ton/arrow-right.svg"

export function Token () {
  const { t } = useTranslation()
  const token = 'EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav';

  return (
    <>
      <div className="about-text token-text">
        <img src={quoteText} alt="qutoe" />
        <p>{ t('token.text-quote') }</p>
        <img src={quoteText} alt="qutoe" />
      </div>
      <p className="token-name">{ t('token.paragraph')}</p>
      <button className="token-btn">
        <div>{token.slice(0, -3)}</div>
        <span>{token.slice(-3)}</span>
        <img src={arrow} alt="arrow" />
      </button>
    </>
  )
}