import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { CollectionCard } from '../components/CollectionCard'
import { CollectionsFooter } from '../components/CollectionsFooter'
import { collections } from '../data/collectionsData'

export function CollectionsPage() {
  return (
    <div className="storefront bg-surface text-on-surface font-body-md overflow-x-hidden">
      <StorefrontHeader active="collections" />

      <header className="w-full max-w-7xl mx-auto px-container-padding py-section-gap text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display-lg text-display-lg mb-stack-sm text-reveal">
            <span className="block text-reveal-inner">Bộ Sưu Tập</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-secondary-container mb-stack-lg fade-in-up" style={{ animationDelay: '0.5s' }}>
            Khám phá những câu chuyện thời trang qua từng sợi lụa.
          </p>
          <div className="w-12 h-px bg-primary mx-auto fade-in-up" style={{ animationDelay: '1s' }} />
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-container-padding pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-section-gap">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.id} collection={collection} index={index} />
          ))}
        </div>
      </main>

      <CollectionsFooter />
    </div>
  )
}
