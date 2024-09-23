import styles from "./StatBar.module.scss"

export function StatBar ({ label, icon, value, width, colors }) {

  return (
    <div className={styles.bar}>
      <div className={styles.info}>
        <div className={styles.label}>
          <img src={icon} alt="icon" />
          { label }
        </div>
        <span>{ value }</span>
      </div>
      <div 
        className={styles.line}
      >
        <span 
          style={{ 
            width: `${width}%`, 
            background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
            boxShadow: `0 0 4px rgba(${colors[1], .5})`
          }} 
        />
      </div>
    </div>
  )
}
