import { products, totalProducts, visibleProducts } from '../data/shopData'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'
import { ShopProductCard } from './ShopProductCard'

export function ProductGrid() {
  return (
    <section className="flex-grow">
      {/* Sorting & Count */}
      <div className="flex justify-between items-end mb-stack-lg pb-stack-sm border-b border-outline-variant">
        <span className="text-body-sm text-secondary">
          Hiển thị {visibleProducts} trong {totalProducts} sản phẩm
        </span>
        <div className="flex items-center gap-unit cursor-pointer group">
          <span className="font-label-caps text-label-caps text-primary">Sắp xếp: Mới nhất</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">
            expand_more
          </span>
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-section-gap">
        {products.map((product, index) => (
          <ScrollReveal key={product.id} direction={index % 2 === 0 ? 'left' : 'right'}>
            <ShopProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
      {/* Load More */}
      <div className="mt-section-gap text-center">
        <button
          type="button"
          className="bg-primary text-on-primary px-12 py-4 font-label-caps text-label-caps tracking-widest hover:opacity-80 transition-opacity"
        >
          XEM THÊM
        </button>
        <div className="mt-stack-md flex flex-col items-center gap-unit">
          <div className="w-48 h-[2px] bg-outline-variant relative">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-primary" />
          </div>
          <span className="text-[10px] font-label-caps text-secondary">
            ĐANG XEM {visibleProducts} TRONG {totalProducts} SẢN PHẨM
          </span>
        </div>
      </div>
    </section>
  )
}
