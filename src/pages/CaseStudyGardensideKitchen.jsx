import { Seo } from '../components/SEO'
import { CaseStudyHero, FeatureList, ResultBand } from '../components/CaseStudy'
import { caseStudies, site } from '../data'

const study = caseStudies.find((s) => s.slug === 'gardenside-kitchen')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: `${study.client} Website`,
  creator: { '@type': 'Person', name: site.name },
  about: study.client,
  url: study.url,
  description: study.summary,
}

export default function CaseStudyGardensideKitchen() {
  return (
    <>
      <Seo
        title="Gardenside Kitchen Case Study | Jason Fleming"
        description="How I built Gardenside Kitchen's website: seamless animation, local SEO, fast performance, and ongoing updates for this South Salem café and coffee bar."
        path="/work/gardenside-kitchen"
        jsonLd={jsonLd}
      />
      <CaseStudyHero study={study} />
      <FeatureList study={study} />
      <ResultBand study={study} />
    </>
  )
}
