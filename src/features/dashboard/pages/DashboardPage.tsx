import { dashboardMetrics, dashboardRecentOrders } from '../data/dashboardData'
import type { DashboardMetric, DashboardOrder } from '../data/dashboardData'

const trendStyles: Record<DashboardMetric['trend'], { icon: string; className: string }> = {
  up: { icon: 'trending_up', className: 'text-emerald-600' },
  down: { icon: 'trending_down', className: 'text-red-600' },
  flat: { icon: 'trending_flat', className: 'text-secondary' },
}

const statusStyles: Record<DashboardOrder['status'], string> = {
  'Đã giao': 'bg-emerald-100 text-emerald-800',
  'Đang giao': 'bg-emerald-100 text-emerald-800',
  'Đang xử lý': 'bg-surface-variant text-primary',
  'Đã hủy': 'bg-red-100 text-red-800',
}

export function DashboardPage() {
  return (
    <div className="admin-dashboard space-y-stack-lg">
      {/* Key Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {dashboardMetrics.map((metric) => {
          const trend = trendStyles[metric.trend]
          return (
            <div
              key={metric.label}
              className="bg-surface-container-lowest p-stack-lg border border-outline-variant hover:shadow-sm transition-shadow"
            >
              <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">
                {metric.label}
              </p>
              <h2 className="font-headline-md text-headline-md text-primary">{metric.value}</h2>
              <div className={`mt-4 flex items-center gap-2 ${trend.className}`}>
                <span className="material-symbols-outlined text-[16px]">{trend.icon}</span>
                <span className="text-body-sm font-medium">{metric.changeLabel}</span>
                <span className="text-body-sm text-secondary opacity-60">{metric.changeNote}</span>
              </div>
            </div>
          )
        })}
      </section>

      {/* Sales Trend Chart */}
      <section className="bg-surface-container-lowest border border-outline-variant p-stack-lg">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-1">Xu Hướng Doanh Thu</h3>
            <p className="font-body-sm text-body-sm text-secondary">Hiệu suất theo ngày trong 30 ngày qua</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 border border-outline text-label-caps font-bold text-primary hover:bg-surface-container transition-colors">
              7N
            </button>
            <button className="px-4 py-1.5 bg-primary text-on-primary text-label-caps font-bold transition-opacity hover:opacity-80">
              30N
            </button>
          </div>
        </div>
        <div className="w-full h-64 relative bg-surface-container-low/30 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(0,0,0,0.05)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(0,0,0,0)', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path
              className="chart-path"
              d="M0,150 Q100,140 200,160 T400,100 T600,130 T800,70 T1000,90"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
            />
            <path d="M0,150 Q100,140 200,160 T400,100 T600,130 T800,70 T1000,90 V200 H0 Z" fill="url(#chartGradient)" />
          </svg>
          <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-[10px] font-label-caps text-secondary/50 py-2">
            <span>250tr</span>
            <span>125tr</span>
            <span>0</span>
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
        <div className="p-stack-lg border-b border-outline-variant flex justify-between items-center">
          <h3 className="font-headline-sm text-headline-sm">Đơn Hàng Gần Đây</h3>
          <button className="text-label-caps text-primary underline underline-offset-4 hover:opacity-70 transition-opacity">
            Xuất CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="px-6 py-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest">Mã đơn</th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest">Khách hàng</th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest">Ngày</th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest">Tổng</th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest">Trạng thái</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {dashboardRecentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-5 text-body-md font-medium text-primary">{order.id}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">
                        {order.initials}
                      </div>
                      <span className="text-body-md">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-body-md text-secondary">{order.date}</td>
                  <td className="px-6 py-5 font-price-display text-price-display">{order.total}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-secondary">
                      more_horiz
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-stack-md bg-surface-container-low flex justify-center">
          <button className="text-label-caps text-secondary hover:text-primary transition-colors flex items-center gap-2">
            Xem tất cả đơn hàng
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  )
}
