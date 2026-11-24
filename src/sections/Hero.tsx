const disciplines = [
  { title: 'Robotics', icon: 'robotics' },
  { title: 'Graphic design', icon: 'graphic' },
  { title: 'Video editing', icon: 'video' },
  { title: 'Web design', icon: 'web' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="intro">
      <div className="hero-copy">
        <p className="eyebrow"><span aria-hidden="true" /> PERSONAL PORTFOLIO</p>
        <h1 id="intro">Hi, I’m Daryl.<br /><em>Engineer &amp; creative.</em></h1>
        <p className="intro">By day, I’m a full-time Robotics Engineer specializing in digital twin technology and 3D simulation. By night, I’m building a portfolio in graphic design, video editing, and web design.</p>
        <p className="intro">I want my work to make information easier to understand, stories easier to follow, and websites easier to use.</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore my work</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-outer" /><div className="orbit orbit-inner" />
        <i className="orbit-dot dot-top" /><i className="orbit-dot dot-bottom" />
        <div className="profile-window">
          <div className="window-top"><i /><i /><i /><span>Daryl Studio</span></div>
          <ul className="profile-grid">
            {disciplines.map(({ title, icon }) => (
              <li className="profile-tile" key={title}>
                <span className={`profile-icon ${icon}-icon`} />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
