import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { ProductGrid } from '../components/ProductGrid'
import { ShopFilters } from '../components/ShopFilters'
import { ShopFooter } from '../components/ShopFooter'

export function ShopPage() {
  return (
    <div className="storefront font-body-md text-body-md overflow-x-hidden">
      <StorefrontHeader active="shop" />
      <main className="max-w-7xl mx-auto px-container-padding py-stack-lg min-h-screen">
        <header className="mb-section-gap text-center max-w-3xl mx-auto">
          <h1 className="font-display-lg text-display-lg mb-stack-sm text-primary">Tất Cả Sản Phẩm</h1>
          <p className="font-body-lg text-body-lg text-secondary">
            Khám phá bộ sưu tập những kiệt tác từ lụa được tuyển chọn kỹ lưỡng. Từ trang phục ban ngày thanh thoát đến
            những thiết kế dạ tiệc thanh tao, mỗi sản phẩm đều thể hiện sự tinh xảo trong tay nghề của Aura de Soie.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-gutter">
          <ShopFilters />
          <ProductGrid />
        </div>
      </main>
      <ShopFooter />
    </div>
  )
}
