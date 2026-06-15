import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type Direction = 'left' | 'right' | 'up'

const directionClass: Record<Direction, string> = {
  left: 'reveal-left',
  right: 'reveal-right',
  up: 'reveal-on-scroll',
}

/**
 * Wraps content and reveals it (slide-in) the first time it scrolls into view.
 * Relies on the `.reveal-left` / `.reveal-right` / `.reveal-on-scroll` styles
 * defined in index.css under `.storefront`.
 */
export function ScrollReveal({
  children,
  direction = 'up',
  className = '',
  delay,
}: {
  children: ReactNode
  direction?: Direction
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${directionClass[direction]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
