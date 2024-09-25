import { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import styles from './Slider.module.scss'
import arrow from '../../assets/images/ton/arrow-right.svg'

import { SlideCard } from '../SlideCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

export function Slider ({ slides }) {
  const { t } = useTranslation()
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Swiper
      ref={sliderRef}
      breakpoints={{
        993: {
          spaceBetween: 24,
          slidesPerView: 2,
        },
        768: {
          width: 600
        }
      }}
      spaceBetween={15}
      slidesPerView={1}
      initialSlide={1}
      pagination
      modules={[Pagination]}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <SlideCard text={t(`games.slides.${i}.text`)} btnText={t(`games.slides.${i}.btnText`)} {...slide} title={{
            first: t(`games.slides.${i}.title.first`),
            second: t(`games.slides.${i}.title.second`)
          }} />
        </SwiperSlide>
      ))}
      <div className={styles.buttons}>
        <button className={styles.prev} onClick={handlePrev}>
          <img src={arrow} alt="prev" />
        </button>
        <button className={styles.next} onClick={handleNext}>
          <img src={arrow} alt="next" />
        </button>
      </div>
    </Swiper>
  )
}

