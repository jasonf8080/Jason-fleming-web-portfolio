import { Helmet } from 'react-helmet-async'
import { site } from '../../data'

const DEFAULT_IMAGE = `${site.url}/og-image.jpg`

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description:
    'Freelance web designer & developer building fast, animated, SEO-strong websites for local businesses.',
  founder: {
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    knowsAbout: ['Web Design', 'Web Development', 'React', 'SEO', 'Social Media Marketing'],
  },
  areaServed: 'South Salem, NY / Westchester County, NY',
  email: site.email,
  url: site.url,
}

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, jsonLd }) {
  const canonical = `${site.url}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(jsonLd || personSchema)}</script>
    </Helmet>
  )
}
