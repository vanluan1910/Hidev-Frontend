import { useMemo, useState } from 'react'
import { AdminBadge } from '../../../shared/components/AdminBadge'
import { formatVnd } from '../../../shared/utils/money'
import { mockOrders } from '../../dashboard/data/adminMockData'
import type { Order, OrderStatus, PaymentStatus } from '../types/order'

const statusLabel: Record<OrderStatus, string> = {
  Pending: 'Chờ xử lý',
  Processing: 'Đang xử lý',
  Shipped: 'Đang giao',
  Completed: 'Hoàn tất',
  Cancelled: 'Đã hủy',
}
const statusTone: Record<OrderStatus, 'good' | 'info' | 'warn' | 'error' | 'neutral'> = {
  Pending: 'warn',
  Processing: 'warn',
  Shipped: 'info',
  Completed: 'good',
  Cancelled: 'neutral',
}

const paymentLabel: Record<PaymentStatus, string> = {
  Paid: 'Đã thanh toán',
  Pending: 'Chờ thanh toán',
  Refunded: 'Đã hoàn tiền',
}
const paymentTone: Record<PaymentStatus, 'good' | 'warn' | 'error'> = {
  Paid: 'good',
  Pending: 'warn',
  Refunded: 'error',
}

type Tab = 'All' | OrderStatus
const tabs: Array<{ key: Tab; label: string }> = [
  { key: 'All', label: 'Tất cả' },
  { key: 'Pending', label: 'Chờ xử lý' },
  { key: 'Processing', label: 'Đang xử lý' },
  { key: 'Shipped', label: 'Đang giao' },
  { key: 'Cancelled', label: 'Đã hủy' },
]

