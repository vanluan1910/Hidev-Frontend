import { useNavigate } from 'react-router-dom'
import { StorefrontHeader } from '../../../shared/components/StorefrontHeader'
import { AuthFooter } from '../components/AuthFooter'
import { useAuth } from '../hooks/useAuth'
import { formatVnd } from '../../../shared/utils/money'
import { orderHistory } from '../data/orderHistory'
import type { OrderHistoryStatus } from '../data/orderHistory'

const statusLabel: Record<OrderHistoryStatus, string> = {
  Delivered: 'Đã giao',
  Shipped: 'Đang giao',
  Processing: 'Đang xử lý',
  Cancelled: 'Đã hủy',
}
const statusDot: Record<OrderHistoryStatus, string> = {
  Delivered: 'bg-green-500',
  Shipped: 'bg-primary',
  Processing: 'bg-outline',
  Cancelled: 'bg-error',
}
const statusBg: Record<OrderHistoryStatus, string> = {
  Delivered: 'bg-surface-container text-on-secondary-container',
  Shipped: 'bg-primary-container text-on-primary-container',
  Processing: 'bg-secondary-container text-on-secondary-fixed-variant',
  Cancelled: 'bg-error-container text-on-error-container',
}

const sideNav = [
  { icon: 'person', label: 'Thông tin cá nhân', to: '/account' },
  { icon: 'receipt_long', label: 'Lịch sử đơn hàng', to: '/orders', active: true },
  { icon: 'location_on', label: 'Địa chỉ', to: '/account' },
  { icon: 'settings', label: 'Tùy chọn', to: '/account' },
]

export function OrderHistoryPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="storefront bg-background text-on-surface font-body-md flex flex-col min-h-screen">
      <StorefrontHeader active="home" />

      <div className="flex max-w-screen-2xl mx-auto w-full flex-grow">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 flex-shrink-0 bg-surface-container-low border-r border-outline-variant py-section-gap">
          <div className="px-8 mb-12">
            <h2 className="font-headline-sm text-headline-sm text-primary">{user?.name ?? 'Tài khoản'}</h2>
            <p className="font-label-caps text-label-caps text-secondary opacity-70">Thành viên thân thiết</p>
          </div>
          <nav className="flex flex-col flex-1">
            {sideNav.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.to)}
                className={`flex items-center gap-4 py-4 pl-4 text-left duration-200 ease-linear font-label-caps text-label-caps transition-colors ${
                  item.active
                    ? 'text-primary font-bold border-l-2 border-primary'
                    : 'text-secondary hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 px-container-padding lg:px-16 py-12">
          <header className="mb-12">
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary mb-2">Lịch Sử Đơn Hàng</h1>
            <p className="font-body-md text-secondary max-w-xl">
              Xem lại và theo dõi những sản phẩm bạn đã chọn từ Aura de Soie. Mỗi món đồ là một hành trình của lụa và sự
              tinh xảo.
            </p>
          </header>

          {orderHistory.length === 0 ? (
            <div className="flex flex-col items-center text-center p-12 bg-surface-container-lowest border border-outline-variant">
              <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">receipt_long</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Chưa có đơn hàng nào</h4>
              <p className="font-body-md text-secondary mb-6 max-w-sm">Khám phá bộ sưu tập và bắt đầu hành trình mua sắm của bạn.</p>
              <button
                type="button"
                onClick={() => navigate('/shop')}
                className="border border-primary px-8 py-3 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-all"
              >
                Mua sắm ngay
              </button>
            </div>
          ) : (
            <div className="space-y-stack-lg">
              {/* Header row */}
              <div className="hidden lg:grid grid-cols-6 border-b border-outline-variant pb-4 font-label-caps text-label-caps text-outline tracking-widest px-4">
                <div className="col-span-2">Đơn & Sản phẩm</div>
                <div>Ngày</div>
                <div>Trạng thái</div>
                <div>Tổng</div>
                <div className="text-right">Thao tác</div>
              </div>

              {orderHistory.map((order) => (
                <div
                  key={order.id}
                  className="group bg-surface-container-lowest transition-all duration-300 grid grid-cols-1 lg:grid-cols-6 items-center p-4 lg:p-6 border border-transparent hover:border-outline-variant"
                >
                  <div className="col-span-2 flex items-center gap-6">
                    <div className="w-20 h-24 bg-surface-dim overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover" alt={order.imageAlt} src={order.image} />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-secondary mb-1">{order.orderNumber}</p>
                      <h3 className="font-headline-sm text-headline-sm text-primary leading-tight">{order.productName}</h3>
                      <p className="font-body-sm text-secondary lg:hidden">
                        {statusLabel[order.status]} • {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block font-body-md text-secondary">{order.date}</div>
                  <div className="hidden lg:block">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-label-caps text-[10px] ${statusBg[order.status]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[order.status]}`} />
                      {statusLabel[order.status].toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden lg:block font-price-display text-primary">{formatVnd(order.total)}</div>
                  <div className="flex justify-between lg:justify-end items-center mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-outline-variant">
                    <div className="lg:hidden">
                      <p className="font-price-display text-primary">{formatVnd(order.total)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/order-confirmation')}
                      className="font-label-caps text-label-caps text-primary tracking-widest border-b border-transparent hover:border-primary transition-all"
                    >
                      XEM CHI TIẾT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Concierge */}
          <div className="mt-section-gap flex flex-col items-center text-center p-12 bg-surface-container-lowest border border-outline-variant">
            <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">support_agent</span>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Cần tìm đơn hàng cũ?</h4>
            <p className="font-body-md text-secondary mb-6 max-w-sm">
              Truy cập chi tiết các đơn đặt may riêng hoặc đơn hàng trước 2023 thông qua bộ phận hỗ trợ.
            </p>
            <button className="border border-primary px-8 py-3 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-all">
              LIÊN HỆ HỖ TRỢ
            </button>
          </div>
        </main>
      </div>

      <AuthFooter />
    </div>
  )
}
