import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero({ data }) {
  const nameRef = useRef(null)

  useEffect(() => {
    const el = nameRef.current
    if (!el) return
    setTimeout(() => el.classList.add(styles.nameVisible), 100)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={`${styles.kicker} reveal`}>
            <span className={styles.dot} />
            {data.location} · Backend Engineer
          </div>

          <h1 className={styles.name} ref={nameRef}>
            <span className={styles.nameLine1}>Vishok</span>
            <span className={styles.nameLine2}><em>Shukla</em></span>
          </h1>

          <p className={`${styles.summary} reveal reveal-delay-2`}>{data.summary}</p>

          <div className={`${styles.tags} reveal reveal-delay-3`}>
            {data.tagline.split(' · ').map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <div className={`${styles.btns} reveal reveal-delay-4`}>
            <a href={`mailto:${data.email}`} className={styles.btnPrimary}>
              <IconMail /> Get in touch
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className={styles.btnGhost}>
              <IconLI /> LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className={styles.btnGhost}>
              <IconGH /> GitHub
            </a>
          </div>
        </div>

        <div className={`${styles.right} reveal reveal-delay-2`}>
          <div className={styles.avatar}>
            <span className={styles.avatarText}>VS</span>
            <div className={styles.avatarRing} />
          </div>
          <div className={styles.medal}>
            <IconMedal />
            MCA Gold Medalist — BHU
          </div>
          <div className={styles.availability}>
            <span className={styles.availDot} />
            Open to opportunities
          </div>
        </div>
      </div>
    </section>
  )
}

function IconMail() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function IconLI() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
}
function IconGH() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
}
function IconMedal() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
}
