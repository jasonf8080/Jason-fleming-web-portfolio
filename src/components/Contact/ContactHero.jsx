import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import useScrollReveal from '../../hooks/useScrollReveal'
import { site } from '../../data'

export default function ContactHero() {
  const scopeRef = useScrollReveal({ y: 20 })

  return (
    <section ref={scopeRef} className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p data-reveal className="text-xs font-semibold uppercase tracking-widest2 text-accent">
        Contact
      </p>
      <h1
        data-reveal
        className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
      >
        Let's Build Something
      </h1>
      <p
        data-reveal
        className="mt-6 max-w-2xl text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed"
      >
        Tell me a bit about your business and what you're looking for — I'll follow up from
        there.
      </p>

      <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-3 border border-primary px-6 py-4 text-sm font-semibold uppercase tracking-widest2 transition-colors hover:border-accent hover:text-accent"
        >
          <HiOutlineMail aria-hidden="true" className="text-lg" />
          {site.email}
        </a>
        <span className="inline-flex items-center gap-3 border border-primary/10 px-6 py-4 text-sm font-semibold uppercase tracking-widest2 text-primary/60">
          <HiOutlineLocationMarker aria-hidden="true" className="text-lg" />
          {site.location}
        </span>
      </div>
    </section>
  )
}
