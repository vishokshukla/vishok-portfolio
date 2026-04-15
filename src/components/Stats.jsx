import styles from './Stats.module.css'

export default function Stats({ stats }) {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={i} className={`${styles.stat} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className={styles.num}>{s.num}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
