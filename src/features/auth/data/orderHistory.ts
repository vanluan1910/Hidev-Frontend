export type OrderHistoryStatus = 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled'

export interface OrderHistoryItem {
  id: string
  orderNumber: string
  productName: string
  image: string
  imageAlt: string
  date: string
  status: OrderHistoryStatus
  total: number
}

export const orderHistory: OrderHistoryItem[] = [
  {
    id: 'oh-1',
    orderNumber: 'ORD-22948-SLK',
    productName: "L'Horizon Áo Lụa",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoUEpUPrA4wTVXn8LfDewO43psN6FTvXvhct03dt464pZfqzWcPdgGkrNE14Vs18RC1SYHR14lUfKGdcSc2p5kWXk8RUP0weg1ZBhLDu5wZ_iE21Kq_eyj8o_ecytiezOdp4ChMPzQo-PppgdTQbbA9gjHtNtUeM_i8kb_oTKqWSRoThk9c9unyR2ylC_MXL5JjCCxDNfoMI2J1Ws1pxdGNKzkg1OJBzHM9WHGksXylFmjsCBJNjm4tqLlOpKnT10LjkB_GYF06I45',
    imageAlt: "L'Horizon Áo Lụa",
    date: '14 Th11, 2024',
    status: 'Delivered',
    total: 31_000_000,
  },
  {
    id: 'oh-2',
    orderNumber: 'ORD-21045-EVN',
    productName: 'Đầm Dạ Tiệc Midnight Drape',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZWp3Dri_3jGKJzMDDFSCINagX7PTEqcncODzln06RVbXT7b4MSw8920Ol6pgCNw-G0Hr6YJc5okOBE1eYi0ZdWSsQsvViPpFswydLlA23nLgVYYjfWJ7wE0IKRMT-Q2uN3PtOeIOR6AAoowY9Idgx5dNC4PV9bl63cJM2LjZBJRohU8GMfEbRMwYXT2hqd0c_2k1r1_oUh1PxXfUowGcaa2asziHJq2-TXmpiihWm999yOk0wF2RXwXav2eQE9qOkz1f67TiiEmXg',
    imageAlt: 'Đầm Dạ Tiệc Midnight Drape',
    date: '02 Th11, 2024',
    status: 'Shipped',
    total: 96_000_000,
  },
  {
    id: 'oh-3',
    orderNumber: 'ORD-18932-ACC',
    productName: 'Giày Lười Da Lót Lụa',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbflKd9FO8dgpbf_tbmGcMTzZdM4CVfnUqefx4M4Q0r3hyDyuR-GQd1dapFx3sNnnM78vhulJ7oniWRyJ5U3i9JBqJJoINaPtpy5mtz4xm_LHIGJxttdfb5Y4x84cw8Bi7KRvVNd3pvr2s5dtJFMf5sd4VlpPItNUi4wjjxpyaLIV6IJd4ZPqIHltwlatkmFHHbJO3gFxacrID-hSTCEHIK_oDsY01BJiUNHLIEZ2gqGS7j9G9fs92B7wEqokAOHDnc31XVCzuVkjd',
    imageAlt: 'Giày Lười Da Lót Lụa',
    date: '28 Th10, 2024',
    status: 'Processing',
    total: 22_000_000,
  },
]
