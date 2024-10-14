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
          <a href="https://t.me/akronix_p2e" target={"_blank"}><img src={tgIcon} alt="telegram" /></a>
          <a href="https://youtube.com/@akronix_legacy" target={"_blank"}><img src={ytIcon} alt="youtube" /></a>
          <a href="https://x.com/akronix_p2e" target={"_blank"}><img src={xIcon} alt="x" /></a>
        </div>
        <nav className="footer__nav">
        <ul>
              <li onClick={(e) => handleScrollTo(e, 'about')}>
                <a href="#">{ t('nav.0') }</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'nft')}>
                <a href="#">{ t('nav.1') }</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'games')}>
                <a href="#">{ t('nav.2') }</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'reference')}>
                <a href="#">{ t('nav.3') }</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'akron-token')}>
                <a href="#">{ t('nav.4') }</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'whitepaper')}>
                <a href="#">{ t('nav.5') }</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'roadmap')}>
                <a href="#">{ t('nav.6') }</a>
              </li>
              <li className={'disabled'}>
                <a href="#">{ t('nav.7') }</a>
              </li>
            </ul>
          <img src={el} alt="" />
        </nav>
        <div className="footer__copyright">
        ©Copyright 2024 akronix. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}