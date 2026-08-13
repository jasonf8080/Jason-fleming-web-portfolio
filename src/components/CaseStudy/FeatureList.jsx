import useScrollReveal from '../../hooks/useScrollReveal'

export default function FeatureList({ study }) {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="border-t border-primary/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <h2 data-reveal className="text-3xl font-semibold uppercase tracking-tight md:text-5xl">
          What Went Into It
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {study.features.map((feature, i) => (
            <div key={feature.title} data-reveal className="flex gap-5">
              <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl font-semibold md:text-2xl">{feature.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
