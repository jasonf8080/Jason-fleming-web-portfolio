import { Seo } from '../components/SEO'
import { CaseStudyHero, FeatureList, ResultBand } from '../components/CaseStudy'
import { caseStudies, site } from '../data'

const study = caseStudies.find((s) => s.slug === 'south-salem-winery')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: `${study.client} Website`,
  creator: { '@type': 'Person', name: site.name },
  about: study.client,
  url: study.url,
  description: study.summary,
}

export default function CaseStudySouthSalemWinery() {
  return (
    <>
      <Seo
        title="South Salem Winery Case Study | Jason Fleming"
        description="How I built South Salem Winery's website: seamless GSAP animation, strong local SEO, fast load times, and ongoing updates for this NY micro winery."
        path="/work/south-salem-winery"
        jsonLd={jsonLd}
      />
      <CaseStudyHero study={study} />
      <FeatureList study={study} />
      <ResultBand study={study} />
    </>
  )
}
