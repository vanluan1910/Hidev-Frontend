import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { CollectionGrid } from '../components/CollectionGrid'
import { EditorialSection } from '../components/EditorialSection'
import { FeaturedBrands } from '../components/FeaturedBrands'
import { HeroSection } from '../components/HeroSection'
import { NewsletterSection } from '../components/NewsletterSection'
import { SiteFooter } from '../components/SiteFooter'

export function HomePage() {
  return (
    <div className="storefront font-body-md text-body-md">
      <StorefrontHeader active="home" />
      <main>
        <HeroSection />
        <CollectionGrid />
        <EditorialSection />
        <FeaturedBrands />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  )
}
