import { Link } from 'react-router-dom'
import { useCart } from '../../cart/hooks/useCart'
import { formatVnd } from '../../../shared/utils/money'
import type { ShopProduct } from '../types/shop'

export function ShopProductCard({ product }: { product: ShopProduct }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block transition-transform duration-300 ease-out hover:scale-[1.03]">
      <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-stack-md relative">
        <img
          className="w-full h-full object-cover"
          alt={product.imageAlt}
          src={product.image}
        />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            className="bg-primary text-on-primary px-4 py-2 font-label-caps text-[10px] hover:opacity-90"
            onClick={(event) => {
              event.preventDefault()
              addItem({
                id: product.id,
                name: product.name,
                color: 'Mặc định',
                size: 'Một cỡ',
                price: product.price,
                image: product.image,
                imageAlt: product.imageAlt,
              })
            }}
          >
            THÊM NHANH
          </button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-body-md text-body-md text-primary mb-1">{product.name}</h2>
        <p className="font-price-display text-price-display text-primary">{formatVnd(product.price)}</p>
      </div>
    </Link>
  )
}
