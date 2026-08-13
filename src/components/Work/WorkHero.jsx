import useScrollReveal from '../../hooks/useScrollReveal'

export default function WorkHero() {
  const scopeRef = useScrollReveal({ y: 20 })

  return (
    <section ref={scopeRef} className="mx-auto max-w-6xl px-6 pb-6 pt-16 md:px-10 md:pt-24">
      <p data-reveal className="text-xs font-semibold uppercase tracking-widest2 text-accent">
        Selected Work
      </p>
      <h1
        data-reveal
        className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
      >
        Case Studies
      </h1>
      <p
        data-reveal
        className="mt-6 max-w-2xl text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed"
      >
        A closer look at two local businesses I've built and continue to support — from first
        line of code to ongoing updates.
      </p>
    </section>
  )
}
