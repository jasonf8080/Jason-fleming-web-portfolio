import { Seo } from '../components/SEO'
import { WorkHero, WorkGrid } from '../components/Work'

export default function Work() {
  return (
    <>
      <Seo
        title="Web Design Case Studies | Jason Fleming, South Salem NY"
        description="Case studies from Jason Fleming's web design work: South Salem Winery and Gardenside Kitchen, built for speed, SEO, and seamless animation."
        path="/work"
      />
      <WorkHero />
      <WorkGrid
        heading="Featured Projects"
        subheading="Every project gets the same treatment: custom design, hand-coded animation, strong SEO, and support that continues after launch."
      />
    </>
  )
}
