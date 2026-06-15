import type { Collection } from '../types/collection'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function CollectionCard({ collection, index = 0 }: { collection: Collection; index?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  const fromLeft = collection.featured || index % 2 === 1

  return (
    <div
      ref={ref}
      className={`${fromLeft ? 'reveal-left' : 'reveal-right'} collection-card group cursor-pointer relative overflow-hidden ${
        collection.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`${collection.aspect} w-full overflow-hidden mb-stack-md`}>
        <img className="w-full h-full object-cover silk-hover-effect" alt={collection.imageAlt} src={collection.image} />
      </div>
      <div className="flex flex-col items-center text-center">
        {collection.eyebrow ? (
          <span className="font-label-caps text-label-caps text-on-secondary-container mb-unit">{collection.eyebrow}</span>
        ) : null}
        <h2 className="font-headline-md text-headline-md mb-stack-sm">{collection.title}</h2>
        <a
          className="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-70 transition-opacity"
          href={collection.href}
        >
          {collection.ctaLabel}
        </a>
      </div>
    </div>
  )
}
