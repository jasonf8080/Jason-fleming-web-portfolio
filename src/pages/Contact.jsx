import { Seo } from '../components/SEO'
import { ContactHero, ContactForm } from '../components/Contact'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Jason Fleming | Web Designer, South Salem NY"
        description="Get in touch with Jason Fleming about a new website, redesign, or ongoing site support for your local business in South Salem, NY and beyond."
        path="/contact"
      />
      <ContactHero />
      <ContactForm />
    </>
  )
}
