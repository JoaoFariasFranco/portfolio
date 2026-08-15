const links = [
  ['#sobre', 'sobre'],
  ['#stack', 'stack'],
  ['#projetos', 'projetos'],
  ['#contato', 'contato'],
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/70 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 font-mono text-sm">
        <a href="#" className="text-fg hover:text-amber">
          <span className="text-teal">~</span>/joao-franco
        </a>
        <ul className="flex gap-4 text-dim">
          {links.map(([href, l]) => (
            <li key={href}><a href={href} className="hover:text-amber">{l}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
