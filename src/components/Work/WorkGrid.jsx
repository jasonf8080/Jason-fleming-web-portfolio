import useScrollReveal from '../../hooks/useScrollReveal'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../../data'

export default function WorkGrid({ heading, subheading }) {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      {heading && (
        <div data-reveal className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold uppercase tracking-tight md:text-5xl">{heading}</h2>
          {subheading && (
            <p className="mt-4 text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  )
}
