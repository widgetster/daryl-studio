export default function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="shell header-inner">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">D</span>Daryl<span className="brand-studio">Studio</span></a>
        <nav aria-label="Main navigation">
          <a className="nav-work" href="#work">Web Development</a>
          <a href="#graphic-design">Graphic Design</a>
          <a href="#video-editing">Video Editing</a>
        </nav>
      </div>
    </header>
  )
}
