import { useMemo, useState } from 'react'
import { AdminBadge } from '../../../shared/components/AdminBadge'
import { formatVnd } from '../../../shared/utils/money'
import { mockCustomers } from '../../dashboard/data/adminMockData'
import type { CustomerTier } from '../types/customer'

const tierLabel: Record<CustomerTier, string> = {
  VIP: 'VIP',
  Regular: 'Thường',
  New: 'Mới',
}
const tierTone: Record<CustomerTier, 'good' | 'info' | 'neutral'> = {
  VIP: 'good',
  Regular: 'neutral',
  New: 'info',
}

type Tab = 'All' | CustomerTier
const tabs: Array<{ key: Tab; label: string }> = [
  { key: 'All', label: 'Tất cả' },
  { key: 'VIP', label: 'Khách VIP' },
  { key: 'New', label: 'Khách mới' },
  { key: 'Regular', label: 'Khách thường' },
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

export function CustomersPage() {
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState<Tab>('All')
  const [page, setPage] = useState(1)

  const stats = useMemo(() => {
    const total = mockCustomers.length
    const vip = mockCustomers.filter((c) => c.tier === 'VIP').length
    const fresh = mockCustomers.filter((c) => c.tier === 'New').length
    const avg = total > 0 ? Math.round(mockCustomers.reduce((sum, c) => sum + c.totalSpend, 0) / total) : 0
    return { total, vip, fresh, avg }
  }, [])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return mockCustomers.filter((c) => {
      const matchSearch = !term || c.fullName.toLowerCase().includes(term) || c.email.toLowerCase().includes(term)
      const matchTab = tab === 'All' || c.tier === tab
      return matchSearch && matchTab
    })
  }, [search, tab])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const statCards = [
    { label: 'TỔNG KHÁCH HÀNG', value: String(stats.total) },
    { label: 'TÀI KHOẢN VIP', value: String(stats.vip) },
    { label: 'KHÁCH MỚI', value: String(stats.fresh) },
    { label: 'CHI TIÊU TRUNG BÌNH', value: formatVnd(stats.avg) },
  ]

  return (
    <div className="space-y-stack-lg">
      {/* Page header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <h2 className="font-headline-md text-display-lg text-primary mb-2">Danh Bạ Khách Hàng</h2>
          <p className="font-body-md text-secondary max-w-lg">
            Quản lý tệp khách hàng, theo dõi thói quen mua sắm và chăm sóc các mối quan hệ VIP với trải nghiệm boutique
            riêng biệt.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300">
            XUẤT DỮ LIỆU
          </button>
          <button className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps hover:opacity-90 transition-opacity">
            THÊM KHÁCH HÀNG
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        {statCards.map((card) => (
          <div key={card.label} className="bg-surface-container-low p-6 border border-outline-variant">
            <p className="font-label-caps text-label-caps text-secondary mb-2">{card.label}</p>
            <p className="font-headline-md text-headline-md text-primary">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs + search */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-stack-md">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => {
                setTab(t.key)
                setPage(1)
              }}
              className={`font-label-caps text-label-caps pb-1 whitespace-nowrap transition-colors ${
                tab === t.key ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              {t.label.toUpperCase()}
            </button>
          ))}
        </div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          placeholder="Tìm theo tên hoặc email..."
          className="px-3 py-2 bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-sm w-full sm:w-72"
        />
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low">
                <th className="py-4 px-4 font-label-caps text-secondary text-[11px] uppercase tracking-widest">Khách hàng</th>
                <th className="py-4 px-4 font-label-caps text-secondary text-[11px] uppercase tracking-widest">Email</th>
                <th className="py-4 px-4 font-label-caps text-secondary text-[11px] uppercase tracking-widest text-center">Hạng</th>
                <th className="py-4 px-4 font-label-caps text-secondary text-[11px] uppercase tracking-widest text-right">Tổng chi tiêu</th>
                <th className="py-4 px-4 font-label-caps text-secondary text-[11px] uppercase tracking-widest text-right">Mua gần nhất</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-primary divide-y divide-outline-variant/30">
              {pageItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-body-md text-secondary">Không tìm thấy khách hàng.</td>
                </tr>
              ) : (
                pageItems.map((customer) => (
                  <tr key={customer.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-surface-variant flex items-center justify-center font-headline-sm text-primary">
                          {initials(customer.fullName)}
                        </div>
                        <div>
                          <p className="font-bold">{customer.fullName}</p>
                          <p className="text-[12px] text-secondary">ID: {customer.id.toUpperCase()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-secondary">{customer.email}</td>
                    <td className="py-6 px-4 text-center">
                      <AdminBadge label={tierLabel[customer.tier]} tone={tierTone[customer.tier]} />
                    </td>
                    <td className="py-6 px-4 text-right font-price-display font-medium">{formatVnd(customer.totalSpend)}</td>
                    <td className="py-6 px-4 text-right text-secondary text-body-sm">{customer.lastPurchase}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-outline-variant flex justify-between items-center">
          <p className="font-body-sm text-secondary text-[12px] uppercase tracking-wider">
            Hiển thị {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
            {Math.min(currentPage * PAGE_SIZE, filtered.length)} của {filtered.length} khách hàng
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang trước"
            >
              <span className="material-symbols-outlined text-body-sm">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-10 h-10 border font-label-caps text-body-sm ${
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
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang sau"
            >
              <span className="material-symbols-outlined text-body-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
