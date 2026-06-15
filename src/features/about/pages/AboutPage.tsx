import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { AboutFooter } from '../components/AboutFooter'
import { AboutHero } from '../components/AboutHero'
import { AestheticDivider } from '../components/AestheticDivider'
import { BrandStory } from '../components/BrandStory'
import { Craftsmanship } from '../components/Craftsmanship'
import { CoreValues } from '../components/CoreValues'

export function AboutPage() {
  return (
    <div className="storefront font-body-md text-on-surface" style={{ scrollBehavior: 'smooth' }}>
      <StorefrontHeader active="about" />
      <main className="w-full">
        <AboutHero />
        <BrandStory />
        <Craftsmanship />
        <CoreValues />
        <AestheticDivider />
      </main>
      <AboutFooter />
    </div>
  )
}
