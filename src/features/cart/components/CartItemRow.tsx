import type { CartItem } from '../types/cart'
import { formatVnd } from '../../../shared/utils/money'

export function CartItemRow({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: {
  item: CartItem
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="flex gap-gutter border-b border-surface-container pb-stack-lg group">
      <div className="w-40 product-image-container flex-shrink-0 bg-surface-container-low">
        <img alt={item.imageAlt} className="w-full h-full object-cover" src={item.image} />
      </div>
      <div className="flex flex-col justify-between flex-grow py-unit">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit">{item.name}</h3>
            <p className="font-body-sm text-body-sm text-secondary">Màu sắc: {item.color}</p>
            <p className="font-body-sm text-body-sm text-secondary">Kích cỡ: {item.size}</p>
          </div>
          <button
            type="button"
            className="material-symbols-outlined text-secondary hover:text-error transition-colors"
            aria-label="Xóa sản phẩm"
            onClick={() => onRemove(item.id)}
          >
            close
          </button>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex items-center border border-outline px-stack-sm py-1">
            <button
              type="button"
              className="material-symbols-outlined text-[18px] hover:bg-surface-variant transition-colors"
              aria-label="Giảm số lượng"
              onClick={() => onDecrement(item.id)}
            >
              remove
            </button>
            <span className="px-stack-md font-label-caps text-label-caps">{item.quantity}</span>
            <button
              type="button"
              className="material-symbols-outlined text-[18px] hover:bg-surface-variant transition-colors"
              aria-label="Tăng số lượng"
              onClick={() => onIncrement(item.id)}
            >
              add
            </button>
          </div>
          <span className="font-price-display text-price-display text-primary">
            {formatVnd(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}
