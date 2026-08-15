export default function Section({ id, label, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-14">
      <h2 className="mb-6 font-mono text-sm text-dim">
        <span className="text-teal">$</span> {label}
      </h2>
      {children}
    </section>
  )
}
