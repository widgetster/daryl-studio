import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Projects from './sections/Projects'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="shell">
        <Hero />
        <Projects />
        <Portfolio />
      </main>
      <SiteFooter />
    </>
  )
}
