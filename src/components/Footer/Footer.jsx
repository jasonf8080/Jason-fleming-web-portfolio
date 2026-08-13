import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { JFLogo } from '../Logo'
import { navLinks, site, caseStudies } from '../../data'

const clientSocials = caseStudies.flatMap((c) => c.socials.map((s) => ({ ...s, client: c.client })))

function socialIcon(label) {
  if (label === 'Instagram') return <FaInstagram aria-hidden="true" />
  if (label === 'Facebook') return <FaFacebookF aria-hidden="true" />
  return null
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/10 bg-primary text-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Link to="/" aria-label="Jason Fleming — home">
              <JFLogo variant="light" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary/70">
              Web design &amp; development for local businesses, based in {site.location}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest2 text-secondary/50">Site</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest2 text-secondary/50">
              Get In Touch
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <HiOutlineMail aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>

            <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest2 text-secondary/50">
              Client Socials
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {clientSocials.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                    aria-label={`${s.client} on ${s.label}`}
                  >
                    {socialIcon(s.label)}
                    {s.client} — {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-line mt-12" />
        <p className="mt-6 text-xs uppercase tracking-widest2 text-secondary/50">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
