import { Link } from 'react-router-dom'
import { relatedProducts } from '../data/productDetailData'
import { formatVnd } from '../../../shared/utils/money'

export function RelatedProducts() {
  return (
    <section className="mt-section-gap mb-stack-lg">
      <div className="flex justify-between items-end mb-stack-md">
        <h2 className="font-headline-md text-headline-md">Sản Phẩm Liên Quan</h2>
        <a className="font-label-caps text-label-caps underline text-secondary hover:text-primary" href="#">
          MUA TRỌN BỘ
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {relatedProducts.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="flex flex-col gap-stack-sm group cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]">
            <div className="overflow-hidden bg-surface-container aspect-[3/4]">
              <img
                className="w-full h-full object-cover"
                alt={item.imageAlt}
                src={item.image}
              />
            </div>
            <div className="text-center mt-2">
              <h3 className="font-body-md text-on-surface">{item.name}</h3>
              <p className="font-label-caps text-secondary">{formatVnd(item.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
