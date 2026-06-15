import type { PaymentForm as PaymentFormData } from '../types/checkout'
import type { PaymentErrors } from '../utils/validation'
import { FloatingInput } from './FloatingInput'

export function PaymentMethod({
  value,
  onChange,
  errors = {},
}: {
  value: PaymentFormData
  onChange: (patch: Partial<PaymentFormData>) => void
  errors?: PaymentErrors
}) {
  return (
    <section className="pt-stack-lg">
      <h2 className="font-headline-md text-headline-md mb-stack-md">Thanh toán</h2>
      <div className="p-4 border border-outline-variant space-y-stack-md">
        <div className="flex items-center justify-between pb-stack-sm border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">credit_card</span>
            <span className="font-body-md text-body-md font-medium">Thẻ tín dụng</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] border border-outline px-1 rounded">VISA</span>
            <span className="text-[10px] border border-outline px-1 rounded">MASTER</span>
          </div>
        </div>
        <div className="space-y-stack-md pt-stack-sm">
          <FloatingInput id="card-num" label="Số thẻ" value={value.cardNumber} onChange={(v) => onChange({ cardNumber: v })} error={errors.cardNumber} />
          <div className="grid grid-cols-2 gap-stack-md">
            <FloatingInput id="exp" label="Ngày hết hạn (MM/YY)" value={value.expiry} onChange={(v) => onChange({ expiry: v })} error={errors.expiry} />
            <FloatingInput id="cvv" label="CVV" value={value.cvv} onChange={(v) => onChange({ cvv: v })} error={errors.cvv} />
          </div>
        </div>
      </div>
    </section>
  )
}
