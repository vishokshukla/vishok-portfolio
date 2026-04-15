import styles from './Education.module.css'

export default function Education({ education }) {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.num}>03</span>
          <h2 className={styles.title}>Education</h2>
        </div>
        <div className={styles.grid}>
          {education.map((edu, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.accent} />
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.uni}>{edu.university}</div>
              <div className={styles.detail}>{edu.location} · {edu.period}</div>
              {edu.medal && (
                <div className={styles.medal}>
                  <IconMedal />
                  {edu.medal}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IconMedal() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}
