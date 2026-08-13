import useScrollReveal from '../../hooks/useScrollReveal'
import { HiCheck } from 'react-icons/hi'
import { services } from '../../data'

export default function Services() {
  const scopeRef = useScrollReveal()

  return (
    <section ref={scopeRef} className="border-t border-primary/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <h2 data-reveal className="text-3xl font-semibold uppercase tracking-tight md:text-5xl">
          Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} data-reveal className="border border-primary/10 p-8">
              <h3 className="text-2xl font-semibold md:text-3xl">{service.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-primary/70 md:text-lg md:leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm md:text-base">
                    <HiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
