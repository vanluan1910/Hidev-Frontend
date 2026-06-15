import type { CartItem } from '../../cart/types/cart'
import { formatVnd } from '../../../shared/utils/money'

export function OrderSummaryPanel({
  items,
  subtotal,
  shipping,
  tax,
  total,
  onPlaceOrder,
}: {
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  onPlaceOrder: () => void
}) {
  return (
    <aside className="w-full md:w-[400px] space-y-stack-lg">
      <div className="bg-surface-container-low p-stack-lg sticky top-32">
        <h2 className="font-headline-sm text-headline-sm mb-stack-lg border-b border-outline-variant pb-stack-sm">
          Tóm tắt đơn hàng
        </h2>

        <ul className="space-y-stack-md mb-stack-lg">
          {items.map((item) => (
            <li key={`${item.id}-${item.color}-${item.size}`} className="flex gap-stack-md">
              <div className="w-20 h-24 bg-surface-container-highest flex-shrink-0">
                <img alt={item.imageAlt} className="w-full h-full object-cover grayscale-[0.3]" src={item.image} />
              </div>
              <div className="flex flex-col justify-between py-1 flex-grow">
                <div>
                  <h3 className="font-body-md text-body-md font-medium">{item.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-body-sm text-body-sm">SL: {item.quantity}</span>
                  <span className="font-price-display text-price-display">{formatVnd(item.price * item.quantity)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-stack-sm border-t border-outline-variant pt-stack-md mb-stack-lg">
          <div className="flex justify-between text-on-surface-variant">
            <span className="font-body-sm text-body-sm">Tạm tính</span>
            <span className="font-body-md text-body-md">{formatVnd(subtotal)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span className="font-body-sm text-body-sm">Vận chuyển</span>
            <span className="font-body-md text-body-md">{shipping === 0 ? 'Miễn phí' : formatVnd(shipping)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span className="font-body-sm text-body-sm">Thuế</span>
            <span className="font-body-md text-body-md">{formatVnd(tax)}</span>
          </div>
          <div className="flex justify-between pt-stack-sm border-t border-outline-variant text-primary">
            <span className="font-body-lg text-body-lg font-bold">Tổng cộng</span>
            <span className="font-headline-sm text-headline-sm font-bold">{formatVnd(total)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onPlaceOrder}
          className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps hover:opacity-80 transition-all active:scale-[0.98] duration-200 uppercase tracking-widest"
        >
          Đặt hàng ngay
        </button>
        <p className="mt-stack-md text-center text-[10px] text-on-surface-variant font-label-caps uppercase tracking-tighter">
          Thanh toán an toàn bởi hệ thống Aura
        </p>
      </div>
    </aside>
  )
}
