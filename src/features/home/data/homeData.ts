import type { NavLink, Product } from '../types/home'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Shop', href: '#' },
  { label: 'Collections', href: '#' },
  { label: 'About', href: '#' },
]

export const newArrivals: Product[] = [
  {
    id: 'oyster-silk-column-dress',
    name: 'Đầm Suông Lụa Oyster',
    price: 31_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqMI63zxpXC7TTarD1Sw0C2iJOGyur-sdhGmLux5iAwxpF-4GP48VvRH_wfW4ARJTMQvLJCV2CIZFPYr0iPADehhL1gVwmSR9aG1HamwxAqiSCNIxeosf4y1Xw6eVGaElA-JvDPK-syU1hgo2oRGqAgevghLmqCFFdGkca5CjZGtYOTITu9x-PZfz5ahrPFzfF7gJnpVkxoZd-6I3dpP-h4HFwuHpV6y0gIjuf4JhMUwPziKRZgKIHmL7NP9MpeLNEZ0rFA47zy6Rg',
    imageAlt: 'Đầm Suông Lụa Oyster',
  },
  {
    id: 'precision-tailored-blazer',
    name: 'Áo Blazer May Đo Chính Xác',
    price: 22_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAeMqOu7cbUC6KzXCb1giRoKAXsrJnGZW5FmL_GQsROzBfADRcXyb-2qA0r062Cqw_U8Rs5_Ek50bu25b67rf8fHY377EGo2M1Q7VeMskHL8TIlembbrAiUYXNgc6oXKXhcyLc44mmnxgEJQwmOmX75TapEfPc_dNJEf678QRZ0UjQmL81WsMvZddeYMup8-QhZMFRAZ7QmyS3uT_hTIBWpj45jQmx8qBbS2o5f5zMrLhbNJryzWzKBdKNDuoHcEdCe-NSBzM3GYIHN',
    imageAlt: 'Áo Blazer May Đo Chính Xác',
  },
  {
    id: 'cashmere-oversized-knit',
    name: 'Áo Len Cashmere Dáng Rộng',
    price: 18_500_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBI14cSjDc-EBPvCzsVXT1UAmzfC_QugEAxcBGhtL31RteTu4Sp5mMFqrL6BGhcVUW80VlmXeugac1kyNrQ5B1YZ3JqOAgEYoiOF3d3mEm3r011SrMatdjb5on2Q1rDzJgItTHa9IZ-TMnhz68bP7ITes-J6d8qiWZsdcEOA8qi6VU75qI2WP0zPCqCMvID6ZFzC2_9DdE6TS5tYJaUe2E9BcirtqU6RpHfiIdgoentoc410CIZ7ApSSaLMcphN20TI0OCx8ujCnLdY',
    imageAlt: 'Áo Len Cashmere Dáng Rộng',
  },
  {
    id: 'the-sculptural-tote',
    name: 'Túi Tote Điêu Khắc',
    price: 45_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuc2wPw-dHVvBCV8PUJA6xO9XbeAE3QCZa40t_vIVKP7EIoaWyggZD1mNQravHneXQVaJtMYen0yvWAs49riMAMZhB0zNq1QoIunRr_klPdCOLLKGiPnAjbhSL9bMQeYlHSJLDeZFXc6cBt44WFPy0iQZe_eEg77Qab9S9KTSBjdnVZTu-45tOwEvHvcdI_jfI8fEGZQ7QlvXWmRGI_FTMC0R13pMvECMF1hTAGqCMRuZOVo4lfdzSbY7pywdH5vaGWfb-zVdV1JBV',
    imageAlt: 'Túi Tote Điêu Khắc',
  },
]

export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBY8kdo6KGUketTAz0KD4YEvOi4FLk-UoWxD80PIwDIGHK2cCLsXf6eCJDKMhbzaiQSHcwmWLCjTFWrWzDAMvNZhCeSqIoT4sFVItkGF-FEBBJEppbDd28gg9l4v-m3Fk1WIOdmLPpShwa60g8SGU-0HCipjCngYdWvxihhvoo_aWQatT99gfiNYxzkRH-CxvTFHxr-gUdPRosGH_2i0Zsz0IVoUopmAgz1NC0AXwLvUq7l8MVKqLP_VKDWJF3LT38-zqK8D_9CuGHv'

export const editorialImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBBvzX1YwVyIK6VLF3pw5nIZizFsTq9IJemhy70NcSy4eEoHt685KB3EE2bwHbL1urWU90FuKNm3JLVp0B7Em1IUmiwFX9qxoEYJqY5O_Be6KwPujLeWFtGw-B_96d0NNfu0Aw-fTWJxQLxD-LFSjTvMi9JCwiayEUPurV51gAfB7hqdB0f49PRExzoj2_gYuh-MxilrX70nD8om8WNMUzq2Gg13pD54v2wwjPyh7I9NaIpx8AE9KV_gW50qqURCku__AEqufQ3NqCs'

export const featuredBrands: string[] = ['Chanel', 'Gucci', 'Prada', 'Saint Laurent', 'Loewe']
