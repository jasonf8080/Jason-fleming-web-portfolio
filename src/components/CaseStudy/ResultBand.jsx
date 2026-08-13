import { Link } from 'react-router-dom'
import { HiArrowRight, HiArrowLongLeft } from 'react-icons/hi2'
import useScrollReveal from '../../hooks/useScrollReveal'
import { caseStudies } from '../../data'

export default function ResultBand({ study }) {
  const scopeRef = useScrollReveal()
  const other = caseStudies.find((s) => s.slug !== study.slug)

  return (
    <section
      ref={scopeRef}
      className="border-t border-primary/10 text-secondary"
      style={{ backgroundColor: study.theme.bg }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center md:px-10 md:py-28">
        <h2
          data-reveal
          className="max-w-2xl text-3xl font-semibold uppercase leading-tight tracking-tight md:text-5xl md:leading-tight"
        >
          The Result
        </h2>
        <p data-reveal className="max-w-xl text-base leading-relaxed text-secondary/70 md:text-lg md:leading-relaxed">
          {study.result}
        </p>

        <div data-reveal className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/work"
            className="inline-flex items-center justify-center gap-2 border border-secondary/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 transition-colors hover:border-accent hover:text-accent"
          >
            <HiArrowLongLeft aria-hidden="true" />
            All Work
          </Link>
          {other && (
            <Link
              to={`/work/${other.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-primary transition-opacity hover:opacity-90"
            >
              Next: {other.client}
              <HiArrowRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
