import { profile as p } from '../data.js'

const rows = [
  ['Subject', p.role],
  ['Location', p.location],
  ['Education', p.education],
  ['Focus', p.focus],
]

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="overflow-hidden rounded-lg border border-line bg-panel shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 font-mono text-xs text-dim">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3">bash — profile.sh</span>
        </div>
        <div className="p-5 font-mono text-sm sm:p-7 sm:text-[15px]">
          <p className="line text-dim" style={{ animationDelay: '0s' }}>
            <span className="text-teal">$</span> ./profile.sh --whoami
          </p>
          <h1 className="line mt-4 text-3xl font-bold tracking-tight text-fg sm:text-5xl" style={{ animationDelay: '.15s' }}>
            {p.name}
          </h1>
          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5">
            {rows.map(([k, v], i) => (
              <div key={k} className="line contents" style={{ animationDelay: `${0.35 + i * 0.12}s` }}>
                <dt className="text-dim">{k}:</dt>
                <dd className={k === 'Focus' ? 'text-amber' : 'text-fg'}>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="line mt-6 text-dim" style={{ animationDelay: '.95s' }}>
            <span className="text-teal">$</span> <span className="cursor" />
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
        <a href={p.github} target="_blank" rel="noreferrer" className="rounded border border-line px-3 py-1.5 text-fg hover:border-amber hover:text-amber">github</a>
        <a href={p.linkedin} target="_blank" rel="noreferrer" className="rounded border border-line px-3 py-1.5 text-fg hover:border-amber hover:text-amber">linkedin</a>
        <a href={`mailto:${p.email}`} className="rounded border border-line px-3 py-1.5 text-fg hover:border-amber hover:text-amber">e-mail</a>
      </div>
    </section>
  )
}
