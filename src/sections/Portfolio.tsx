import { useEffect, useRef, useState } from 'react'
import { designs, videos } from '../data/portfolio'
import { StackBar } from './TechStack'

type Preview = { title: string; slug: string; kind: 'design' | 'video' }

function mediaPath(file: string) {
  return `${import.meta.env.BASE_URL}portfolio/${file}`
}

export default function Portfolio() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [preview, setPreview] = useState<Preview | null>(null)

  useEffect(() => {
    if (preview) dialogRef.current?.showModal()
  }, [preview])

  return (
    <div className="creative-work" id="creative">
      <section id="graphic-design" aria-labelledby="design-title">
        <div className="section-heading">
          <h2 id="design-title">Graphic design</h2>
          <p>Dental clinic graphics for Pinoy Dental Care - Daegu.</p>
        </div>
        <StackBar id="design-software" title="SOFTWARE" items={[['Canva', 'C', 'canva']]} />
        <ul className="media-grid design-grid">
          {designs.map((design) => (
            <li key={design.slug}>
              <button
                className="project media-card"
                type="button"
                aria-haspopup="dialog"
                aria-label={`Enlarge ${design.title} design`}
                onClick={() => setPreview({ ...design, kind: 'design' })}
              >
                <img
                  className="design-image"
                  src={mediaPath(`${design.slug}.png`)}
                  srcSet={`${mediaPath(`${design.slug}-thumb.webp`)} 420w, ${mediaPath(`${design.slug}.png`)} 1080w`}
                  sizes="(max-width: 600px) 45vw, (max-width: 1192px) 30vw, 361px"
                  alt=""
                  width={1080}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                />
                <span className="media-title">{design.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section id="video-editing" aria-labelledby="video-title">
        <div className="section-heading">
          <h2 id="video-title">Video editing</h2>
          <p>Short-form videos about city life and everyday moments.</p>
        </div>
        <StackBar id="video-software" title="SOFTWARE" items={[['DaVinci Resolve', 'DR', 'resolve']]} />
        <ul className="media-grid video-grid">
          {videos.map((video) => (
            <li key={video.slug}>
              <button
                className="project media-card"
                type="button"
                aria-haspopup="dialog"
                aria-label={`Watch ${video.title}`}
                onClick={() => setPreview({ ...video, kind: 'video' })}
              >
                <span className="video-thumbnail">
                  <img src={mediaPath(`${video.slug}.webp`)} alt="" loading="lazy" decoding="async" />
                  <span className="play-icon" aria-hidden="true" />
                </span>
                <span className="media-title">{video.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <dialog className="media-preview" ref={dialogRef} aria-labelledby="preview-title" onClose={() => setPreview(null)}>
        <div className="preview-header">
          <h2 id="preview-title">{preview?.title ?? 'Project preview'}</h2>
          <button className="button secondary" type="button" onClick={() => dialogRef.current?.close()}>Close</button>
        </div>
        {preview?.kind === 'design' && (
          <img src={mediaPath(`${preview.slug}.png`)} alt={`${preview.title} graphic for Pinoy Dental Care`} />
        )}
        {preview?.kind === 'video' && (
          <video
            src={mediaPath(`video/${preview.slug}.mp4`)}
            poster={mediaPath(`${preview.slug}.webp`)}
            aria-label={preview.title}
            preload="metadata"
            controls
            playsInline
          />
        )}
      </dialog>
    </div>
  )
}
