import { projects } from '../data.js'

const badge = {
  prod: 'text-teal border-teal/40',
  wip: 'text-amber border-amber/40',
}

export default function Projects() {
  if (!projects.length) {
    return <p className="font-mono text-sm text-dim">ls: projects/: empty — em breve.</p>
  }
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {projects.map(pr => (
        <li key={pr.name} className="flex flex-col rounded-lg border border-line bg-panel p-5 transition-colors hover:border-dim">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-mono text-base font-semibold text-fg">{pr.name}</h3>
            {pr.status && (
              <span className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[11px] ${badge[pr.status] || ''}`}>
                {pr.status}
              </span>
            )}
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-fg/80">{pr.desc}</p>
          <p className="mt-4 font-mono text-xs text-dim">{pr.tech.join(' · ')}</p>
          <div className="mt-4 flex gap-4 font-mono text-sm">
            {pr.repo && <a href={pr.repo} target="_blank" rel="noreferrer" className="text-fg hover:text-amber">repo →</a>}
            {pr.demo && <a href={pr.demo} target="_blank" rel="noreferrer" className="text-fg hover:text-amber">demo →</a>}
          </div>
        </li>
      ))}
    </ul>
  )
}
