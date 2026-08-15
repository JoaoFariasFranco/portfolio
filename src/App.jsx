import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Stack from './components/Stack.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

export default function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5">
        <Hero />
        <Section id="sobre" label="cat about.md">
          <div className="space-y-4 text-[15px] leading-relaxed text-fg/90">
            {profile.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>
        <Section id="stack" label="ls stack/">
          <Stack />
        </Section>
        <Section id="projetos" label="ls projects/">
          <Projects />
        </Section>
        <Section id="contato" label="./contact.sh">
          <Contact />
        </Section>
      </main>
      <footer className="mx-auto max-w-3xl px-5 py-10 font-mono text-xs text-dim">
        <span className="text-teal">$</span> exit 0 &nbsp;·&nbsp; {profile.name} · {new Date().getFullYear()}
      </footer>
    </>
  )
}
