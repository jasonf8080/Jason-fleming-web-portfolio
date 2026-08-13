import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { site } from '../../data'

const initialForm = { name: '', email: '', message: '' }

// Static site, no backend — submitting opens the visitor's mail client
// with a pre-filled message addressed to the site owner.
export default function ContactForm() {
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`New project inquiry from ${form.name || 'your website'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="border-t border-primary/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest2 text-primary/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="border-b border-primary/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-accent md:text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest2 text-primary/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="border-b border-primary/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-accent md:text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest2 text-primary/60">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="resize-none border-b border-primary/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-accent md:text-lg"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center gap-2 self-start bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-secondary transition-colors hover:bg-accent"
          >
            Send Message
            <HiArrowRight aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
