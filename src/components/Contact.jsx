import { profile as p } from '../data.js'

export default function Contact() {
  return (
    <div className="font-mono text-sm">
      <p className="text-fg/90">Aberto a oportunidades remotas e projetos em sistemas distribuídos.</p>
      <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
        <span className="text-dim">email:</span>
        <a href={`mailto:${p.email}`} className="text-amber hover:underline">{p.email}</a>
        <span className="text-dim">github:</span>
        <a href={p.github} target="_blank" rel="noreferrer" className="text-fg hover:text-amber">{p.github.replace('https://', '')}</a>
        <span className="text-dim">linkedin:</span>
        <a href={p.linkedin} target="_blank" rel="noreferrer" className="text-fg hover:text-amber">linkedin.com/in/joão-pedro-farias-franco</a>
      </div>
    </div>
  )
}
