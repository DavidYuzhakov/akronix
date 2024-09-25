import tgIcon from "../assets/icons/tg.svg"
import ytIcon from "../assets/icons/yt.svg"
import xIcon from "../assets/icons/x.svg"
import logo from "../assets/images/logo.png"
import el from "../assets/images/footer/el.svg"
import bg from "../assets/images/footer/bg.png"
import { useTranslation } from "react-i18next"

export function Footer () {
  const { t } = useTranslation()

  function handleScrollTo(e, id) {
    e.preventDefault()
    
    const block = document.getElementById(id)
    if (block) {
      window.scrollTo({
        top: block.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <img className="footer__bg" src={bg} alt="" />
      <div className="container">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__social">
          <a href="#"><img src={tgIcon} alt="telegram" /></a>
          <a href="#"><img src={ytIcon} alt="youtube" /></a>
          <a href="#"><img src={xIcon} alt="x" /></a>
        </div>
        <nav className="footer__nav">
        <ul>
              <li onClick={(e) => handleScrollTo(e, 'about')}>
                <a href="#">о проекте</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'nft')}>
                <a href="#">nft</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'games')}>
                <a href="#">игры</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'reference')}>
                <a href="#">рефералам</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'akron-token')}>
                <a href="#">токен akron</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'whitepaper')}>
                <a href="#">White Paper</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'roadmap')}>
                <a href="#">роадмап</a>
              </li>
              <li className={'disabled'}>
                <a href="#">мастерская</a>
              </li>
            </ul>
          <img src={el} alt="" />
        </nav>
        <div className="footer__copyright">
        ©Copyright 2024 akronix. All Rights Reserved.
        <a href="">{ t('footer.agreement') }</a>
        </div>
      </div>
    </footer>
  )
}