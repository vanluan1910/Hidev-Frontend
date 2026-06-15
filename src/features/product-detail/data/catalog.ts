import { newArrivals } from '../../home/data/homeData'
import { products as shopProducts } from '../../shop/data/shopData'
import type { ProductDetail } from '../types/productDetail'
import { product as featuredProduct, relatedProducts } from './productDetailData'

interface BasicProduct {
  id: string
  name: string
  price: number
  image: string
  imageAlt: string
}

const defaultColors = [
  { name: 'ĐEN', hex: '#000000' },
  { name: 'TRẮNG NGÀ', hex: '#E5E4E2' },
  { name: 'XÁM THAN', hex: '#4A4A4A' },
]

const defaultSizes = ['XS', 'S', 'M', 'L']

const defaultAccordions = [
  {
    id: 'details',
    title: 'CHI TIẾT SẢN PHẨM',
    body: [
      'Chất liệu cao cấp, tuyển chọn kỹ lưỡng.',
      'Hoàn thiện thủ công bởi nghệ nhân lành nghề.',
      'Thiết kế tối giản, vượt thời gian.',
      'Hướng dẫn bảo quản: giặt khô chuyên nghiệp.',
    ],
  },
  {
    id: 'shipping',
    title: 'VẬN CHUYỂN & ĐỔI TRẢ',
    body: [
      'Miễn phí vận chuyển cho đơn hàng trên 12.000.000₫.',
      'Đổi trả trong vòng 14 ngày với sản phẩm chưa sử dụng, còn nguyên tem mác.',
      'Đổi hàng hoàn toàn miễn phí.',
    ],
  },
]

/** Builds a full ProductDetail from a simple product card entry. */
function toDetail(item: BasicProduct, collection: string): ProductDetail {
  return {
    id: item.id,
    collection,
    name: item.name,
    price: item.price,
    description:
      'Một thiết kế đề cao sự tinh tế và chất liệu thượng hạng, mang đến vẻ đẹp thanh lịch vượt thời gian cho tủ đồ của bạn.',
    images: [{ thumb: item.image, full: item.image, alt: item.imageAlt }],
    colors: defaultColors,
    sizes: defaultSizes,
    accordions: defaultAccordions,
  }
}

const catalog: Record<string, ProductDetail> = {}

// Featured product keeps its rich detail data.
catalog[featuredProduct.id] = featuredProduct

// Add home, shop and related products (without overwriting richer entries).
for (const item of newArrivals) {
  if (!catalog[item.id]) catalog[item.id] = toDetail(item, 'BỘ SƯU TẬP MỚI')
}
for (const item of shopProducts) {
  if (!catalog[item.id]) catalog[item.id] = toDetail(item, 'TẤT CẢ SẢN PHẨM')
}
for (const item of relatedProducts) {
  if (!catalog[item.id]) catalog[item.id] = toDetail(item, 'SẢN PHẨM LIÊN QUAN')
}

export function getProductById(id: string | undefined): ProductDetail {
  if (id && catalog[id]) return catalog[id]
  return featuredProduct
}
