import type { ShippingForm as ShippingFormData } from '../types/checkout'
import type { ShippingErrors } from '../utils/validation'
import { FloatingInput } from './FloatingInput'

export function ShippingForm({
  value,
  onChange,
  errors = {},
}: {
  value: ShippingFormData
  onChange: (patch: Partial<ShippingFormData>) => void
  errors?: ShippingErrors
}) {
  return (
    <section className="space-y-stack-lg">
      <h1 className="font-headline-md text-headline-md mb-stack-md">Thông tin giao hàng</h1>
      <form className="space-y-stack-md" onSubmit={(event) => event.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <FloatingInput id="first-name" label="Họ" value={value.firstName} onChange={(v) => onChange({ firstName: v })} error={errors.firstName} />
          <FloatingInput id="last-name" label="Tên" value={value.lastName} onChange={(v) => onChange({ lastName: v })} error={errors.lastName} />
        </div>
        <FloatingInput id="email" label="Email" type="email" value={value.email} onChange={(v) => onChange({ email: v })} error={errors.email} />
        <FloatingInput id="address" label="Địa chỉ" value={value.address} onChange={(v) => onChange({ address: v })} error={errors.address} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <FloatingInput id="city" label="Thành phố" value={value.city} onChange={(v) => onChange({ city: v })} error={errors.city} />
          <FloatingInput id="province" label="Tỉnh" value={value.province} onChange={(v) => onChange({ province: v })} error={errors.province} />
          <FloatingInput id="zip" label="Mã bưu điện" value={value.zip} onChange={(v) => onChange({ zip: v })} error={errors.zip} />
        </div>
        <div className="flex items-center mt-stack-md">
          <input
            id="save-info"
            type="checkbox"
            checked={value.saveInfo}
            onChange={(event) => onChange({ saveInfo: event.target.checked })}
            className="h-4 w-4 text-primary border-outline-variant focus:ring-primary rounded-none"
          />
          <label className="ml-2 font-body-sm text-body-sm text-on-surface-variant" htmlFor="save-info">
            Lưu thông tin này cho lần sau
          </label>
        </div>
      </form>
    </section>
  )
}
