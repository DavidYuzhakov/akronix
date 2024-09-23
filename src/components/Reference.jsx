import { useInView } from 'react-intersection-observer'
import refImg from '../assets/images/ref.png'
import elImg from "../assets/images/ton/ton-el.svg"

export function Reference () {
  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true
  }) 

  return (
    <>
    <div className='ton ton-reference'>
      <div className="container ton-container">
        <img className="ton-bg" src={refImg} alt="robot" />
        <div ref={ref} className={`ton-content ${inView ? '_animate' : ''}`}>
          <h2 className="title">система кланов</h2>
          <img className="ton-el" src={elImg} alt="" />
          <p className="ton-text">
            <span>Кланы — это важный и увлекательный аспект криптовалютной игровой платформы Akronix.</span>
            Они предлагают игрокам возможность объединяться, создавать сообщества и совместно достигать игровых целей. Кланы в Akronix придают дополнительную глубину игровому процессу, обеспечивая командные сражения, совместные миссии и уникальные клановые бонусы.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
