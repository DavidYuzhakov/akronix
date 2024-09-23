import { useEffect, useState } from 'react'

import styles from './Navigation.module.scss'

import arrowImg from '../../assets/images/langs/arrow.svg'
import rusImg from '../../assets/images/langs/rus.png'
import engImg from '../../assets/images/langs/eng.png'
import logo from '../../assets/images/logo.png'
import tgIcon from '../../assets/icons/tg.svg'
import ytIcon from '../../assets/icons/yt.svg'
import xIcon from '../../assets/icons/x.svg'
import menu from '../../assets/images/header/menu.svg'
import close from '../../assets/images/header/close.svg'
import { useInView } from 'react-intersection-observer'

const list = [
  { name: 'rus', img: rusImg },
  { name: 'eng', img: engImg },
]

export function Navigation() {
  const {ref, inView} = useInView({
    threshold: 1,
    triggerOnce: true
  })

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('eng')
  const [openNav, setOpenNav] = useState(false)

  function changeHandler(name) {
    if (lang === name) {
      return
    } else {
      setLang(name)
      setOpen(false)
    }
  }

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  function handleScrollTo(e, id) {
    e.preventDefault()
    
    setOpenNav(false)
    const block = document.getElementById(id)
    if (block) {
      window.scrollTo({
        top: block.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (window.innerWidth < 992) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    if (openNav) {
      document.body.classList.add('lock')
    } else {
      document.body.classList.remove('lock')
    }
  }, [openNav])

  return (
    <header
      ref={ref}
      className={`
        ${styles.header} 
        ${visible ? styles.active : ''}
        ${inView ? styles._animate : ''}
      `}
    >
      {openNav && <div className={styles.blur} />}
      <div className={styles.bg}>
        <div className={styles.headMobile}>
          <a className={styles.tgNav} href="#">
            <img src={tgIcon} alt="telegram" />
          </a>
          <img className={styles.logoMb} src={logo} alt="logo" />
          <img
            className={styles.icon}
            onClick={() => setOpenNav((prev) => !prev)}
            src={!openNav ? menu : close}
            alt="menu"
          />
        </div>
        <nav className={openNav ? styles.active : ''}>
          <div className={`
            ${styles.menu} 
            ${openNav ? styles.active : ''} 
          `}>
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
                <a href="#">вайтпаппер</a>
              </li>
              <li onClick={(e) => handleScrollTo(e, 'roadmap')}>
                <a href="#">роадмап</a>
              </li>
              <li className={styles.disabled}>
                <a href="#">мастерская</a>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <div className={styles.social}>
              <a href="#">
                <img src={tgIcon} alt="telegram" />
              </a>
              <a href="#">
                <img src={ytIcon} alt="youtube" />
              </a>
              <a href="#">
                <img src={xIcon} alt="x" />
              </a>
            </div>
            <div className={styles.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.langs}>
              <button onClick={() => setOpen((prev) => !prev)} type="button">
                <img
                  width={20}
                  height={20}
                  src={lang === 'rus' ? rusImg : engImg}
                  alt=""
                />
                {lang}
                <img
                  className={`${styles.arrow} ${open ? styles.opened : ''}`}
                  src={arrowImg}
                  alt="arrow"
                />
              </button>
              <ul className={open ? styles.active : ''}>
                {list.map((item) => (
                  <li
                    key={item.name}
                    className={`${item.name === lang ? styles.active : ''}`}
                    onClick={() => changeHandler(item.name)}
                  >
                    <img
                      width={20}
                      height={20}
                      src={item.img}
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {openNav && (
            <button className={styles.wallet}>подключить кошелек</button>
          )}
        </nav>
      </div>
    </header>
  )
}
