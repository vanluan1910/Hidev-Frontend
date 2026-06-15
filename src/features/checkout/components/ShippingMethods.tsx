import { shippingMethods } from '../data/checkoutData'
import { formatVnd } from '../../../shared/utils/money'

export function ShippingMethods({
  selectedId,
  onSelect,
}: {
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <section className="pt-stack-lg">
      <h2 className="font-headline-md text-headline-md mb-stack-md">Phương thức vận chuyển</h2>
      <div className="space-y-stack-sm">
        {shippingMethods.map((method) => {
          const selected = method.id === selectedId
          return (
            <label
              key={method.id}
              className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                selected ? 'border-primary bg-surface-container-low' : 'border-outline-variant hover:border-primary'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="ship"
                  checked={selected}
                  onChange={() => onSelect(method.id)}
                  className="h-4 w-4 text-primary focus:ring-0 focus:ring-offset-0"
                />
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md font-medium">{method.name}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{method.description}</span>
                </div>
              </div>
              <span className="font-price-display text-price-display">{formatVnd(method.price)}</span>
            </label>
          )
        })}
      </div>
    </section>
  )
}
