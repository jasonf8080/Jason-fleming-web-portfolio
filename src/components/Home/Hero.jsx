import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import useScrollReveal from '../../hooks/useScrollReveal'
import { site } from '../../data'

export default function Hero() {
  const scopeRef = useScrollReveal({ y: 24 })

  return (
    <section ref={scopeRef} className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-10 md:pb-32 md:pt-20">
      <div className="flex flex-col items-center text-center">
        <p data-reveal className="text-xs font-semibold uppercase tracking-widest2 text-accent">
          {site.location} · Web Design &amp; Development
        </p>

        <h1
          data-reveal
          className="mt-6 max-w-4xl text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
        >
          Websites built to look sharp
          <span className="text-accent">.</span> and perform
          <span className="text-accent">.</span>
        </h1>

        <p
          data-reveal
          className="mt-6 max-w-2xl text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed"
        >
          I'm {site.name} — I design and hand-code fast, seamlessly animated, SEO-strong websites
          for local businesses.
        </p>

        <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/work"
            className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-secondary transition-colors hover:bg-accent"
          >
            See The Work
            <HiArrowRight aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest2 transition-colors hover:border-accent hover:text-accent"
          >
            Start A Project
          </Link>
        </div>
      </div>

      <div data-reveal className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-primary/10 bg-primary/10 sm:grid-cols-3">
        {[
          { k: '2', v: 'Sites Shipped' },
          { k: '100%', v: 'Hand-Coded' },
          { k: 'Ongoing', v: 'Support & Updates' },
        ].map((stat) => (
          <div key={stat.v} className="flex flex-col items-center gap-2 bg-secondary px-6 py-8 text-center">
            <span className="text-3xl font-semibold md:text-4xl">{stat.k}</span>
            <span className="text-xs font-medium uppercase tracking-widest2 text-primary/60">{stat.v}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