const PAGE_SIZE = 5

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [tab, setTab] = useState<Tab>('All')
  const [page, setPage] = useState(1)

  const stats = useMemo(() => {
    const total = orders.length
    const pending = orders.filter((o) => o.status === 'Pending').length
    const revenue = orders.filter((o) => o.paymentStatus === 'Paid').reduce((sum, o) => sum + o.total, 0)
    const avg = total > 0 ? Math.round(orders.reduce((sum, o) => sum + o.total, 0) / total) : 0
    return { total, pending, revenue, avg }
  }, [orders])

  const filtered = useMemo(() => {
    if (tab === 'All') return orders
    return orders.filter((o) => o.status === tab)
  }, [orders, tab])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function changeTab(next: Tab) {
    setTab(next)
    setPage(1)
  }

  function cycleStatus(order: Order) {
    const order_seq: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Completed']
    const idx = order_seq.indexOf(order.status)
    const next = order_seq[(idx + 1) % order_seq.length]
    setOrders((prev) => prev.map((o) => (o.id === order.id ? { ...o, status: next } : o)))
  }

  const statCards = [
    { label: 'TỔNG ĐƠN HÀNG', value: String(stats.total), note: 'Tất cả thời gian', tone: 'muted' as const },
    { label: 'CHỜ XỬ LÝ', value: String(stats.pending), note: 'Cần chú ý', tone: 'muted' as const },
    { label: 'TỔNG DOANH THU', value: formatVnd(stats.revenue), note: 'Đơn đã thanh toán', tone: 'good' as const },
    { label: 'GIÁ TRỊ ĐƠN TB', value: formatVnd(stats.avg), note: 'Ổn định', tone: 'muted' as const },
  ]

  return (
    <div className="space-y-stack-lg">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {statCards.map((card) => (
          <div key={card.label} className="bg-surface-container-lowest p-stack-md border border-outline-variant">
            <p className="font-label-caps text-label-caps text-secondary">{card.label}</p>
            <p className="font-headline-md text-headline-md mt-1">{card.value}</p>
            <p className={`text-[11px] mt-1 ${card.tone === 'good' ? 'text-green-600' : 'text-secondary'}`}>{card.note}</p>
          </div>
        ))}
      </div>

      {/* Order table */}
      <section className="bg-surface-container-lowest border border-outline-variant">
        <div className="border-b border-outline-variant p-stack-md flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => changeTab(t.key)}
                className={`px-4 py-2 font-label-caps text-label-caps transition-colors whitespace-nowrap ${
                  tab === t.key ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-4 font-label-caps text-[11px] text-secondary">MÃ ĐƠN</th>
                <th className="p-4 font-label-caps text-[11px] text-secondary">KHÁCH HÀNG</th>
                <th className="p-4 font-label-caps text-[11px] text-secondary">SỐ MÓN</th>
                <th className="p-4 font-label-caps text-[11px] text-secondary">NGÀY</th>
                <th className="p-4 font-label-caps text-[11px] text-secondary text-center">THANH TOÁN</th>
                <th className="p-4 font-label-caps text-[11px] text-secondary text-center">VẬN CHUYỂN</th>
                <th className="p-4 font-label-caps text-[11px] text-secondary text-right">TỔNG</th>
                <th className="p-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {pageItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-10 text-center text-body-md text-secondary">
                    Không có đơn hàng.
                  </td>
                </tr>
              ) : (
                pageItems.map((order) => (
                  <tr key={order.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-label-caps font-bold">{order.orderNumber}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center mr-3">
                          <span className="font-label-caps text-[10px]">{initials(order.customerName)}</span>
                        </div>
                        <span className="font-body-sm font-medium">{order.customerName}</span>
                      </div>
                    </td>
                    <td className="p-4 font-body-sm text-secondary">{order.itemCount} món</td>
                    <td className="p-4 font-body-sm">{order.createdAt}</td>
                    <td className="p-4 text-center">
                      <AdminBadge label={paymentLabel[order.paymentStatus]} tone={paymentTone[order.paymentStatus]} />
                    </td>
                    <td className="p-4 text-center">
                      <AdminBadge label={statusLabel[order.status]} tone={statusTone[order.status]} />
                    </td>
                    <td className="p-4 font-price-display text-right text-sm">{formatVnd(order.total)}</td>
                    <td className="p-4 text-right">
                      <button
                        type="button"
                        onClick={() => cycleStatus(order)}
                        className="material-symbols-outlined text-secondary hover:text-primary transition-colors"
                        aria-label="Chuyển trạng thái"
                        title="Chuyển trạng thái tiếp theo"
                      >
                        autorenew
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-stack-md border-t border-outline-variant flex items-center justify-between">
          <span className="font-body-sm text-secondary text-[12px]">
            Hiển thị {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
            {Math.min(currentPage * PAGE_SIZE, filtered.length)} trong {filtered.length} kết quả
          </span>
          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center border border-outline-variant text-secondary hover:bg-surface-variant disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang trước"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-8 h-8 flex items-center justify-center border font-label-caps text-[10px] ${
                  n === currentPage ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant hover:bg-surface-variant'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center border border-outline-variant text-secondary hover:bg-surface-variant disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang sau"
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 relative h-80 overflow-hidden bg-primary-container">
          <img
            alt="Trang phục cao cấp"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnytvjsI7RvYvq0e1FCpQZwcu2yWxbvO46LDgLhKROjWaVQf0Dweyfuqpg6c2uLvIuMyymvBNI7GgKF6Oy40EDJUpRM7fI9SzU2BiXLbM0p2v-VVY5eyeKeN6kxsKMROKDn1m5LqXzoKmYcnacl-aJTQTTwzWLQJzruv74T-_d7Syh7v7nAaqmSyaa1Rvd3ZVBGDPWa7i2HKyMYqV26_3Md0TtjYworoCkeZTLNCpeJXIxgW4L8_YPKRlfQbmhL2Mk7o8uDI-g8sji"
          />
          <div className="absolute inset-0 p-container-padding flex flex-col justify-end">
            <h3 className="font-display-lg text-white mb-2">Điểm Nhấn Tồn Kho</h3>
            <p className="text-white/80 font-body-md max-w-md">
              Tồn kho bộ sưu tập lụa đang ở mức thấp. Hãy xem lại chiến lược nhập hàng cho mùa lễ sắp tới.
            </p>
          </div>
        </div>
        <div className="bg-surface-container p-container-padding border border-outline-variant flex flex-col justify-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">insights</span>
          <h4 className="font-headline-sm mb-2">Phân Tích Tự Động</h4>
          <p className="font-body-sm text-secondary mb-6">
            Mô hình dự đoán cho thấy lượng đơn nhóm "Áo khoác" có thể tăng 15% trong 14 ngày tới.
          </p>
          <a className="font-label-caps text-label-caps text-primary underline underline-offset-4" href="#">
            Xem báo cáo dự đoán
          </a>
        </div>
      </section>
    </div>
  )
}
