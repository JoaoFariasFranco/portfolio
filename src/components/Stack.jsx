import { stack } from '../data.js'

export default function Stack() {
  return (
    <dl className="grid gap-y-4 font-mono text-sm sm:grid-cols-[8rem_1fr]">
      {Object.entries(stack).map(([group, items]) => (
        <div key={group} className="contents">
          <dt className="text-dim">{group.toLowerCase()}/</dt>
          <dd className="flex flex-wrap gap-2">
            {items.map(t => (
              <span key={t} className="rounded border border-line bg-panel px-2 py-0.5 text-fg">{t}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}
