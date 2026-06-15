import type { ProductColor } from '../types/productDetail'

export function ColorPicker({
  colors,
  selected,
  onSelect,
}: {
  colors: ProductColor[]
  selected: string
  onSelect: (name: string) => void
}) {
  return (
    <div className="flex flex-col gap-stack-sm">
      <span className="font-label-caps text-label-caps">
        MÀU SẮC: <span className="text-secondary">{selected}</span>
      </span>
      <div className="flex gap-stack-md mt-unit">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            aria-label={color.name}
            className={`w-8 h-8 rounded-full border border-outline ring-offset-2 ring-primary transition-all ${
              selected === color.name ? 'ring-1' : ''
            }`}
            style={{ backgroundColor: color.hex }}
            onClick={() => onSelect(color.name)}
          />
        ))}
      </div>
    </div>
  )
}
