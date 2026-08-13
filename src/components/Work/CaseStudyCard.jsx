import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'
import SiteMockup from './SiteMockup'

export default function CaseStudyCard({ study }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      data-reveal
      className="group block border border-primary/10 bg-white p-6 transition-shadow hover:shadow-lg md:p-8"
    >
      <SiteMockup client={study.client} theme={study.theme} />

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
            {study.industry} · {study.year}
          </p>
          <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{study.client}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed">
            {study.tagline}
          </p>
        </div>
        <HiArrowUpRight
          aria-hidden="true"
          className="mt-1 shrink-0 text-2xl text-primary/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
        />
      </div>
    </Link>
  )
}
