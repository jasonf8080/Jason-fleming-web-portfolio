import { Link } from 'react-router-dom'
import { Seo } from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Jason Fleming"
        description="The page you're looking for doesn't exist. Head back to Jason Fleming's web design portfolio to see recent work and get in touch."
        path="/404"
      />
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center md:px-10">
        <h1 className="text-4xl font-semibold uppercase tracking-tight md:text-6xl">404</h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed">
          That page doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-secondary transition-colors hover:bg-accent"
        >
          Back To Home
        </Link>
      </section>
    </>
  )
}
