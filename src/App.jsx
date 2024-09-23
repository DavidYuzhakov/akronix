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

import { akronList, cards, characters, features, roadmapData } from './data'

function App() {
  return (
    <div className="wrapper">
      <LayoutBg />
      <Navigation />
      <Intro />
      <Block
        id={'about'}
        title={{ first: 'Наслаждайся', second: 'игрой и зарабатывай' }}
        suptitle={'play-to-ern'}
        titleHeader={'игровая криптовселенная akronix'}
        text={
          'Akronix это игровая криптовселенная, построенная на принципе play-to-earn. Akronix содержит в себе множество игр разных жанров, связанных одним сюжетом.'
        }
        img={aboutBg}
      >
        <About />
      </Block>
      <Tone cards={cards} />
      <Block
        id={'nft'}
        title={{ first: 'отправляйся', second: 'в бой со своим персонажем' }}
        suptitle={'nft characters '}
        titleHeader={'Найми своего NFT-персонажа'}
        text={'список NFT-персонажей доступных на данный момент для минта.'}
        img={nftBg}
      >
        <Nft characters={characters} />
      </Block>
      <Banner />
      <Games />
      <Block
        id={'reference'}
        title={{ first: 'Приглашайте', second: 'Друзей и сражайся вместе' }}
        titleHeader={'ваша Сила в Единстве'}
        suptitle={'referral program'}
        text={
          'На Akronix вы можете приглашать своих друзей и получать за это вознаграждения! '
        }
      >
        <div className="about-text">
          <img src={quoteText} alt="qutoe" />
          <p>
            джедаев и ситхов, республики и империи в различных игровых вариациях
            и сюжетах станут увлечением широких масс аудитории, от заядлых
            геймеров до любителей провести свободные минуты за любимыми играми.
          </p>
          <img src={quoteText} alt="qutoe" />
        </div>
        <Button text={'invite frient'} />
      </Block>
      <Reference />
      <Akron />
      <Block
        title={{ first: 'это ключевой', second: 'элемент платформы akronix' }}
        text={
          'Akron на сети TON, обеспечивает множество функций и возможностей и используется для всех внутренних транзакций на игровой площадке akronix'
        }
        titleHeader={'игровой Токен AKRON'}
        suptitle={'our main token'}
      >
        <Token />
      </Block>
      <Features features={features} />
      <Tokenomic akronList={akronList} />
      <WhitePaper />
      <Roadmap steps={roadmapData} />
      <Footer />
    </div>
  )
}

export default App
