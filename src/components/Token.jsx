import quoteText from "../assets/icons/quote-text.svg"
import arrow from "../assets/images/ton/arrow-right.svg"

export function Token () {
  const token = 'EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav';

  return (
    <>
      <div className="about-text token-text">
        <img src={quoteText} alt="qutoe" />
        <p>Благодаря своим уникальным характеристикам и преимуществам, AKRON способствует развитию децентрализованной игровой экосистемы, делая ее более инновационной, безопасной и экономически устойчивой. Ликвидность и популярность токена дополнительно подкреплена интересом и оборотом средств внутри всех продуктов экосистемы Arkonix</p>
        <img src={quoteText} alt="qutoe" />
      </div>
      <p className="token-name">адрес токена akron:</p>
      <button className="token-btn">
        <div>{token.slice(0, -3)}</div>
        <span>{token.slice(-3)}</span>
        <img src={arrow} alt="arrow" />
      </button>
    </>
  )
}