import useScrollReveal from '../../hooks/useScrollReveal'
import { differentiators } from '../../data'

export default function Differentiators() {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <h2
          data-reveal
          className="text-3xl font-semibold uppercase tracking-tight md:text-5xl"
        >
          Why Work With Me
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {differentiators.map((item, i) => (
            <div key={item.title} data-reveal className="flex gap-5">
              <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
