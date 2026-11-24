import './App.css'

const technologies = [
  ['HTML', '5', 'html'],
  ['CSS', '#', 'css'],
  ['JavaScript', 'JS', 'js'],
  ['React', '⚛', 'react'],
  ['TypeScript', 'TS', 'ts'],
] as const

const projects = [
  { name: 'Code Start', slug: 'code-start', artwork: 'start', mark: '</>' },
  { name: 'Aurora', slug: 'aurora', artwork: 'aurora', mark: '✦' },
  { name: 'Code Wave', slug: 'code-wave', artwork: 'wave', mark: '≈' },
  { name: 'Work Loft', slug: 'work-loft', artwork: 'loft', mark: '▦' },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">D</span>Daryl<span className="brand-studio">Studio</span></a>
          <nav aria-label="Main navigation">
            <a className="nav-work" href="#work">Projects</a>
            <a href="#stack">Tech stack</a>
          </nav>
        </div>
      </header>
      <main id="main" className="shell">
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
                <div><b>04</b>&nbsp; projects: <span className="syntax-blue">4</span>,</div>
                <div><b>05</b>{'}'}</div>
              </div>
            </div>
            <div className="floating-code">&lt;/&gt;</div>
          </div>
        </section>

        <section className="stack" id="stack" aria-labelledby="stack-title">
          <h2 id="stack-title">TECH STACK</h2>
          <ul>
            {technologies.map(([name, mark, style]) => (
              <li key={name}><span className={`tech-mark ${style}`} aria-hidden="true">{mark}</span>{name}</li>
            ))}
          </ul>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected projects<span>.</span></h2>
            <p>Four published websites you can explore live.</p>
          </div>
          <div className="projects">
            {projects.map(({ name, slug, artwork, mark }) => (
              <article className="project" key={slug}>
                <div className={`cover ${artwork}`} aria-hidden="true">
                  <div className="cover-shape" />
                  <div className="cover-title"><span>{mark}</span>{name}</div>
                </div>
                <div className="project-info">
                  <h3>{name}</h3>
                  <a href={`https://widgetster.github.io/${slug}-tsx/`} target="_blank" rel="noopener noreferrer" aria-label={`View live site for ${name} (opens in a new tab)`}>View live site</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner"><span>Daryl Studio</span><a href="#top">Back to top</a></div>
      </footer>
    </>
  )
}

export default App
