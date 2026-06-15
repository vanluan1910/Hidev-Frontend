import type { CartItem, PaymentMethod } from '../types/cart'

export const initialCartItems: CartItem[] = [
  {
    id: 'heritage-silk-blouse',
    name: 'Áo Lụa Heritage',
    color: 'Champagne',
    size: 'FR 38',
    price: 10_500_000,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCulPThMa1zQEwWORb2iN-ZU89EBKd1dhj319lTbF43lrjfJinMws44pG57VkjZ_QGiAMNQFDjNs9RXwV0iiU3GUmyV3MogEqMhM3mg0BNXYroe8bpgbhG3pgidZj2y-LaGWt90Th1xoWXxa_BDfl8YpIx1kVxFZAHnutULie9ER5qDZEzFd6rkPhFTQs99YgsUjRGYHn4fbTocl56GrqHWO1wPO4UtoIL9TK_gvxlVt8af0fAtJmrWdeO9AG1v6zVaTVwC6dhxeM-L',
    imageAlt: 'Áo Lụa Heritage',
  },
  {
    id: 'tailored-virgin-wool-trousers',
    name: 'Quần Len Nguyên Chất May Đo',
    color: 'Xám than',
    size: 'FR 40',
    price: 14_500_000,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfY6E1HcY4DVqF5oqn34_qlUCMI-BPVS7U7rG-ECIaMYMjvbfegVmvX9m2P4FjZ5OGdM4Rvod7C7EyKOwRQzJB_hBMe40qqs0E1z5nHFkrs9tKHVv9ay0-VLDndzjSPR3EKV_K3gcvImsCXRomJGeKsXGwChrgKLvjrMYcL1pZ2Wp9b7uahHTOAKFuww_rnFXT0fsQXqdY092uT6HLpZnAlYX8ILVnJ-DQKi63eIYh9mq9n4mJnNx-VIcDCKFL3xl2vtFYtztjg525',
    imageAlt: 'Quần Len Nguyên Chất May Đo',
  },
]

export const paymentMethods: PaymentMethod[] = [
  {
    name: 'Visa',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAixhSPOKAGDCFqzDX8omWfw2AkJSqDjWxPI4VFXsQsvEYhPHFSq_rmSn_XOIs3kqZganqtbVI37nCuNvmEXYYoFoVS7kFaZgAcclTVyEEE2WN-NEEZ1toxaPgNTv8zQ-dHiBWMLQpE2Jn9tIRuC4kK6M5FPrh-JDZtsZHIih2krSnqZc23BRvluCSHSt915TN3SlkBtlen7Cca519wXmc8MwIS9x88KvK2JpXnwg5H8oBSiAT5IzVewAwcl5WV-KSpvNdLoaMAiR2q',
  },
  {
    name: 'Mastercard',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGrYCQ4WRVxpfw2EPQUwvlwsyGfEkbWjUZsL7wvkSLJjQ_xUClOb8ol4W28pZsWgMAHeuenyQyqdx1ccOdIkojGi4f67gWLct07fMb3wEDDM8F9fEvsVpUJP3IgNCpXZivHtQo8Id04MMwO5ChBGexcs5hHO-8dkmq5DiEWIQ4SpVEeQFp6Re1Xwd-QYwhh1FgeyCv6cocJk94VUDStHQpf3M7wBrgWcgIrq3fiHyKPYI7JFoSJzrbckJNKEL6nNf0GFnBbTIPDGsr',
  },
  {
    name: 'Paypal',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM4wkx_vmBAZDhdZCqoKS7DfvbhO4HH4gol6IhIFpxuDyrc6Uf5SfxUj0P_UyUtwQtj7SB8EdSMApTv7rrwzV-PGCH1qK8bWejUcBSardpLt3ZKWUUi83FfKzlCnigKcki4yebe5jDVBWXDP8CS9Ht9yugMdMlFqEVtapABLx2cHGQ_IAaDVQ_cZAw14Qbp2Nz2DbDvGIvttyXBy1VthMX3W9Yhswvu98bL36_F_UsFTwlm7_wjQXLMvuSCto9DxQRMB3bbgx0SyMA',
  },
]
