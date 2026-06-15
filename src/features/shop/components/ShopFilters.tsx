import { categories, colors, priceRange, sizes } from '../data/shopData'
import { formatVnd } from '../../../shared/utils/money'

export function ShopFilters() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-stack-lg sticky top-28 h-fit">
      {/* Categories */}
      <div>
        <h3 className="font-label-caps text-label-caps mb-stack-md text-primary">Danh mục</h3>
        <ul className="space-y-stack-sm">
          {categories.map((category) => (
            <li key={category.label}>
              <button
                type="button"
                className={
                  category.active
                    ? 'text-body-sm text-primary font-semibold hover:text-primary transition-colors'
                    : 'text-body-sm text-secondary hover:text-primary transition-colors'
                }
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-outline-variant" />
      {/* Sizes */}
      <div>
        <h3 className="font-label-caps text-label-caps mb-stack-md text-primary">Kích cỡ</h3>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <button
              key={size.label}
              type="button"
              className={
                size.active
                  ? 'border border-primary bg-primary text-on-primary py-1 text-[10px] font-label-caps'
                  : 'border border-outline py-1 text-[10px] font-label-caps hover:bg-primary hover:text-on-primary transition-all'
              }
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Colors */}
      <div>
        <h3 className="font-label-caps text-label-caps mb-stack-md text-primary">Màu sắc</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              className="w-6 h-6 rounded-full border border-outline-variant"
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-stack-md">
          <h3 className="font-label-caps text-label-caps text-primary">Khoảng giá</h3>
          <span className="text-[10px] font-label-caps text-secondary">TỐI ĐA {formatVnd(priceRange.selectedMax)}</span>
        </div>
        <input
          className="w-full h-[1px] bg-outline-variant appearance-none cursor-pointer accent-black"
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          step={priceRange.step}
          defaultValue={priceRange.selectedMax}
        />
        <div className="flex justify-between mt-2 text-[10px] font-label-caps text-secondary">
          <span>{formatVnd(priceRange.min)}</span>
          <span>{formatVnd(priceRange.max)}</span>
        </div>
      </div>
    </aside>
  )
}
