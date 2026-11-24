type StackItem = readonly [label: string, mark: string, style?: string]

type StackBarProps = {
  id: string
  title: string
  items: readonly StackItem[]
}

const technologies = [
  ['HTML', '5', 'html'],
  ['CSS', '#', 'css'],
  ['JavaScript', 'JS', 'js'],
  ['React', '⚛', 'react'],
  ['TypeScript', 'TS', 'ts'],
] as const

export function StackBar({ id, title, items }: StackBarProps) {
  const titleId = `${id}-title`

  return (
    <section className="stack" id={id} aria-labelledby={titleId}>
      <h3 id={titleId}>{title}</h3>
      <ul>
        {items.map(([label, mark, style]) => (
          <li key={label}>
            <span className={style ? `tech-mark ${style}` : 'tech-mark'} aria-hidden="true">{mark}</span>
            {label}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function TechStack() {
  return <StackBar id="stack" title="BUILT USING" items={technologies} />
}
