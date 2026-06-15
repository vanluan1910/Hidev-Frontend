import { useNavigate } from 'react-router-dom'
import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { formatVnd } from '../../../shared/utils/money'
import { CheckoutFooter } from '../components/CheckoutFooter'
import { loadLastOrder } from '../types/order'

export function OrderConfirmationPage() {
  const navigate = useNavigate()
  const order = loadLastOrder()

  return (
    <div className="storefront bg-surface font-body-md text-on-surface antialiased">
      <StorefrontHeader active="shop" />

      <main className="pt-8 pb-section-gap min-h-screen">
        <div className="max-w-2xl mx-auto px-container-padding">
          {!order ? (
            <div className="text-center py-section-gap">
              <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">Không tìm thấy đơn hàng nào.</p>
              <button
                type="button"
                onClick={() => navigate('/shop')}
                className="bg-primary text-on-primary px-stack-lg py-stack-md font-label-caps text-label-caps uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-section-gap">
                <span className="material-symbols-outlined text-primary text-[56px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <h1 className="font-headline-md text-headline-md mt-stack-md mb-stack-sm">Cảm ơn bạn đã đặt hàng!</h1>
                <p className="font-body-md text-on-surface-variant">
                  Đơn hàng <span className="font-medium text-primary">{order.orderNumber}</span> đã được xác nhận. Chúng tôi
                  sẽ gửi email cập nhật tới {order.email}.
                </p>
              </div>

              <div className="bg-surface-container-low p-stack-lg space-y-stack-lg">
                <div>
                  <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm">GIAO ĐẾN</h2>
                  <p className="font-body-md text-body-md">{order.customerName}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{order.address}</p>
                </div>

                <ul className="space-y-stack-md border-t border-outline-variant pt-stack-md">
                  {order.items.map((item) => (
                    <li key={`${item.id}-${item.color}-${item.size}`} className="flex gap-stack-md">
                      <div className="w-16 h-20 bg-surface-container-highest flex-shrink-0">
                        <img alt={item.imageAlt} className="w-full h-full object-cover" src={item.image} />
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

                <div className="space-y-stack-sm border-t border-outline-variant pt-stack-md">
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-body-sm text-body-sm">Tạm tính</span>
                    <span className="font-body-md text-body-md">{formatVnd(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-body-sm text-body-sm">Vận chuyển</span>
                    <span className="font-body-md text-body-md">{order.shipping === 0 ? 'Miễn phí' : formatVnd(order.shipping)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-body-sm text-body-sm">Thuế</span>
                    <span className="font-body-md text-body-md">{formatVnd(order.tax)}</span>
                  </div>
                  <div className="flex justify-between pt-stack-sm border-t border-outline-variant text-primary">
                    <span className="font-body-lg text-body-lg font-bold">Tổng cộng</span>
                    <span className="font-headline-sm text-headline-sm font-bold">{formatVnd(order.total)}</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-section-gap">
                <button
                  type="button"
                  onClick={() => navigate('/shop')}
                  className="bg-primary text-on-primary px-stack-lg py-stack-md font-label-caps text-label-caps uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  Tiếp tục mua sắm
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <CheckoutFooter />
    </div>
  )
}
