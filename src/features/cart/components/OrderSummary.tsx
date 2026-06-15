import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { paymentMethods } from '../data/cartData'
import { formatVnd } from '../../../shared/utils/money'

export function OrderSummary({
  subtotal,
  shipping,
  tax,
  total,
}: {
  subtotal: number
  shipping: number
  tax: number
  total: number
}) {
  const navigate = useNavigate()

  function handleApply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="bg-surface-container-lowest p-stack-lg border border-outline-variant sticky top-28">
      <h2 className="font-headline-md text-headline-md mb-stack-lg">Tóm Tắt Đơn Hàng</h2>
      <div className="flex flex-col gap-stack-md mb-stack-lg">
        <div className="flex justify-between">
          <span className="font-body-md text-body-md text-secondary">Tạm tính</span>
          <span className="font-price-display text-price-display text-primary">{formatVnd(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-body-md text-body-md text-secondary">Vận chuyển</span>
          {shipping === 0 ? (
            <span className="font-body-md text-body-md text-on-tertiary-container italic">Miễn phí</span>
          ) : (
            <span className="font-body-md text-body-md text-primary">{formatVnd(shipping)}</span>
          )}
        </div>
        <div className="flex justify-between">
          <span className="font-body-md text-body-md text-secondary">Thuế</span>
          <span className="font-body-md text-body-md text-primary">{formatVnd(tax)}</span>
        </div>
      </div>

      <form className="mb-stack-lg" onSubmit={handleApply}>
        <label className="font-label-caps text-label-caps block mb-unit text-secondary">MÃ GIẢM GIÁ</label>
        <div className="flex gap-stack-sm">
          <input
            className="flex-grow border-0 border-b border-outline bg-transparent py-2 focus:ring-0 focus:border-primary transition-all font-body-sm text-body-sm outline-none"
            placeholder="Nhập mã"
            type="text"
          />
          <button type="submit" className="font-label-caps text-label-caps text-primary hover:opacity-70 transition-opacity px-stack-sm">
            ÁP DỤNG
          </button>
        </div>
      </form>

      <div className="border-t border-outline-variant pt-stack-md mb-stack-lg">
        <div className="flex justify-between items-baseline">
          <span className="font-headline-sm text-headline-sm">Tổng cộng</span>
          <span className="font-display-lg-mobile text-display-lg-mobile text-primary">{formatVnd(total)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate('/checkout')}
        className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-[0.2em] hover:opacity-90 transition-all active:scale-[0.98]"
      >
        THANH TOÁN NGAY
      </button>

      <div className="mt-stack-lg text-center">
        <p className="font-body-sm text-body-sm text-secondary">Thuế và phí được tính khi thanh toán.</p>
        <div className="flex justify-center gap-stack-md mt-stack-sm opacity-50 grayscale">
          {paymentMethods.map((method) => (
            <img key={method.name} alt={method.name} className="h-4" src={method.logo} />
          ))}
        </div>
      </div>
    </div>
  )
}
