import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { CartFooter } from '../components/CartFooter'
import { CartItemRow } from '../components/CartItemRow'
import { OrderSummary } from '../components/OrderSummary'
import { TrustBadges } from '../components/TrustBadges'
import { useCart } from '../hooks/useCart'

export function CartPage() {
  const { items, increment, decrement, remove, subtotal, shipping, tax, total } = useCart()

  return (
    <div className="storefront bg-surface text-on-surface font-body-md">
      <StorefrontHeader active="shop" />

      <main className="max-w-7xl mx-auto px-container-padding py-section-gap">
        <h1 className="font-display-lg text-display-lg mb-stack-lg border-b border-outline-variant pb-stack-md">
          Giỏ Hàng
        </h1>

        {items.length === 0 ? (
          <p className="font-body-lg text-body-lg text-secondary py-section-gap text-center">
            Giỏ hàng của bạn đang trống.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-stack-lg">
                {items.map((item) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onIncrement={increment}
                    onDecrement={decrement}
                    onRemove={remove}
                  />
                ))}
              </div>
              <TrustBadges />
            </div>

            <div className="lg:col-span-4">
              <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
            </div>
          </div>
        )}
      </main>

      <CartFooter />
    </div>
  )
}
