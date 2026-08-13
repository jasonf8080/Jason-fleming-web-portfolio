import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function CtaBand() {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="border-t border-primary/10 bg-primary text-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center md:px-10 md:py-28">
        <h2
          data-reveal
          className="max-w-2xl text-3xl font-semibold uppercase leading-tight tracking-tight md:text-5xl md:leading-tight"
        >
          Have A Business That Needs A Website Like This?
        </h2>
        <p data-reveal className="max-w-xl text-base leading-relaxed text-secondary/70 md:text-lg md:leading-relaxed">
          Let's talk about what a fast, animated, search-ready site could do for your business.
        </p>
        <Link
          data-reveal
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-secondary transition-opacity hover:opacity-90"
        >
          Start A Project
          <HiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
