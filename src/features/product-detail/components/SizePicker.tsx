export function SizePicker({
  sizes,
  selected,
  onSelect,
}: {
  sizes: string[]
  selected: string | null
  onSelect: (size: string) => void
}) {
  return (
    <div className="flex flex-col gap-stack-sm">
      <div className="flex justify-between items-end">
        <span className="font-label-caps text-label-caps">KÍCH CỠ</span>
        <button type="button" className="font-label-caps text-[10px] underline text-secondary hover:text-primary">
          HƯỚNG DẪN CHỌN CỠ
        </button>
      </div>
      <div className="grid grid-cols-4 gap-stack-sm mt-unit">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={`size-btn py-3 border font-label-caps text-label-caps transition-all ${
              selected === size
                ? 'bg-primary text-on-primary border-primary'
                : 'border-outline text-on-surface hover:border-primary'
            }`}
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
