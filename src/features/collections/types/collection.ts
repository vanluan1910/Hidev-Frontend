export interface Collection {
  id: string
  title: string
  /** Optional eyebrow label, e.g. "MỚI NHẤT" */
  eyebrow?: string
  ctaLabel: string
  href: string
  image: string
  imageAlt: string
  /** Tailwind aspect ratio class, e.g. "aspect-[3/4]" */
  aspect: string
  /** Whether the card spans the full grid width (featured) */
  featured?: boolean
}
