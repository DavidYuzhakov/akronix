import { FeaturesCard } from "./FeaturesCard";
import { Title } from "./Title";

export function Features ({ features }) {
  return (
    <div className="features">
      <div className="container">
        <Title text={'Преимущества использования AKRON:'} />
        <div className="features__items">
          {features.map((item, i) => <FeaturesCard key={item.id} index={i + 1} {...item} />)}
        </div>
      </div>
    </div>
  )
}