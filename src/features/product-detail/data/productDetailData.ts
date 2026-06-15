import type { ProductDetail, RelatedProduct } from '../types/productDetail'

export const product: ProductDetail = {
  id: 'structured-wool-overcoat',
  collection: 'BỘ SƯU TẬP THU ĐÔNG 2024',
  name: 'Áo Khoác Dạ Cấu Trúc',
  price: 31_000_000,
  description:
    'Một kiệt tác của sự sang trọng kín đáo. Chiếc áo khoác được may từ len Ý nặng tay, tuyển chọn có trách nhiệm, cùng lớp lót lụa đặc trưng. Thiết kế tạo nên dáng vẻ sắc nét, đậm chất kiến trúc và vượt thời gian.',
  images: [
    {
      thumb:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA7hqbPW8gDMPSj8CKssBX5kM75VhrYUoU4twjkJoQpoOMsddp1FtrwXASPobrTVjpRuOyOUbMkuIMMdaai95QDOjfyQy4kGRusoyGNDLp1ZRFqjWUp0jz7B1Zl_8VuiToeEAD6Hdc-4Cj_d0Fbk-ePIE6byQMrPkRH_vPcGwgA1aYX4dPSRiHy13QLrUpMwGQagnyfS50hVUnyDC12zeGPq1XwzKo6UEt5bF1itYmsc6ErGxEspFGHzo7eZLdjgyIcSQ1zLoEqJ2bg',
      full: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=2574&auto=format&fit=crop',
      alt: 'Close up of a luxury charcoal wool coat fabric showing fine weave and premium quality.',
    },
    {
      thumb:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2C-4qGs0panxRdfyTMA5tno1iGtm_IhfBCUAHTM8Do5GYZgYPQMY2j9lvBbYgNM2EvxFq_XUWsRA3RCPihZZzlkLLWDZTp2z-kJtQTu2sMhqo2YvJdH8wSXj6Hf3u7DSaP_wTtIfWuWSuxWuzUN_B680616rURL3m5nOeoD-lBs3Q1FQ6oSYxHVFthqjxniHpW-0uxDi6-Mc_bbTWSawRzYppwNgdAAfEz-p8NPMisXV2diA0DrisVPHKEhomxkBohMLxJaz-9EEG',
      full: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=2574&auto=format&fit=crop',
      alt: 'Side profile of a minimalist wool coat on a model, showcasing the elegant drape and silhouette.',
    },
    {
      thumb:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDbfI5nrZonpJCkO8fPavV1f-oFJHnsMp7gGw6dF3OakRPKNA_Zb7KzHL9taoW055vWCdIIbRA_k_N6t9DllvpMAyD75xlgjOZbImuVoFt5d99j8GSrSkpvXDXYGG51ZQ5XT2jn0bOU-ldPHLHeuFqmTno8qHrqcgcYkrbo96LbNU17RoXxu6C7Gj6O7TseaNJavfwwf0Qr7fqguPSuUx9HZuh25JM13Rdw6Ky-nuGL6_TdZJu6BhRvRBelIORlHBwa5v_YCmR5BfXO',
      full: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2672&auto=format&fit=crop',
      alt: 'Detail shot of the buttons and stitching on a high-end designer wool coat.',
    },
    {
      thumb:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCJLA0hYkirRbr2g53jsVnQuUTf2j8zsrY6HnALAAflL1oy1B_yNtqY5QFwn7aesOV_NCwCOFG5JvFcW5j3sVNMl3EzO8TpOwdyfd2IUz2HgRGJO_hfGz3oNsLMefr0czpl7fwYo0lNeUElF06NqCIkwTIXmT34dSPjfa0SMXgd-lq-e9jjMpr-Ud9-fRsVmSuQ2p_M6MvIleQ1uxe34GDH1fnlLmFc-6ui2_m8DFSM0fM98jYNhom8NNmyezCkYGOR3JVmZijG7V1Z',
      full: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=2671&auto=format&fit=crop',
      alt: 'Back view of a long grey wool coat illustrating the clean lines and tailored fit.',
    },
  ],
  colors: [
    { name: 'ĐEN', hex: '#000000' },
    { name: 'XÁM THAN', hex: '#4A4A4A' },
    { name: 'TRẮNG NGÀ', hex: '#E5E4E2' },
  ],
  sizes: ['XS', 'S', 'M', 'L'],
  accordions: [
    {
      id: 'details',
      title: 'CHI TIẾT SẢN PHẨM',
      body: [
        '100% len nguyên chất, tuyển chọn có trách nhiệm từ Biella, Ý.',
        'Lớp lót 100% lụa cùng tông màu.',
        'Ve áo nhọn và khuy cài ba nút ẩn.',
        'Chỉ giặt khô bởi chuyên gia.',
      ],
    },
    {
      id: 'shipping',
      title: 'VẬN CHUYỂN & ĐỔI TRẢ',
      body: [
        'Miễn phí vận chuyển toàn cầu cho đơn hàng trên 12.000.000₫.',
        'Chấp nhận đổi trả trong vòng 14 ngày kể từ khi nhận hàng với sản phẩm chưa sử dụng và còn nguyên tem mác.',
        'Đổi hàng hoàn toàn miễn phí.',
      ],
    },
  ],
}

