import { useState } from 'react'
import type { ProductImage } from '../types/productDetail'

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  return (
    <div className="md:col-span-7 flex flex-col gap-gutter">
      <div className="product-image-container relative overflow-hidden bg-surface-container aspect-[3/4]">
        <img
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          alt={active.alt}
          src={active.full}
        />
      </div>
      <div className="grid grid-cols-4 gap-gutter">
        {images.map((image, index) => (
          <button
            key={image.full}
            type="button"
            className={`thumbnail-btn border-2 ${index === activeIndex ? 'border-primary' : 'border-transparent'}`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className="w-full aspect-[3/4] object-cover opacity-80 hover:opacity-100 transition-opacity"
              alt={image.alt}
              src={image.thumb}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
