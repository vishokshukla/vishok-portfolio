import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.querySelector(l.href))
      const hit = sections.reverse().find(s => s && window.scrollY >= s.offsetTop - 120)
      setActive(hit ? '#' + hit.id : '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>VS<span>.</span></a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? styles.activeLink : ''}
                onClick={() => setOpen(false)}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:vishok.bhumca19@gmail.com" className={styles.cta}>Hire me</a>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
