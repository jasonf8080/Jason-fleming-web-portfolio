import useScrollReveal from '../../hooks/useScrollReveal'
import { process } from '../../data'

export default function Process() {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <h2 data-reveal className="text-3xl font-semibold uppercase tracking-tight md:text-5xl">
          How I Work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} data-reveal className="bg-secondary p-8">
              <span className="text-sm font-semibold text-accent">{item.step}</span>
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70 md:text-base md:leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
