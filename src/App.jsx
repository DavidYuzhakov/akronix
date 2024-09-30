import {
  About,
  Block,
  Intro,
  Tone,
  LayoutBg,
  Nft,
  Banner,
  Games,
  Reference,
  Button,
  Akron,
  Token,
  Features,
  Tokenomic,
  WhitePaper,
  Roadmap,
  Footer,
  Navigation,
} from './components'

import aboutBg from './assets/images/about-bg.png'
import nftBg from './assets/images/nft-bg.png'
import quoteText from './assets/icons/quote-text.svg'

import { akronList, cards, characters, roadmapData } from './data'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <LayoutBg />
      <Navigation />
      <Intro />
      <Block
        id={'about'}
        title={{ first: t('about.title.first'), second: t('about.title.second') }}
        suptitle={'play-to-ern'}
        titleHeader={t('about.head.title')}
        text={t('about.text')}
        img={aboutBg}
      >
        <About />
      </Block>
      <Tone cards={cards} />
      <Block
        id={'nft'}
        title={{ first: t('nft.title.first'), second: t('nft.title.second') }}
        suptitle={'nft characters'}
        titleHeader={t('nft.head.title')}
        text={t('nft.text')}
        img={nftBg}
      >
        <Nft characters={characters} />
      </Block>
      <Banner />
      <Games />
      <Block
        id={'reference'}
        title={{ first: t('reference.title.first'), second: t('reference.title.second')}}
        titleHeader={t('reference.head.title')}
        suptitle={'referral program'}
        text={t('reference.text')}
      >
        <div className="about-text">
          <img src={quoteText} alt="qutoe" />
          <p>
            {t('reference.text-quote')}
          </p>
          <img src={quoteText} alt="qutoe" />
        </div>
        <Button text={t('reference.button')} />
      </Block>
      <Reference />
      <Akron />
      <Block
        title={{ first: t('token.title.first'), second: t('token.title.second') }}
        text={t('token.text')}
        titleHeader={t('token.head.title')}
        suptitle={'our main token'}
      >
        <Token />
      </Block>
      <Features />
      <Tokenomic akronList={akronList} />
      <WhitePaper />
      <Roadmap steps={roadmapData} />
      <Footer />
    </div>
  )
}

export default App
