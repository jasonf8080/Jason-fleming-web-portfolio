import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import useScrollReveal from '../../hooks/useScrollReveal'
import { SiteMockup } from '../Work'

function socialIcon(label) {
  if (label === 'Instagram') return <FaInstagram aria-hidden="true" />
  if (label === 'Facebook') return <FaFacebookF aria-hidden="true" />
  return null
}

export default function CaseStudyHero({ study }) {
  const scopeRef = useScrollReveal({ y: 20 })

  return (
    <section ref={scopeRef} className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:px-10 md:pt-24">
      <p data-reveal className="text-xs font-semibold uppercase tracking-widest2 text-accent">
        Case Study · {study.industry} · {study.year}
      </p>
      <h1
        data-reveal
        className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
      >
        {study.client}
      </h1>
      <p
        data-reveal
        className="mt-6 max-w-2xl text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed"
      >
        {study.summary}
      </p>

      <div data-reveal className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={study.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest2 transition-colors hover:border-accent hover:text-accent"
        >
          Visit Live Site
          <HiOutlineExternalLink aria-hidden="true" />
        </a>
        {study.socials.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${study.client} on ${s.label}`}
            className="inline-flex h-11 w-11 items-center justify-center border border-primary/20 text-lg transition-colors hover:border-accent hover:text-accent"
          >
            {socialIcon(s.label)}
          </a>
        ))}
      </div>

      <div data-reveal className="mt-12">
        <SiteMockup client={study.client} theme={study.theme} image={study.image} />
      </div>
    </section>
  )
}
