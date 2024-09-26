import { useState } from 'react'
import { Button } from './Button'

import quote from '../assets/icons/quote-text.svg'
import arrow from '../assets/icons/arrow-double.svg'
import damage from '../assets/icons/damage.svg'
import hp from '../assets/icons/hp.svg'
import recharge from '../assets/icons/recharge.svg'

import { StatBar } from './StatBar'
import { useTranslation } from 'react-i18next'

export function Nft({ characters }) {
  const { t } = useTranslation()
  const [currentId, setCurrentId] = useState(1)
  const character = characters.find((item) => item.id === currentId)

  function clickHandler(id) {
    if (id) {
      return setCurrentId(id)
    }
  }

  return (
    <>
      <div className="nft">
        <div className="nft-list">
          <img className="nft-list__quote" src={quote} alt="quote" />
          <div className="nft-list__items">
            {characters.map((item) => (
              <div
                key={item.id}
                className="nft-list__item"
                onClick={() => (!item.locked ? clickHandler(item.id) : {})}
              >
                <img
                  height={120}
                  width={84}
                  src={`/akronix/nft/${!item.locked ? item.id : 'coming'}.png`}
                  alt="character"
                />
                <span className={item.id === currentId ? 'active' : ''} />
              </div>
            ))}
          </div>
        </div>
        <div className="nft-card">
          <img src={`/akronix/nft/${currentId}.png`} alt="" />
          <span />
        </div>
        <div className="nft-info">
          <img className="nft-info__img" src={arrow} alt="" />
          <div className="nft-info__content">
            <h3>{character.name}</h3>
            <p>{t('nft.paragraph')}</p>
            <div className="nft-info__properties">
              {character && (
                <>
                  <StatBar
                    width={(character.damage / 100) * 100}
                    value={`${character.damage} ${t('nft.performance.0.measure')}`}
                    icon={damage}
                    colors={['#FF7801', '#FF9501']}
                    label={t('nft.performance.0.type')}
                  />
                  <StatBar
                    width={(character.recharge / 8) * 100}
                    value={`+${character.recharge}%/${t('nft.performance.1.measure')}`}
                    icon={recharge}
                    colors={['#6C17FF', '#A50CFE']}
                    label={t('nft.performance.1.type')}
                  />
                  <StatBar
                    width={(parseFloat(character.hp) / 100.0) * 100}
                    value={character.hp}
                    icon={hp}
                    colors={['#DD1440', '#FF2835']}
                    label={t('nft.performance.2.type')}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Button text={'mint your nft'} />
    </>
  )
}
