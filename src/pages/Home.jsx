import { Seo } from '../components/SEO'
import { Hero, Differentiators, FeaturedWork, CtaBand } from '../components/Home'

export default function Home() {
  return (
    <>
      <Seo
        title="Jason Fleming | Web Designer & Developer, South Salem NY"
        description="Jason Fleming designs and builds fast, seamlessly animated, SEO-strong websites for local businesses in South Salem, NY and Westchester County."
        path="/"
      />
      <Hero />
      <Differentiators />
      <FeaturedWork />
      <CtaBand />
    </>
  )
}
