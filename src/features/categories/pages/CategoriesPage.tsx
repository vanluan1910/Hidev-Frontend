import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { AdminModal } from '../../../shared/components/AdminModal'
import { mockCategories } from '../../dashboard/data/adminMockData'
import type { Category, CategoryPayload } from '../types/category'

const PAGE_SIZE = 6

const emptyPayload: CategoryPayload = { name: '', description: '', isActive: true, imageUrl: '' }

function todayLabel() {
  const now = new Date()
  return `${String(now.getDate()).padStart(2, '0')} Th${now.getMonth() + 1}, ${now.getFullYear()}`
}

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(mockCategories)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState<Category | null>(null)
  const [payload, setPayload] = useState<CategoryPayload>(emptyPayload)

  const stats = useMemo(() => {
    const total = categories.length
    const active = categories.filter((c) => c.isActive).length
    const items = categories.reduce((sum, c) => sum + c.itemCount, 0)
    const visibility = total > 0 ? Math.round((active / total) * 100) : 0
    return { total, active, items, visibility }
  }, [categories])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return categories
    return categories.filter((c) => c.name.toLowerCase().includes(term) || c.description.toLowerCase().includes(term))
  }, [categories, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function openForm(category?: Category) {
    setEditing(category ?? null)
    setPayload(
      category
        ? { name: category.name, description: category.description, isActive: category.isActive, imageUrl: category.imageUrl }
        : { ...emptyPayload },
    )
    setFormOpen(true)
  }

  function closeForm() {
    setFormOpen(false)
    setEditing(null)
    setPayload(emptyPayload)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (editing) {
      setCategories((prev) => prev.map((c) => (c.id === editing.id ? { ...c, ...payload, updatedAt: todayLabel() } : c)))
    } else {
      setCategories((prev) => [
        { id: `cat-${Date.now()}`, itemCount: 0, updatedAt: todayLabel(), ...payload },
        ...prev,
      ])
    }
    closeForm()
  }

  function toggleVisibility(category: Category) {
    setCategories((prev) => prev.map((c) => (c.id === category.id ? { ...c, isActive: !c.isActive } : c)))
  }

  const inputClass = 'border border-outline-variant bg-surface px-3 py-2 text-body-sm focus:outline-none focus:border-primary'

  const statCards = [
    { label: 'Tổng danh mục', value: String(stats.total) },
    { label: 'Đang hiển thị', value: String(stats.active) },
    { label: 'Tổng sản phẩm', value: String(stats.items) },
    { label: 'Tỷ lệ hiển thị', value: `${stats.visibility}%` },
  ]

  return (
    <div className="space-y-stack-lg">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <h2 className="font-display-lg text-display-lg text-primary mb-2">Quản Lý Danh Mục</h2>
          <p className="font-body-md text-secondary">Tổ chức bộ sưu tập và kiểm soát hiển thị từng danh mục sản phẩm.</p>
        </div>
        <button
          type="button"
          onClick={() => openForm()}
          className="bg-primary text-on-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Thêm danh mục
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        {statCards.map((card) => (
          <div key={card.label} className="p-6 bg-surface-container-lowest border border-outline-variant flex flex-col justify-between h-32">
            <p className="font-label-caps text-[10px] text-secondary uppercase">{card.label}</p>
            <p className="font-headline-md text-headline-md text-primary">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-between items-center gap-4">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          placeholder="Tìm danh mục..."
          className={`${inputClass} w-full max-w-md`}
        />
      </div>

      {/* Data grid */}
      <div className="bg-surface-container-lowest border border-outline-variant">
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant bg-surface-container-low font-label-caps text-[10px] text-secondary uppercase tracking-widest">
          <div className="col-span-1">Ảnh</div>
          <div className="col-span-4">Tên danh mục</div>
          <div className="col-span-2 text-center">Sản phẩm</div>
          <div className="col-span-2 text-center">Cập nhật</div>
          <div className="col-span-2 text-center">Hiển thị</div>
          <div className="col-span-1 text-right">Thao tác</div>
        </div>

        {pageItems.length === 0 ? (
          <p className="px-6 py-10 text-center text-body-md text-secondary">Không tìm thấy danh mục.</p>
        ) : (
          pageItems.map((category) => (
            <div
              key={category.id}
              className={`grid grid-cols-2 md:grid-cols-12 gap-4 px-6 py-6 border-b border-outline-variant items-center hover:bg-surface-bright transition-colors group ${
                category.isActive ? '' : 'opacity-70'
              }`}
            >
              <div className="col-span-1">
                <div className="w-16 h-16 bg-surface-variant overflow-hidden">
                  {category.imageUrl ? (
                    <img
                      alt={category.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      src={category.imageUrl}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{category.name}</h3>
                  {!category.isActive ? (
                    <span className="font-label-caps text-[9px] bg-secondary-fixed px-2 py-0.5 rounded-full uppercase">Ẩn</span>
                  ) : null}
                </div>
                <p className="font-body-sm text-secondary italic">{category.description}</p>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-price-display text-price-display">{category.itemCount}</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-body-sm text-secondary">{category.updatedAt}</span>
              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => toggleVisibility(category)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    category.isActive ? 'bg-primary' : 'bg-outline-variant'
                  }`}
                  aria-label={category.isActive ? 'Đang hiển thị' : 'Đang ẩn'}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      category.isActive ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="col-span-1 text-right">
                <button
                  type="button"
                  onClick={() => openForm(category)}
                  className="material-symbols-outlined p-2 text-secondary hover:text-primary transition-colors"
                  aria-label="Sửa"
                >
                  edit
                </button>
              </div>
            </div>
          ))
        )}

        <div className="px-6 py-4 flex justify-between items-center">
          <p className="font-body-sm text-secondary italic">
            Hiển thị {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
            {Math.min(currentPage * PAGE_SIZE, filtered.length)} của {filtered.length} danh mục
          </p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang trước"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-10 h-10 border flex items-center justify-center font-label-caps ${
                  n === currentPage ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant hover:border-primary hover:text-primary'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trang sau"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {formOpen ? (
        <AdminModal title={editing ? 'Sửa danh mục' : 'Thêm danh mục'} onClose={closeForm}>
          <form className="space-y-stack-md" onSubmit={onSubmit}>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              Tên
              <input value={payload.name} onChange={(e) => setPayload({ ...payload, name: e.target.value })} required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              Mô tả
              <input value={payload.description} onChange={(e) => setPayload({ ...payload, description: e.target.value })} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-body-sm font-medium text-secondary">
              URL hình ảnh
              <input value={payload.imageUrl} onChange={(e) => setPayload({ ...payload, imageUrl: e.target.value })} className={inputClass} />
            </label>
            <label className="flex items-center gap-2 text-body-sm text-secondary">
              <input type="checkbox" checked={payload.isActive} onChange={(e) => setPayload({ ...payload, isActive: e.target.checked })} className="w-4 h-4" />
              Đang hiển thị
            </label>
            <div className="flex justify-end">
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
