import { Link } from 'react-router-dom'
import { formatVnd } from '../../../shared/utils/money'
import type { Product } from '../types/home'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block transition-transform duration-300 ease-out hover:scale-[1.03]">
      <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-stack-md">
        <img
          alt={product.imageAlt}
          className="w-full h-full object-cover"
          src={product.image}
        />
      </div>
      <div className="text-center">
        <h3 className="font-body-md text-primary mb-unit">{product.name}</h3>
        <p className="font-price-display text-secondary">{formatVnd(product.price)}</p>
      </div>
    </Link>
  )
}
