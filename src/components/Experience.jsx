import styles from './Experience.module.css'

export default function Experience({ experience }) {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.num}>01</span>
          <h2 className={styles.title}>Work Experience</h2>
        </div>

        <div className={styles.list}>
          {experience.map((job, i) => (
            <div key={i} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.meta}>
                <div className={styles.company}>{job.company}</div>
                <div className={styles.period}>{job.period}</div>
                <div className={styles.loc}>{job.location}</div>
                {job.current && (
                  <div className={styles.current}>
                    <span className={styles.currentDot} />
                    Current
                  </div>
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.role}>{job.role}</h3>
                <ul className={styles.bullets}>
                  {job.bullets.map((b, j) => (
                    <li key={j} className={styles.bullet}>
                      <span className={styles.bulletMark} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
