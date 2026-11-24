const technologies = [
  ['HTML', '5', 'html'],
  ['CSS', '#', 'css'],
  ['JavaScript', 'JS', 'js'],
  ['React', '⚛', 'react'],
  ['TypeScript', 'TS', 'ts'],
] as const

export default function TechStack() {
  return (
    <section className="stack" id="stack" aria-labelledby="stack-title">
      <h3 id="stack-title">TECH STACK</h3>
      <ul>
        {technologies.map(([name, mark, style]) => (
          <li key={name}><span className={`tech-mark ${style}`} aria-hidden="true">{mark}</span>{name}</li>
        ))}
      </ul>
    </section>
  )
}
