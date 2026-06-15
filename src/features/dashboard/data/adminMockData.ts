import type { Category } from '../../categories/types/category'
import type { Product } from '../../products/types/product'
import type { InventoryVariant } from '../../inventory/types/inventory'
import type { Order } from '../../orders/types/order'
import type { Customer } from '../../customers/types/customer'

export const mockCategories: Category[] = [
  { id: 'cat-dam', name: 'Đầm', description: 'Đầm lụa và dạ tiệc', isActive: true, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqMI63zxpXC7TTarD1Sw0C2iJOGyur-sdhGmLux5iAwxpF-4GP48VvRH_wfW4ARJTMQvLJCV2CIZFPYr0iPADehhL1gVwmSR9aG1HamwxAqiSCNIxeosf4y1Xw6eVGaElA-JvDPK-syU1hgo2oRGqAgevghLmqCFFdGkca5CjZGtYOTITu9x-PZfz5ahrPFzfF7gJnpVkxoZd-6I3dpP-h4HFwuHpV6y0gIjuf4JhMUwPziKRZgKIHmL7NP9MpeLNEZ0rFA47zy6Rg', itemCount: 42, updatedAt: '24 Th10, 2023' },
  { id: 'cat-ao', name: 'Áo lụa', description: 'Áo blouse và áo lụa cao cấp', isActive: true, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI14cSjDc-EBPvCzsVXT1UAmzfC_QugEAxcBGhtL31RteTu4Sp5mMFqrL6BGhcVUW80VlmXeugac1kyNrQ5B1YZ3JqOAgEYoiOF3d3mEm3r011SrMatdjb5on2Q1rDzJgItTHa9IZ-TMnhz68bP7ITes-J6d8qiWZsdcEOA8qi6VU75qI2WP0zPCqCMvID6ZFzC2_9DdE6TS5tYJaUe2E9BcirtqU6RpHfiIdgoentoc410CIZ7ApSSaLMcphN20TI0OCx8ujCnLdY', itemCount: 128, updatedAt: '02 Th11, 2023' },
  { id: 'cat-quan', name: 'Quần âu', description: 'Quần may đo thanh lịch', isActive: true, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCPNAK72W9pnn12Do6af6Hkgea6oi3iNJUR3lVmUjP8UM7X9qT089z8ekNf_H3GY8bis4duervWa0O51VIir1BdojalmQ5Q8jJOyMKRaYhsBcXCk-z1fnqtqwEiZepmNwLY7cuKKy7ONkRit3FROJbX2HvAODzlTh_PHu6HWhJaPjluJPO5nobRwYYptdk0eKJe8MARXw5mBeyGSZH_Qew6y-ZOlVW65wk_7GqBoxq6kB3bBjLRxfyYauGqq8xwZBTEkNeL598HDnj', itemCount: 35, updatedAt: '15 Th11, 2023' },
  { id: 'cat-phukien', name: 'Phụ kiện', description: 'Khăn, túi và phụ kiện', isActive: true, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2R5D8dUl9dAfkRbuFqMqzOfXIy96gioV0jQTE0MwJX-HrSGhcQJsv94Csz3c9h7f4x6_1HEvBOx5xL_jy7yFWbOeaUEvn75KXnDELdYkMo0Z1_jbF1bPpBfgtJ3jgRX_AIwLEds_OV2DZV4DNK4lnpE_xsctnUQIAuTF3xqs4n6PAZjNccUpWlH5_BuoFkchfrNPcuhK_ZFyiRjGXDuT7G0rUjOyL9FmAZk95wFcIJ03N8iXNnB_yfeF3hzbc7zdO2HKE6InH_he', itemCount: 18, updatedAt: '12 Th10, 2023' },
  { id: 'cat-khoac', name: 'Áo khoác', description: 'Áo khoác dạ và blazer', isActive: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeMqOu7cbUC6KzXCb1giRoKAXsrJnGZW5FmL_GQsROzBfADRcXyb-2qA0r062Cqw_U8Rs5_Ek50bu25b67rf8fHY377EGo2M1Q7VeMskHL8TIlembbrAiUYXNgc6oXKXhcyLc44mmnxgEJQwmOmX75TapEfPc_dNJEf678QRZ0UjQmL81WsMvZddeYMup8-QhZMFRAZ7QmyS3uT_hTIBWpj45jQmx8qBbS2o5f5zMrLhbNJryzWzKBdKNDuoHcEdCe-NSBzM3GYIHN', itemCount: 24, updatedAt: '18 Th10, 2023' },
]

export const mockProducts: Product[] = [
  {
    id: 'p-1',
    name: 'Đầm Suông Lụa Oyster',
    sku: 'ADS-DRESS-001',
    categoryId: 'cat-dam',
    categoryName: 'Đầm',
    price: 31_000_000,
    status: 'Active',
    mainImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqMI63zxpXC7TTarD1Sw0C2iJOGyur-sdhGmLux5iAwxpF-4GP48VvRH_wfW4ARJTMQvLJCV2CIZFPYr0iPADehhL1gVwmSR9aG1HamwxAqiSCNIxeosf4y1Xw6eVGaElA-JvDPK-syU1hgo2oRGqAgevghLmqCFFdGkca5CjZGtYOTITu9x-PZfz5ahrPFzfF7gJnpVkxoZd-6I3dpP-h4HFwuHpV6y0gIjuf4JhMUwPziKRZgKIHmL7NP9MpeLNEZ0rFA47zy6Rg',
    shortDescription: 'Đầm lụa dáng suông màu oyster',
    createdAt: '2024-01-10',
    updatedAt: '2024-02-01',
  },
  {
    id: 'p-2',
    name: 'Áo Blazer May Đo Chính Xác',
    sku: 'ADS-BLZ-002',
    categoryId: 'cat-khoac',
    categoryName: 'Áo khoác',
    price: 22_000_000,
    status: 'Active',
    mainImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAeMqOu7cbUC6KzXCb1giRoKAXsrJnGZW5FmL_GQsROzBfADRcXyb-2qA0r062Cqw_U8Rs5_Ek50bu25b67rf8fHY377EGo2M1Q7VeMskHL8TIlembbrAiUYXNgc6oXKXhcyLc44mmnxgEJQwmOmX75TapEfPc_dNJEf678QRZ0UjQmL81WsMvZddeYMup8-QhZMFRAZ7QmyS3uT_hTIBWpj45jQmx8qBbS2o5f5zMrLhbNJryzWzKBdKNDuoHcEdCe-NSBzM3GYIHN',
    shortDescription: 'Blazer cấu trúc, đường cắt sắc nét',
    createdAt: '2024-01-12',
    updatedAt: '2024-02-02',
  },
  {
    id: 'p-3',
    name: 'Áo Len Cashmere Dáng Rộng',
    sku: 'ADS-KNIT-003',
    categoryId: 'cat-ao',
    categoryName: 'Áo lụa',
    price: 18_500_000,
    status: 'Draft',
    mainImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBI14cSjDc-EBPvCzsVXT1UAmzfC_QugEAxcBGhtL31RteTu4Sp5mMFqrL6BGhcVUW80VlmXeugac1kyNrQ5B1YZ3JqOAgEYoiOF3d3mEm3r011SrMatdjb5on2Q1rDzJgItTHa9IZ-TMnhz68bP7ITes-J6d8qiWZsdcEOA8qi6VU75qI2WP0zPCqCMvID6ZFzC2_9DdE6TS5tYJaUe2E9BcirtqU6RpHfiIdgoentoc410CIZ7ApSSaLMcphN20TI0OCx8ujCnLdY',
    shortDescription: 'Áo len cashmere oversized ấm áp',
    createdAt: '2024-01-15',
    updatedAt: '2024-02-03',
  },
  {
    id: 'p-4',
    name: 'Quần Lụa Crepe',
    sku: 'ADS-PANT-004',
    categoryId: 'cat-quan',
    categoryName: 'Quần âu',
    price: 7_800_000,
    status: 'Active',
    mainImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCPNAK72W9pnn12Do6af6Hkgea6oi3iNJUR3lVmUjP8UM7X9qT089z8ekNf_H3GY8bis4duervWa0O51VIir1BdojalmQ5Q8jJOyMKRaYhsBcXCk-z1fnqtqwEiZepmNwLY7cuKKy7ONkRit3FROJbX2HvAODzlTh_PHu6HWhJaPjluJPO5nobRwYYptdk0eKJe8MARXw5mBeyGSZH_Qew6y-ZOlVW65wk_7GqBoxq6kB3bBjLRxfyYauGqq8xwZBTEkNeL598HDnj',
    shortDescription: 'Quần lụa crepe dáng suông',
    createdAt: '2024-01-18',
    updatedAt: '2024-02-04',
  },
  {
    id: 'p-5',
    name: 'Khăn Lụa Họa Tiết Monogram',
    sku: 'ADS-SCRF-005',
    categoryId: 'cat-phukien',
    categoryName: 'Phụ kiện',
    price: 3_200_000,
    status: 'Inactive',
    mainImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2R5D8dUl9dAfkRbuFqMqzOfXIy96gioV0jQTE0MwJX-HrSGhcQJsv94Csz3c9h7f4x6_1HEvBOx5xL_jy7yFWbOeaUEvn75KXnDELdYkMo0Z1_jbF1bPpBfgtJ3jgRX_AIwLEds_OV2DZV4DNK4lnpE_xsctnUQIAuTF3xqs4n6PAZjNccUpWlH5_BuoFkchfrNPcuhK_ZFyiRjGXDuT7G0rUjOyL9FmAZk95wFcIJ03N8iXNnB_yfeF3hzbc7zdO2HKE6InH_he',
    shortDescription: 'Khăn lụa in họa tiết monogram',
    createdAt: '2024-01-20',
    updatedAt: '2024-02-05',
  },
]

export const mockInventory: InventoryVariant[] = [
  { id: 'v-1', productId: 'p-1', productName: 'Đầm Suông Lụa Oyster', sku: 'ADS-DRESS-001-S', size: 'S', color: 'Oyster', quantity: 12, lowStockThreshold: 5, isLowStock: false },
  { id: 'v-2', productId: 'p-1', productName: 'Đầm Suông Lụa Oyster', sku: 'ADS-DRESS-001-M', size: 'M', color: 'Oyster', quantity: 3, lowStockThreshold: 5, isLowStock: true },
  { id: 'v-3', productId: 'p-2', productName: 'Áo Blazer May Đo Chính Xác', sku: 'ADS-BLZ-002-M', size: 'M', color: 'Đen', quantity: 8, lowStockThreshold: 5, isLowStock: false },
  { id: 'v-4', productId: 'p-4', productName: 'Quần Lụa Crepe', sku: 'ADS-PANT-004-L', size: 'L', color: 'Ngà', quantity: 2, lowStockThreshold: 5, isLowStock: true },
  { id: 'v-5', productId: 'p-5', productName: 'Khăn Lụa Họa Tiết Monogram', sku: 'ADS-SCRF-005-OS', size: 'One Size', color: 'Trắng', quantity: 24, lowStockThreshold: 8, isLowStock: false },
]

export const mockOrders: Order[] = [
  { id: 'o-1', orderNumber: '#ORD-7742', customerId: 'c-1', customerName: 'Eleanor Campbell', status: 'Completed', paymentStatus: 'Paid', itemCount: 2, total: 8_500_000, createdAt: '2024-02-24', updatedAt: '2024-02-25' },
  { id: 'o-2', orderNumber: '#ORD-7741', customerId: 'c-2', customerName: 'Marcus Beland', status: 'Processing', paymentStatus: 'Paid', itemCount: 3, total: 30_130_000, createdAt: '2024-02-23', updatedAt: '2024-02-23' },
  { id: 'o-3', orderNumber: '#ORD-7740', customerId: 'c-3', customerName: 'Sophia Villiers', status: 'Shipped', paymentStatus: 'Paid', itemCount: 1, total: 2_225_000, createdAt: '2024-02-23', updatedAt: '2024-02-24' },
  { id: 'o-4', orderNumber: '#ORD-7739', customerId: 'c-4', customerName: 'Lucas Dupont', status: 'Cancelled', paymentStatus: 'Refunded', itemCount: 2, total: 13_000_000, createdAt: '2024-02-22', updatedAt: '2024-02-22' },
  { id: 'o-5', orderNumber: '#ORD-7738', customerId: 'c-1', customerName: 'Eleanor Campbell', status: 'Pending', paymentStatus: 'Pending', itemCount: 1, total: 3_200_000, createdAt: '2024-02-21', updatedAt: '2024-02-21' },
  { id: 'o-6', orderNumber: '#ORD-7737', customerId: 'c-2', customerName: 'Marcus Beland', status: 'Shipped', paymentStatus: 'Paid', itemCount: 4, total: 21_400_000, createdAt: '2024-02-20', updatedAt: '2024-02-21' },
]

export const mockCustomers: Customer[] = [
  { id: 'c-1', fullName: 'Eleanor Campbell', email: 'eleanor@example.com', phone: '090 111 2233', tier: 'VIP', totalOrders: 8, totalSpend: 145_000_000, lastPurchase: '12 Th10, 2023', createdAt: '2023-06-01' },
  { id: 'c-2', fullName: 'Marcus Beland', email: 'marcus@example.com', phone: '090 222 3344', tier: 'Regular', totalOrders: 5, totalSpend: 92_500_000, lastPurchase: '05 Th11, 2023', createdAt: '2023-07-15' },
  { id: 'c-3', fullName: 'Sophia Villiers', email: 'sophia@example.com', phone: '090 333 4455', tier: 'VIP', totalOrders: 12, totalSpend: 210_000_000, lastPurchase: '29 Th10, 2023', createdAt: '2023-03-22' },
  { id: 'c-4', fullName: 'Lucas Dupont', email: 'lucas@example.com', phone: '090 444 5566', tier: 'New', totalOrders: 2, totalSpend: 26_000_000, lastPurchase: '14 Th11, 2023', createdAt: '2023-11-08' },
  { id: 'c-5', fullName: 'Clara Laurent', email: 'clara@example.com', phone: '090 555 6677', tier: 'Regular', totalOrders: 6, totalSpend: 64_000_000, lastPurchase: '10 Th11, 2023', createdAt: '2023-08-19' },
  { id: 'c-6', fullName: 'Arthur Pham', email: 'arthur@example.com', phone: '090 666 7788', tier: 'VIP', totalOrders: 15, totalSpend: 320_000_000, lastPurchase: '02 Th11, 2023', createdAt: '2023-02-10' },
]
