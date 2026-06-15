import { useMemo, useState } from 'react'
import { mockInventory, mockProducts } from '../../dashboard/data/adminMockData'
import type { InventoryVariant } from '../types/inventory'

const PAGE_SIZE = 8

function stockState(item: InventoryVariant): { label: string; color: string; bar: string; percent: number } {
  if (item.quantity === 0) {
    return { label: 'Hết hàng', color: 'text-error', bar: 'bg-error', percent: 0 }
  }
  if (item.isLowStock) {
    const percent = Math.min(100, Math.round((item.quantity / (item.lowStockThreshold * 4)) * 100))
    return { label: 'Sắp hết', color: 'text-amber-600', bar: 'bg-amber-500', percent: Math.max(15, percent) }
  }
  const percent = Math.min(100, Math.round((item.quantity / (item.lowStockThreshold * 4)) * 100))
  return { label: 'Còn hàng', color: 'text-green-600', bar: 'bg-green-500', percent: Math.max(40, percent) }
}

export function InventoryPage() {
  const [items, setItems] = useState<InventoryVariant[]>(mockInventory)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [page, setPage] = useState(1)

  const imageByProduct = useMemo(() => {
    const map = new Map<string, string>()
    for (const p of mockProducts) map.set(p.id, p.mainImageUrl)
    return map
  }, [])

  const stats = useMemo(() => {
    const total = items.length
    const low = items.filter((i) => i.isLowStock && i.quantity > 0).length
    const out = items.filter((i) => i.quantity === 0).length
    return { total, low, out }
  }, [items])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return items.filter((i) => {
      const matchSearch = !term || i.sku.toLowerCase().includes(term) || i.productName.toLowerCase().includes(term)
      let matchStatus = true
      if (statusFilter === 'in') matchStatus = i.quantity > 0 && !i.isLowStock
      else if (statusFilter === 'low') matchStatus = i.isLowStock && i.quantity > 0
      else if (statusFilter === 'out') matchStatus = i.quantity === 0
      return matchSearch && matchStatus
    })
  }, [items, search, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function adjust(item: InventoryVariant, delta: number) {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id !== item.id) return i
        const quantity = Math.max(0, i.quantity + delta)
        return { ...i, quantity, isLowStock: quantity > 0 && quantity <= i.lowStockThreshold }
      }),
    )
  }

  const statCards = [
    { label: 'Tổng biến thể', value: String(stats.total), accent: '', valueColor: 'text-primary', icon: 'trending_up', iconColor: 'text-green-600' },
    { label: 'Sắp hết hàng', value: String(stats.low), accent: 'border-l-4 border-amber-400', valueColor: 'text-amber-600', icon: 'warning', iconColor: 'text-amber-500' },
    { label: 'Hết hàng', value: String(stats.out), accent: 'border-l-4 border-error', valueColor: 'text-error', icon: 'block', iconColor: 'text-error' },
  ]

  return (
    <div className="space-y-stack-lg">
      <div>
        <h2 className="font-headline-md text-headline-md text-primary mb-2">Quản Lý Hàng Tồn Kho</h2>
        <p className="text-secondary font-body-sm">Theo dõi mức tồn kho từng biến thể sản phẩm theo thời gian thực.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {statCards.map((card) => (
          <div key={card.label} className={`bg-surface-container-lowest p-stack-lg border border-outline-variant flex flex-col justify-between ${card.accent}`}>
            <span className="font-label-caps text-label-caps text-secondary mb-2">{card.label}</span>
            <div className="flex justify-between items-end">
              <span className={`font-headline-md text-headline-md ${card.valueColor}`}>{card.value}</span>
              <span className={`material-symbols-outlined ${card.iconColor}`}>{card.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Inventory list */}
      <section className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
        <div className="p-gutter flex flex-col lg:flex-row justify-between items-center gap-stack-md border-b border-outline-variant">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            placeholder="Tìm theo SKU hoặc sản phẩm..."
            className="w-full lg:w-80 px-3 py-2 bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-sm"
          />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value)
              setPage(1)
            }}
            className="px-4 py-2 bg-surface border border-outline-variant font-label-caps text-label-caps focus:outline-none focus:border-primary"
          >
            <option value="">Tất cả trạng thái</option>
            <option value="in">Còn hàng</option>
            <option value="low">Sắp hết</option>
            <option value="out">Hết hàng</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="p-gutter font-label-caps text-label-caps text-secondary">Sản phẩm</th>
                <th className="p-gutter font-label-caps text-label-caps text-secondary">SKU</th>
                <th className="p-gutter font-label-caps text-label-caps text-secondary">Mức tồn kho</th>
                <th className="p-gutter font-label-caps text-label-caps text-secondary">Biến thể</th>
                <th className="p-gutter font-label-caps text-label-caps text-secondary text-right">Điều chỉnh</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {pageItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-body-md text-secondary">Không tìm thấy biến thể.</td>
                </tr>
              ) : (
                pageItems.map((item) => {
                  const state = stockState(item)
                  const image = imageByProduct.get(item.productId) ?? ''
                  return (
                    <tr key={item.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-gutter">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-20 bg-surface-variant flex-shrink-0 overflow-hidden">
                            {image ? <img className="w-full h-full object-cover" alt={item.productName} src={image} /> : null}
                          </div>
                          <div>
                            <p className="font-body-md font-medium text-primary">{item.productName}</p>
                            <p className="font-body-sm text-secondary">{item.color} / {item.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-gutter font-label-caps text-label-caps text-outline">{item.sku}</td>
                      <td className="p-gutter">
                        <div className="flex flex-col gap-1">
                          <span className="font-body-sm text-primary">{item.quantity} chiếc</span>
                          <div className="w-32 h-1 bg-surface-variant">
                            <div className={`h-full ${state.bar}`} style={{ width: `${state.percent}%` }} />
                          </div>
                          <span className={`text-[10px] font-label-caps uppercase ${state.color}`}>{state.label}</span>
                        </div>
                      </td>
                      <td className="p-gutter font-body-sm text-secondary">{item.size} · {item.color}</td>
                      <td className="p-gutter text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => adjust(item, -1)}
                            className="material-symbols-outlined w-9 h-9 border border-outline-variant flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors"
                            aria-label="Giảm"
                          >
                            remove
                          </button>
                          <button
                            type="button"
                            onClick={() => adjust(item, 1)}
                            className="material-symbols-outlined w-9 h-9 border border-outline-variant flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors"
                            aria-label="Tăng"
                          >
                            add
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="p-gutter border-t border-outline-variant flex justify-between items-center">
          <p className="font-body-sm text-secondary">
            Hiển thị {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
            {Math.min(currentPage * PAGE_SIZE, filtered.length)} của {filtered.length} biến thể
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-surface-container-low transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang trước"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-10 h-10 flex items-center justify-center border font-label-caps ${
                  n === currentPage ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant hover:bg-surface-container-low'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-surface-container-low transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang sau"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
