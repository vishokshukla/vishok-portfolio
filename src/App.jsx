import { useEffect, useRef } from 'react'
import { data } from './data'
import { useReveal } from './hooks/useReveal'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Stats       from './components/Stats'
import Experience  from './components/Experience'
import Skills      from './components/Skills'
import Education   from './components/Education'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  useReveal()

  const glowRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.left = e.clientX + 'px'
      glowRef.current.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <Navbar />
      <main>
        <Hero       data={data} />
        <Stats      stats={data.stats} />
        <Experience experience={data.experience} />
        <Skills     skills={data.skills} />
        <Education  education={data.education} />
        <Contact    data={data} />
      </main>
      <Footer data={data} />
    </>
  )
}
