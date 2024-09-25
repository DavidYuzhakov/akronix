import { useTranslation } from "react-i18next";
import { FeaturesCard } from "./FeaturesCard";
import { Title } from "./Title";

export function Features () {
  const { t } = useTranslation() 

  return (
    <div className="features">
      <div className="container">
        <Title text={t('features.paragraph')} />
        <div className="features__items">
          {[...new Array(4)].map((_, i) => <FeaturesCard 
            key={i} 
            index={i + 1} 
            text={t(`features.cards.${i}.text`)} 
            title={t(`features.cards.${i}.title`)} 
          />)}
        </div>
      </div>
    </div>
  )
}