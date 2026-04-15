import styles from './Skills.module.css'

export default function Skills({ skills }) {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.num}>02</span>
          <h2 className={styles.title}>Technical Skills</h2>
        </div>
        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div key={i} className={`${styles.group} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.groupLabel}>{group.label}</div>
              <div className={styles.chips}>
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className={`${styles.chip} ${group.accent ? styles.chipAccent : ''}`}
                  >{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
