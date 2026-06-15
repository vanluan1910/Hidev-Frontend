import { newArrivals } from '../data/homeData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { ProductCard } from './ProductCard'

export function CollectionGrid() {
  const ref = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className="py-section-gap px-container-padding max-w-7xl mx-auto reveal-left">
      <div className="flex justify-between items-end mb-section-gap">
        <div>
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-unit inline-block">
            Hàng mới về
          </span>
          <h2 className="font-headline-md text-display-lg text-primary">Tuyển Chọn Đặc Sắc</h2>
        </div>
        <a
          className="font-label-caps text-label-caps text-primary border-b border-primary hover:pb-1 transition-all"
          href="#"
        >
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
