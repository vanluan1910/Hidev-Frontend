import { useNavigate } from 'react-router-dom'
import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { AuthFooter } from '../components/AuthFooter'
import { useAuth } from '../hooks/useAuth'
import { loadLastOrder } from '../../checkout/types/order'
import { newArrivals } from '../../home/data/homeData'

const accountNav = [
  { icon: 'person', label: 'Thông tin cá nhân', active: true, to: '/account' },
  { icon: 'receipt_long', label: 'Lịch sử đơn hàng', active: false, to: '/orders' },
  { icon: 'local_shipping', label: 'Địa chỉ', active: false, to: '/account' },
  { icon: 'credit_card', label: 'Thanh toán', active: false, to: '/account' },
]

const preferences = ['Haute Couture', 'Bộ sưu tập giới hạn', 'Đặt trước sàn diễn']

export function AccountPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const lastOrder = loadLastOrder()
  const curated = newArrivals.slice(0, 2)

  function handleLogout() {
    logout()
    navigate('/')
  }

  const fullName = user?.name ?? ''
  const email = user?.email ?? ''
  const initials = fullName
    .split(' ')
    .map((p) => p.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="storefront bg-background text-on-background font-body-md flex flex-col min-h-screen">
      <StorefrontHeader active="home" />

      <div className="flex max-w-screen-2xl mx-auto w-full flex-grow">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col py-8 px-4 bg-surface-container-low border-r border-outline-variant w-64 flex-shrink-0">
          <div className="flex flex-col items-center mb-stack-lg text-center">
            <div className="w-20 h-20 rounded-full mb-4 overflow-hidden bg-surface-container-highest flex items-center justify-center">
              <span className="font-headline-md text-headline-md text-primary">{initials || 'A'}</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary">{fullName}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Thành viên Vàng từ 2021</p>
            <button className="mt-4 px-4 py-2 border border-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors duration-300">
              Ưu đãi thành viên
            </button>
          </div>
          <nav className="flex flex-col gap-unit">
            {accountNav.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.to)}
                className={`flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                  item.active ? 'bg-primary text-on-primary font-medium' : 'text-on-surface-variant hover:bg-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-body-md text-body-md">{item.label}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 text-left text-on-surface-variant hover:bg-surface-variant transition-colors duration-200"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-body-md text-body-md">Đăng xuất</span>
            </button>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-gutter lg:p-stack-lg">
          {/* Welcome header */}
          <section className="mb-section-gap">
            <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-outline-variant pb-8 gap-4">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block mb-2">
                  Chào mừng trở lại
                </span>
                <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary">{fullName}</h1>
                <p className="font-headline-sm text-headline-sm italic text-secondary mt-1">Hạng: Platinum Elite</p>
              </div>
              <div className="text-left md:text-right">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block">Mã thành viên</span>
                <span className="font-price-display text-price-display">ME-883902</span>
              </div>
            </div>
          </section>

          {/* Bento grid */}
          <section className="mb-section-gap grid grid-cols-12 gap-gutter">
            {/* Loyalty */}
            <div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-stack-lg border border-outline-variant relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6">ĐIỂM THƯỞNG</h3>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display-lg text-display-lg">12.450</span>
                    <span className="font-body-sm text-body-sm text-secondary">điểm nữa để lên hạng</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[75%]" />
                  </div>
                  <div className="flex justify-between mt-2 font-label-caps text-[10px]">
                    <span>PLATINUM</span>
                    <span>DIAMOND</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="material-symbols-outlined text-[120px]">stars</span>
              </div>
            </div>

            {/* Active order */}
            <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-stack-lg">
              <h3 className="font-label-caps text-label-caps mb-6 opacity-70">ĐƠN ĐANG XỬ LÝ</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-on-primary/20 pb-4">
                  <div>
                    <p className="font-price-display text-price-display">{lastOrder?.orderNumber ?? '#ORD-2993'}</p>
                    <p className="font-body-sm text-body-sm opacity-70">Đang giao hàng</p>
                  </div>
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/order-confirmation')}
                  className="w-full py-3 border border-on-primary font-label-caps text-label-caps hover:bg-on-primary hover:text-primary transition-all duration-300"
                >
                  THEO DÕI ĐƠN HÀNG
                </button>
              </div>
            </div>
          </section>

          {/* Profile details */}
          <section className="max-w-3xl mx-auto py-stack-lg bg-surface-container-lowest p-gutter md:p-stack-lg border border-outline-variant/50">
            <div className="flex items-center justify-between mb-stack-lg">
              <h2 className="font-headline-md text-headline-md text-primary">Thông Tin Cá Nhân</h2>
              <button className="font-label-caps text-label-caps text-primary border-b border-primary hover:opacity-60 transition-opacity">
                CHỈNH SỬA
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">HỌ VÀ TÊN</label>
                <input className="border-0 border-b border-outline-variant bg-transparent font-headline-sm text-headline-sm py-2 focus:outline-none" readOnly value={fullName} />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">EMAIL</label>
                <input className="border-0 border-b border-outline-variant bg-transparent font-headline-sm text-headline-sm py-2 focus:outline-none" readOnly value={email} />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">SỐ ĐIỆN THOẠI</label>
                <input className="border-0 border-b border-outline-variant bg-transparent font-headline-sm text-headline-sm py-2 focus:outline-none" readOnly value="+84 (28) 0123-456" />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">NGÀY SINH</label>
                <input className="border-0 border-b border-outline-variant bg-transparent font-headline-sm text-headline-sm py-2 focus:outline-none" readOnly value="12 Tháng 12, 1990" />
              </div>
            </div>
            <div className="pt-8 mt-10 border-t border-outline-variant/30">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6">SỞ THÍCH</h3>
              <div className="flex flex-wrap gap-4">
                {preferences.map((pref) => (
                  <span key={pref} className="px-6 py-2 bg-surface-container border border-outline-variant font-body-sm text-body-sm">
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Curated for you */}
          <section className="mt-section-gap">
            <h2 className="font-headline-md text-headline-md text-center mb-10">Gợi Ý Dành Cho Bạn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              {curated.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="relative aspect-[4/5] bg-surface-container overflow-hidden group text-left"
                >
                  <img
                    alt={product.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={product.image}
                  />
                  <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/40 to-transparent">
                    <p className="font-label-caps text-label-caps text-white mb-2">GỢI Ý</p>
                    <h4 className="font-headline-md text-headline-md text-white">{product.name}</h4>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>

      <AuthFooter />
    </div>
  )
}
