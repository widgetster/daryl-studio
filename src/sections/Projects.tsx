import { projects } from '../data/projects'
import TechStack from './TechStack'

export default function Projects() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <h2 id="work-title">Selected projects<span>.</span></h2>
        <p>Live websites I designed and built.</p>
      </div>
      <TechStack />
      <div className="projects">
        {projects.map(({ name, url, artwork, mark }) => (
          <article className="project" key={url}>
            <div className={`cover ${artwork}`} aria-hidden="true">
              <div className="cover-shape" />
              <div className="cover-title"><span>{mark}</span>{name}</div>
            </div>
            <div className="project-info">
              <h3>{name}</h3>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`View live site for ${name} (opens in a new tab)`}>View live site</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
