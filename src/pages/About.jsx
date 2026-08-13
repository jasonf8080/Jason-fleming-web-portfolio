import { Seo } from '../components/SEO'
import { Bio, Services, Process } from '../components/About'

export default function About() {
  return (
    <>
      <Seo
        title="About Jason Fleming | Web Designer, South Salem NY"
        description="Marketing-degree-holding web designer and developer in South Salem, NY. I build custom, animated, SEO-strong React sites and offer light social media support."
        path="/about"
      />
      <Bio />
      <Services />
      <Process />
    </>
  )
}
