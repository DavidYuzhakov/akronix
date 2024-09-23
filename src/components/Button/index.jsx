import styles from "./Button.module.scss"
import elRightImg from "../../assets/images/intro/el-right.svg"
import elLeftImg from "../../assets/images/intro/el-left.svg"
import { useInView } from "react-intersection-observer"

export function Button ({ text, notAnimate }) {
  const {ref, inView} = useInView({
    threshold: 1
  })

  return (
    <div 
      ref={ref} 
      className={`${styles.btnWrapper} ${!notAnimate ? styles.anim : ''} ${inView && !notAnimate ? styles._animate : ''}`}
    > 
      <img src={elLeftImg} alt="" />
      <button>
        { text }
      </button>
      <img src={elRightImg} alt="" />
      <span />
    </div>
  )
}
