import type { ShopCategory, ShopColor, ShopProduct, ShopSize } from '../types/shop'

export const categories: ShopCategory[] = [
  { label: 'Tất cả trang phục', active: true },
  { label: 'Đầm', },
  { label: 'Áo lụa' },
  { label: 'Quần âu' },
  { label: 'Phụ kiện' },
]

export const sizes: ShopSize[] = [
  { label: 'XS' },
  { label: 'S', active: true },
  { label: 'M' },
  { label: 'L' },
]

export const colors: ShopColor[] = [
  { name: 'Trắng', hex: '#FFFFFF' },
  { name: 'Đen', hex: '#111827' },
  { name: 'Be', hex: '#F5F5DC' },
  { name: 'Bạch kim', hex: '#E5E4E2' },
  { name: 'Xám đá', hex: '#2F4F4F' },
]

export const priceRange = {
  min: 1_000_000,
  max: 50_000_000,
  step: 500_000,
  selectedMax: 25_000_000,
}

export const totalProducts = 48
export const visibleProducts = 12

export const products: ShopProduct[] = [
  {
    id: 'ethereal-silk-slip-dress',
    name: 'Đầm Lụa Mỏng Thanh Thoát',
    price: 8_500_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCul7iEhpTRifNcVdYC0z_ue7x041AhMDLcDwt2RRlxQrCMcwbstE43xZmjhuIwe9xgUYe3guhrKN2YjjgYJzEwFaBW9dsBfIo4DWrbPL6ytZSh5MA54ADJN5m-lfk_MFcpRF8FkrwyPoK8rO2loCnFXcF-r-bOzCkz3ZV9xhk-r8TImpd8SaqJCSiSSvoHe1PSkVzH0poCT0ZOLO_ZrdAGapdT75omXsxnJHSaw_ceP-x5kskcoG6H52aMx7-p6EA12NZ8J0DVxdYs',
    imageAlt: 'Đầm Lụa Mỏng Thanh Thoát',
  },
  {
    id: 'tailored-silk-blazer',
    name: 'Áo Blazer Lụa May Đo',
    price: 12_200_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLzy-jGtqm76FeKip6qir6B47V3QJQSEladW_qd0m0MiqLErxxiEgIboU_fMSfOjCU5e2zeqR8n3dYf5AtkfliVw-01jzh01bf50uEWUOQyMv8NY7X8YLBm6RDgP94q1H14WfvlPmKmYanNPvmj0Oz3ALwBEZAWU4h25cU39HYRzHtDAj6h85A1-8RFs1cKU797rYymFq2vchhBuSx0rzvQNU59hpLOG4UEnbxs4a2eBZgjGUBVbE11gIgKMbNlSNez8AB_aKWJcN_',
    imageAlt: 'Áo Blazer Lụa May Đo',
  },
  {
    id: 'cashmere-blend-knit',
    name: 'Áo Len Pha Cashmere',
    price: 6_900_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJMvpLwonnxDcsRyE6sopFd90LGQTJdxfklnBBjD7M-GtS1GB2LwFCAmwtOeD4FJ8yME5jTRkFaFu9YybrB6K5XC4yos9BkSbAg7kegVOBpfeIpGWWETCOuKtCSgHJT8axndBO9rbujJ92ZJT4p7aMtQuMZKLK7UfrfPPtoiv9S-jABk0EqDBnTk1CA1z0i3_c1moMUM7FixDPQORC2KpFv7HtaYUGgJ8TxFcmeYAjR0GWdG_EzfARV1zrbffdA6HAqqHptPHA5Dzr',
    imageAlt: 'Áo Len Pha Cashmere',
  },
  {
    id: 'crepe-silk-trousers',
    name: 'Quần Lụa Crepe',
    price: 7_800_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCPNAK72W9pnn12Do6af6Hkgea6oi3iNJUR3lVmUjP8UM7X9qT089z8ekNf_H3GY8bis4duervWa0O51VIir1BdojalmQ5Q8jJOyMKRaYhsBcXCk-z1fnqtqwEiZepmNwLY7cuKKy7ONkRit3FROJbX2HvAODzlTh_PHu6HWhJaPjluJPO5nobRwYYptdk0eKJe8MARXw5mBeyGSZH_Qew6y-ZOlVW65wk_7GqBoxq6kB3bBjLRxfyYauGqq8xwZBTEkNeL598HDnj',
    imageAlt: 'Quần Lụa Crepe',
  },
  {
    id: 'sage-silk-wrap-top',
    name: 'Áo Lụa Quấn Màu Xanh Sage',
    price: 5_500_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAS4ZoYqduXVqU23SjPi6Tj8TXvl9xxcY4hzDUnX5ObiX9WvXxuMk1aUImyila6PvRWOH5j2NS3cYwjs4D-1pfu0u6JscL0PiRyGUfBVHThRQBKIaTAHt5WX4YYBWX0uwDiflWGSZ3zEMo7jPx9CMz3BZ_4LPaFyvl5B1KrItRFlTclJH00sFWM2qwfekcximsFn1Q8f3IN_BiUGlWSt7mDDlYHP6sFwKaCmHOZklv7xVu4cmLAutRLEmwj8nSADs1RNncBc1bwsHLi',
    imageAlt: 'Áo Lụa Quấn Màu Xanh Sage',
  },
  {
    id: 'monogram-silk-scarf',
    name: 'Khăn Lụa Họa Tiết Monogram',
    price: 3_200_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2R5D8dUl9dAfkRbuFqMqzOfXIy96gioV0jQTE0MwJX-HrSGhcQJsv94Csz3c9h7f4x6_1HEvBOx5xL_jy7yFWbOeaUEvn75KXnDELdYkMo0Z1_jbF1bPpBfgtJ3jgRX_AIwLEds_OV2DZV4DNK4lnpE_xsctnUQIAuTF3xqs4n6PAZjNccUpWlH5_BuoFkchfrNPcuhK_ZFyiRjGXDuT7G0rUjOyL9FmAZk95wFcIJ03N8iXNnB_yfeF3hzbc7zdO2HKE6InH_he',
    imageAlt: 'Khăn Lụa Họa Tiết Monogram',
  },
]
