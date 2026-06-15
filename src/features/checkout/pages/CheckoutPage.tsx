import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { useCart } from '../../cart/hooks/useCart'
import { CheckoutFooter } from '../components/CheckoutFooter'
import { CheckoutSteps } from '../components/CheckoutSteps'
import { OrderSummaryPanel } from '../components/OrderSummaryPanel'
import { PaymentMethod } from '../components/PaymentMethod'
import { ShippingForm } from '../components/ShippingForm'
import { ShippingMethods } from '../components/ShippingMethods'
import { shippingMethods, TAX_RATE } from '../data/checkoutData'
import type { PaymentForm, ShippingForm as ShippingFormData } from '../types/checkout'
import { generateOrderNumber, saveLastOrder } from '../types/order'
import {
  validatePayment,
  validateShipping,
  type PaymentErrors,
  type ShippingErrors,
} from '../utils/validation'

const emptyShipping: ShippingFormData = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  province: '',
  zip: '',
  saveInfo: false,
}

const emptyPayment: PaymentForm = { cardNumber: '', expiry: '', cvv: '' }

export function CheckoutPage() {
  const { items, subtotal, clear } = useCart()
  const navigate = useNavigate()

  const [shipping, setShipping] = useState<ShippingFormData>(emptyShipping)
  const [payment, setPayment] = useState<PaymentForm>(emptyPayment)
  const [shippingMethodId, setShippingMethodId] = useState(shippingMethods[0]?.id ?? 'standard')
  const [shippingErrors, setShippingErrors] = useState<ShippingErrors>({})
  const [paymentErrors, setPaymentErrors] = useState<PaymentErrors>({})

  const shippingFee = useMemo(
    () => shippingMethods.find((method) => method.id === shippingMethodId)?.price ?? 0,
    [shippingMethodId],
  )
  const tax = Math.round(subtotal * TAX_RATE)
  const total = subtotal + shippingFee + tax

  function handlePlaceOrder() {
    const shipErrors = validateShipping(shipping)
    const payErrors = validatePayment(payment)
    setShippingErrors(shipErrors)
    setPaymentErrors(payErrors)

    if (Object.keys(shipErrors).length > 0 || Object.keys(payErrors).length > 0) {
      // Scroll to the first error so the user sees what to fix.
      document.querySelector('[aria-invalid="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    saveLastOrder({
      orderNumber: generateOrderNumber(),
      createdAt: new Date().toISOString(),
      items,
      subtotal,
      shipping: shippingFee,
      tax,
      total,
      customerName: `${shipping.firstName} ${shipping.lastName}`.trim(),
      email: shipping.email,
      address: `${shipping.address}, ${shipping.city}, ${shipping.province} ${shipping.zip}`.trim(),
    })
    clear()
    navigate('/order-confirmation')
  }

  return (
    <div className="storefront bg-surface font-body-md text-on-surface antialiased">
      <StorefrontHeader active="shop" />

      <main className="pt-8 pb-section-gap min-h-screen">
        <div className="max-w-7xl mx-auto px-container-padding flex flex-col md:flex-row gap-section-gap">
          {items.length === 0 ? (
            <div className="flex-1 text-center py-section-gap">
              <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">Giỏ hàng của bạn đang trống.</p>
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
              <div className="flex-1 space-y-stack-lg">
                <CheckoutSteps activeStep={1} />
                <ShippingForm
                  value={shipping}
                  onChange={(patch) => setShipping((prev) => ({ ...prev, ...patch }))}
                  errors={shippingErrors}
                />
                <ShippingMethods selectedId={shippingMethodId} onSelect={setShippingMethodId} />
                <PaymentMethod
                  value={payment}
                  onChange={(patch) => setPayment((prev) => ({ ...prev, ...patch }))}
                  errors={paymentErrors}
                />
              </div>

              <OrderSummaryPanel
                items={items}
                subtotal={subtotal}
                shipping={shippingFee}
                tax={tax}
                total={total}
                onPlaceOrder={handlePlaceOrder}
              />
            </>
          )}
        </div>
      </main>

      <CheckoutFooter />
    </div>
  )
}
