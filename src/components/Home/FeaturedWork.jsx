import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import useScrollReveal from '../../hooks/useScrollReveal'
import { CaseStudyCard } from '../Work'
import { caseStudies } from '../../data'

export default function FeaturedWork() {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="border-t border-primary/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div data-reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-tight md:text-5xl">
              Recent Case Studies
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest2 transition-colors hover:text-accent"
          >
            View All Work
            <HiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
