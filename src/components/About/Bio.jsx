import useScrollReveal from '../../hooks/useScrollReveal'
import { about } from '../../data'

export default function Bio() {
  const scopeRef = useScrollReveal({ y: 20 })

  return (
    <section ref={scopeRef} className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
      <p data-reveal className="text-xs font-semibold uppercase tracking-widest2 text-accent">
        About
      </p>
      <h1
        data-reveal
        className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
      >
        {about.heading}
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              className="mb-5 text-base leading-relaxed text-primary/80 last:mb-0 md:text-lg md:leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <div data-reveal className="flex flex-col gap-6 border-l border-primary/10 pl-6">
          {about.highlights.map((item) => (
            <div key={item.label}>
              <h2 className="text-lg font-semibold uppercase tracking-widest2 text-primary md:text-xl">
                {item.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-primary/60 md:text-base md:leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
