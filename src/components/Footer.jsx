import styles from './Footer.module.css'

export default function Footer({ data }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}><em>VS</em>.</span>
          <span className={styles.copy}>© {new Date().getFullYear()} Vishok Shukla</span>
        </div>
        <div className={styles.right}>
          <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${data.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
