import { useEffect, useRef } from 'react'

/**
 * Adds the `visible` class when the element scrolls into view, mirroring the
 * IntersectionObserver fade-in from the original About markup (threshold 0.1).
 */
export function useFadeInOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
