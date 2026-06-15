import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { useCart } from '../../cart/hooks/useCart'
import { ColorPicker } from '../components/ColorPicker'
import { ProductAccordion } from '../components/ProductAccordion'
import { ProductDetailFooter } from '../components/ProductDetailFooter'
import { ProductGallery } from '../components/ProductGallery'
import { RelatedProducts } from '../components/RelatedProducts'
import { SizePicker } from '../components/SizePicker'
import { getProductById } from '../data/catalog'
import { formatVnd } from '../../../shared/utils/money'

export function ProductDetailPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const [color, setColor] = useState(product.colors[0]?.name ?? '')
  const [size, setSize] = useState<string | null>(null)
  const [notice, setNotice] = useState('')
  const { addItem } = useCart()
  const navigate = useNavigate()

  // Reset selections and scroll to top when the viewed product changes.
  useEffect(() => {
    setColor(product.colors[0]?.name ?? '')
    setSize(null)
    setNotice('')
    window.scrollTo({ top: 0 })
  }, [product])

  function addToBag(): boolean {
    if (!size) {
      setNotice('Vui lòng chọn kích cỡ trước.')
      return false
    }
    addItem({
      id: product.id,
      name: product.name,
      color,
      size,
      price: product.price,
      image: product.images[0]?.full ?? '',
      imageAlt: product.name,
    })
    setNotice('')
    return true
  }

  function handleAddToBag() {
    if (addToBag()) {
      setNotice('Đã thêm vào giỏ hàng.')
    }
  }

  function handleBuyNow() {
    if (addToBag()) {
      navigate('/cart')
    }
  }

  return (
    <div className="storefront bg-surface text-on-surface font-body-md antialiased overflow-x-hidden">
      <StorefrontHeader active="shop" />

      <main className="max-w-7xl mx-auto px-container-padding pt-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-12">
          <ProductGallery images={product.images} />

          <div className="md:col-span-5 flex flex-col gap-stack-lg">
            <header className="flex flex-col gap-unit">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest">{product.collection}</span>
              <h1 className="font-headline-md text-headline-md text-on-surface">{product.name}</h1>
              <p className="font-price-display text-price-display text-primary mt-stack-sm">{formatVnd(product.price)}</p>
            </header>

            <div className="space-y-stack-md">
              <p className="font-body-md text-on-surface-variant leading-relaxed">{product.description}</p>
            </div>

            <ColorPicker colors={product.colors} selected={color} onSelect={setColor} />
            <SizePicker sizes={product.sizes} selected={size} onSelect={setSize} />

            <div className="flex flex-col gap-stack-sm mt-stack-md">
              <button
                type="button"
                className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps hover:opacity-80 transition-all uppercase tracking-widest"
                onClick={handleAddToBag}
              >
                Thêm vào giỏ
              </button>
              <button
                type="button"
                className="w-full border border-primary text-primary py-5 font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all uppercase tracking-widest"
                onClick={handleBuyNow}
              >
                Mua ngay
              </button>
              {notice ? <p className="font-body-sm text-body-sm text-secondary text-center">{notice}</p> : null}
            </div>

            <ProductAccordion sections={product.accordions} />
          </div>
        </div>

        <RelatedProducts />
      </main>

      <ProductDetailFooter />
    </div>
  )
}
