import { featuredBrands } from '../data/homeData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export function FeaturedBrands() {
  const ref = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className="py-section-gap px-container-padding max-w-7xl mx-auto reveal-right">
      <div className="text-center mb-section-gap">
        <h2 className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
          Các thương hiệu tuyển chọn
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-60">
        {featuredBrands.map((brand) => (
          <span key={brand} className="font-display-lg text-[28px] tracking-[0.2em] uppercase">
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