export const relatedProducts: RelatedProduct[] = [
  {
    id: 'pleated-silk-trousers',
    name: 'Quần Lụa Xếp Ly',
    price: 17_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOJQ26fkzfn46Xuuwsj8cT7xCn8kmdcSUTiUSBAs-5u0qPVEg8xKumLMIy_LIXeTbSidhhKxQEuE1Y7dAZeq8tlEbovFtKEW8hFmlxS2-sOqIhQW2ZZRdOZ5qaxTYjcAgfpXajUGx4r8JUTjaLszsLsnmmYw3ogf5KB5PQ_b24e5q9bvPjsEc_rDqgvZFhuZBb-9-aXtPaMH6942bWPj6eN3v_PlP2VRGf4ajIkc8IrBh-l9QXNCmTvzJVW6KFxeT_zG3fUXL9OxHz',
    imageAlt: 'Pleated Silk Trousers',
  },
  {
    id: 'minimalist-silk-blouse',
    name: 'Áo Lụa Tối Giản',
    price: 11_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAU6-GKcoAw94EB2apvc1xguzLvOiXeSEW3FqKgdG17Pp5IrHN4vPyHKxeJKCI-6ilqCWA_AiV8NktxZ5fOt9BxfajbrFZowjgoP1M2Sbe8AMsa3FiNfjrVhNqOBS7sMxvH7EZI4nDQpf1rAxSFSQnkyxV5kVomhFVyTboDJJFYw6qcQjYUZjGZ-7fZSxCYWkWGqnpxV1Ng3klnm6Ix1NYKmavluHqSxfDlvnX2Z7T8wdnp9DKinUnYOog-rffY1HnGJlB48JOLBLSW',
    imageAlt: 'Minimalist Silk Blouse',
  },
  {
    id: 'pointed-leather-boot',
    name: 'Bốt Da Mũi Nhọn',
    price: 22_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHUFL6Gp2j5MQpaqrskvSBRzHWJVjnpK8I9LF7z2NvWqzC3crsv2NDthH6cbLRBvfwX-YuACRgZ12pGbKRUt9UXVHsVIQUDhzR3k4FdnGBTMQYMF4SxpsbyqJALziUzdPyR7NqOrjQi6jM3gNzZfPVNAoCvVLbIxv8WrXvVDxa609hR6aQX1L3F0GOCUUeF1BjfF02bN4L6AQeGC4yQjtJ4E83mh7FxMhuRZqpwUz5kdGsHkS40e0xsfXKwHrEJTG_YwYZD4oKAPJh',
    imageAlt: 'Pointed Leather Boot',
  },
  {
    id: 'ribbed-cashmere-scarf',
    name: 'Khăn Cashmere Dệt Sọc',
    price: 8_000_000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEiw8mgaoz8HUyo_ocaEmUi5z7GzLwElmCe2lHlxbgKy4KbGUSmwEmzKKu6uDcVzXsKaymVtgIzjLHYTgoP9xAs250Bb6cpd8zuxqWi6fQWOpM03Vt5whnOwvTmUVmYEho3WdaGPbRBGa7xmNyllQsWnhJKPc-pA0PCcBX4vToFpdxz6UVaQUjx2Hroj6-LXp8xEEDRSs_OoPo7RMeMPh-s2axJSDYkPPJmruJWAUSxSlXgsxl622SBABFj_LYICoRJTKEQZJRtaSi',
    imageAlt: 'Ribbed Cashmere Scarf',
  },
]
