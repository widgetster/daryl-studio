import { projects } from '../data/projects'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="intro">
      <div className="hero-copy">
        <p className="eyebrow"><span aria-hidden="true" /> FRONTEND PORTFOLIO</p>
        <h1 id="intro">Hi, I’m Daryl.<br /><em>I build for the web.</em></h1>
        <p className="intro">Explore my frontend projects and the technologies I use to build them.</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore projects</a>
          <a className="button secondary" href="https://github.com/widgetster" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-outer" /><div className="orbit orbit-inner" />
        <i className="orbit-dot dot-top" /><i className="orbit-dot dot-bottom" />
        <div className="code-window">
          <div className="window-top"><i /><i /><i /><span>portfolio.tsx</span></div>
          <div className="window-code">
            <div><b>01</b><span className="syntax-purple">const</span> portfolio = {'{'}</div>
            <div><b>02</b>&nbsp; name: <span className="syntax-mint">'Daryl'</span>,</div>
            <div><b>03</b>&nbsp; focus: <span className="syntax-mint">'Frontend'</span>,</div>
            <div><b>04</b>&nbsp; projects: <span className="syntax-blue">{projects.length}</span>,</div>
            <div><b>05</b>{'}'}</div>
          </div>
        </div>
        <div className="floating-code">&lt;/&gt;</div>
      </div>
    </section>
  )
}
