import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Reusable scroll-reveal hook: fades/slides in every [data-reveal] element
// inside the returned ref, staggered, once it enters the viewport.
// One GSAP context per component, always reverted on unmount.
export default function useScrollReveal({ y = 32, stagger = 0.12, start = 'top 85%' } = {}) {
  const scopeRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = scopeRef.current?.querySelectorAll('[data-reveal]')
      if (!targets || targets.length === 0) return

      gsap.set(targets, { opacity: 0, y })

      ScrollTrigger.batch(targets, {
        start,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger,
            overwrite: true,
          }),
        once: true,
      })
    }, scopeRef)

    return () => ctx.revert()
  }, [y, stagger, start])

  return scopeRef
}
