import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { AdminModal } from '../../../shared/components/AdminModal'
import { AdminBadge } from '../../../shared/components/AdminBadge'
import { formatVnd } from '../../../shared/utils/money'
import { mockCategories, mockInventory, mockProducts } from '../../dashboard/data/adminMockData'
import type { Product, ProductPayload, ProductStatus } from '../types/product'

const statuses: ProductStatus[] = ['Draft', 'Active', 'Inactive', 'Archived']
const statusLabel: Record<ProductStatus, string> = {
  Draft: 'Nháp',
  Active: 'Đang bán',
  Inactive: 'Tạm ẩn',
  Archived: 'Lưu trữ',
}
const statusTone: Record<ProductStatus, 'good' | 'neutral' | 'warn' | 'error'> = {
  Draft: 'warn',
  Active: 'good',
  Inactive: 'neutral',
  Archived: 'error',
}

const PAGE_SIZE = 8

const emptyProduct: ProductPayload = {
  name: '',
  sku: '',
  categoryId: mockCategories[0]?.id ?? '',
  price: 0,
  status: 'Active',
  mainImageUrl: '',
  shortDescription: '',
}

/** Aggregate stock per product from the mock inventory variants. */
function buildStockMap() {
  const map = new Map<string, { quantity: number; lowStock: boolean }>()
  for (const variant of mockInventory) {
    const current = map.get(variant.productId) ?? { quantity: 0, lowStock: false }
    map.set(variant.productId, {
      quantity: current.quantity + variant.quantity,
      lowStock: current.lowStock || variant.isLowStock,
    })
  }
  return map
}

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [page, setPage] = useState(1)
  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState<Product | null>(null)
  const [payload, setPayload] = useState<ProductPayload>(emptyProduct)

  const stockMap = useMemo(() => buildStockMap(), [])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((p) => {
      const matchSearch = !term || p.name.toLowerCase().includes(term) || p.sku.toLowerCase().includes(term)
      const matchStatus = !statusFilter || p.status === statusFilter
      const matchCategory = !categoryFilter || p.categoryId === categoryFilter
      return matchSearch && matchStatus && matchCategory
    })
  }, [products, search, statusFilter, categoryFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function resetToFirstPage() {
    setPage(1)
  }

  function openForm(product?: Product) {
    setEditing(product ?? null)
    setPayload(
      product
        ? {
            name: product.name,
            sku: product.sku,
            categoryId: product.categoryId,
            price: product.price,
            status: product.status,
            mainImageUrl: product.mainImageUrl,
            shortDescription: product.shortDescription,
          }
        : { ...emptyProduct },
    )
    setFormOpen(true)
  }

  function closeForm() {
    setFormOpen(false)
    setEditing(null)
    setPayload(emptyProduct)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const categoryName = mockCategories.find((c) => c.id === payload.categoryId)?.name ?? ''
    const now = new Date().toISOString().slice(0, 10)
    if (editing) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...p, ...payload, categoryName, updatedAt: now } : p)),
      )
    } else {
      setProducts((prev) => [{ id: `p-${Date.now()}`, categoryName, createdAt: now, updatedAt: now, ...payload }, ...prev])
    }
    closeForm()
  }

  function onArchive(product: Product) {
    if (!window.confirm(`Lưu trữ "${product.name}"?`)) return
    setProducts((prev) => prev.map((p) => (p.id === product.id ? { ...p, status: 'Archived' } : p)))
  }

  const inputClass = 'border border-outline-variant bg-surface px-3 py-2 text-body-sm focus:outline-none focus:border-primary'

  return (
    <div className="space-y-stack-lg">
      {/* Page header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Kho Sản Phẩm</h2>
          <p className="text-secondary font-body-sm max-w-xl">
            Tuyển chọn và quản lý các bộ sưu tập theo mùa của Aura de Soie. Theo dõi tồn kho và tình trạng bày bán một
            cách tinh tế.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openForm()}
          className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Thêm sản phẩm
        </button>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">filter_list</span>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              resetToFirstPage()
            }}
            placeholder="Lọc theo tên, SKU hoặc chất liệu..."
            className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant focus:border-primary focus:outline-none font-body-sm text-sm"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value)
            resetToFirstPage()
          }}
          className="px-4 py-3 bg-surface border border-outline-variant font-label-caps text-[10px] focus:outline-none focus:border-primary min-w-[150px]"
        >
          <option value="">DANH MỤC: TẤT CẢ</option>
          {mockCategories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value)
            resetToFirstPage()
          }}
          className="px-4 py-3 bg-surface border border-outline-variant font-label-caps text-[10px] focus:outline-none focus:border-primary min-w-[150px]"
        >
          <option value="">TRẠNG THÁI: TẤT CẢ</option>
          {statuses.map((s) => (
            <option key={s} value={s}>{statusLabel[s].toUpperCase()}</option>
          ))}
        </select>
      </section>

      {/* Table */}
      <section className="bg-surface border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-6 py-4 font-label-caps text-[11px] text-secondary tracking-widest">SẢN PHẨM</th>
                <th className="px-6 py-4 font-label-caps text-[11px] text-secondary tracking-widest">DANH MỤC</th>
                <th className="px-6 py-4 font-label-caps text-[11px] text-secondary tracking-widest">TỒN KHO</th>
                <th className="px-6 py-4 font-label-caps text-[11px] text-secondary tracking-widest">GIÁ</th>
                <th className="px-6 py-4 font-label-caps text-[11px] text-secondary tracking-widest text-center">TRẠNG THÁI</th>
                <th className="px-6 py-4 font-label-caps text-[11px] text-secondary tracking-widest text-right">THAO TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {pageItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-body-md text-secondary">
                    Không tìm thấy sản phẩm.
                  </td>
                </tr>
              ) : (
                pageItems.map((product) => {
                  const stock = stockMap.get(product.id)
                  return (
                    <tr key={product.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-20 bg-surface-variant flex-shrink-0 overflow-hidden">
                            {product.mainImageUrl ? (
                              <img className="w-full h-full object-cover" alt={product.name} src={product.mainImageUrl} />
                            ) : null}
                          </div>
                          <div>
                            <p className="font-headline-sm text-sm text-primary">{product.name}</p>
                            <p className="text-[11px] text-secondary font-label-caps">SKU: {product.sku}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-body-sm text-secondary">{product.categoryName}</td>
                      <td className="px-6 py-5">
                        {stock ? (
                          <div className="flex flex-col">
                            <span className="font-body-md text-primary">{stock.quantity}</span>
                            <span className={`text-[10px] font-medium ${stock.lowStock ? 'text-error' : 'text-secondary'}`}>
                              {stock.lowStock ? 'Sắp hết' : 'Ổn định'}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-secondary">—</span>
                        )}
                      </td>
                      <td className="px-6 py-5 font-price-display text-base text-primary">{formatVnd(product.price)}</td>
                      <td className="px-6 py-5 text-center">
                        <AdminBadge label={statusLabel[product.status]} tone={statusTone[product.status]} />
                      </td>
                      <td className="px-6 py-5 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => openForm(product)}
                          className="material-symbols-outlined text-secondary hover:text-primary transition-colors"
                          aria-label="Sửa"
                        >
                          edit
                        </button>
                        <button
                          type="button"
                          onClick={() => onArchive(product)}
                          className="material-symbols-outlined text-secondary hover:text-error transition-colors ml-4"
                          aria-label="Lưu trữ"
                        >
                          archive
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex justify-between items-center bg-surface-container-low border-t border-outline-variant">
          <p className="text-secondary font-body-sm text-[11px] uppercase tracking-wider">
            Hiển thị {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}-
            {Math.min(currentPage * PAGE_SIZE, filtered.length)} trong {filtered.length} sản phẩm
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang trước"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-8 h-8 flex items-center justify-center border text-[10px] transition-all ${
                  n === currentPage
                    ? 'border-primary text-primary font-bold'
                    : 'border-outline-variant text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang sau"
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {formOpen ? (
        <AdminModal title={editing ? 'Sửa sản phẩm' : 'Thêm sản phẩm'} onClose={closeForm}>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-stack-md" onSubmit={onSubmit}>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              Tên
              <input value={payload.name} onChange={(e) => setPayload({ ...payload, name: e.target.value })} required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              SKU
              <input value={payload.sku} onChange={(e) => setPayload({ ...payload, sku: e.target.value })} required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              Danh mục
              <select value={payload.categoryId} onChange={(e) => setPayload({ ...payload, categoryId: e.target.value })} required className={inputClass}>
                {mockCategories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              Giá (₫)
              <input type="number" min="0" step="1000" value={payload.price} onChange={(e) => setPayload({ ...payload, price: Number(e.target.value) })} required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              Trạng thái
              <select value={payload.status} onChange={(e) => setPayload({ ...payload, status: e.target.value as ProductStatus })} className={inputClass}>
                {statuses.map((s) => (
                  <option key={s} value={s}>{statusLabel[s]}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              URL hình ảnh
              <input value={payload.mainImageUrl} onChange={(e) => setPayload({ ...payload, mainImageUrl: e.target.value })} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary md:col-span-2">
              Mô tả ngắn
              <input value={payload.shortDescription} onChange={(e) => setPayload({ ...payload, shortDescription: e.target.value })} className={inputClass} />
            </label>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-primary text-on-primary px-stack-lg py-stack-md font-label-caps text-label-caps uppercase tracking-widest hover:opacity-80 transition-opacity">
                Lưu
              </button>
            </div>
          </form>
        </AdminModal>
      ) : null}
    </div>
  )
}
