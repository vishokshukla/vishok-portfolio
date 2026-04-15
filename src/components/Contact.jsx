import styles from './Contact.module.css'

export default function Contact({ data }) {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={`${styles.kicker} reveal`}>04 · Get in touch</div>
          <h2 className={`${styles.headline} reveal reveal-delay-1`}>
            Let's build<br /><em>something great.</em>
          </h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>
            Open to senior backend engineering roles.<br />
            Based in Lucknow, India — available for remote or relocation.
          </p>
          <a
            href={`mailto:${data.email}`}
            className={`${styles.emailLink} reveal reveal-delay-3`}
          >
            {data.email}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className={`${styles.right} reveal reveal-delay-2`}>
          {[
            { label: 'Email', value: data.email, href: `mailto:${data.email}` },
            { label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
            { label: 'LinkedIn', value: 'vishok-shukla', href: data.linkedin },
            { label: 'GitHub', value: 'vishokshukla', href: data.github },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.link}>
              <div>
                <div className={styles.linkLabel}>{item.label}</div>
                <div className={styles.linkValue}>{item.value}</div>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
