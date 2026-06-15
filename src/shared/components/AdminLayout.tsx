import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/hooks/useAuth'

export type SectionKey = 'dashboard' | 'products' | 'categories' | 'inventory' | 'orders' | 'customers' | 'settings'

const navItems: Array<{ key: SectionKey; label: string; icon: string }> = [
  { key: 'dashboard', label: 'Tổng quan', icon: 'dashboard' },
  { key: 'products', label: 'Sản phẩm', icon: 'inventory_2' },
  { key: 'categories', label: 'Danh mục', icon: 'category' },
  { key: 'inventory', label: 'Tồn kho', icon: 'warehouse' },
  { key: 'orders', label: 'Đơn hàng', icon: 'shopping_bag' },
  { key: 'customers', label: 'Khách hàng', icon: 'group' },
  { key: 'settings', label: 'Cài đặt', icon: 'settings' },
]

export function AdminLayout({
  active,
  onNavigate,
  children,
}: {
  active: SectionKey
  onNavigate: (section: SectionKey) => void
  children: ReactNode
}) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const title = navItems.find((item) => item.key === active)?.label ?? ''

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="admin-dashboard font-body-md text-on-surface bg-[#f3f4f6] min-h-screen">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-stack-lg z-50">
        <div className="px-container-padding mb-stack-lg">
          <h1 className="font-headline-sm text-headline-sm text-primary">Aura de Soie</h1>
          <p className="font-label-caps text-label-caps text-secondary opacity-60">Bảng quản trị</p>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-150 ease-linear ${
                active === item.key
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-caps text-label-caps">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto px-4 pb-4">
          <div className="flex items-center gap-3 p-4 bg-surface-container rounded-lg">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary text-[12px] font-bold">
              {(user?.name ?? 'A').charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="font-label-caps text-[10px] uppercase font-bold text-secondary">Quản lý</p>
              <p className="text-body-sm font-medium truncate">{user?.name ?? 'Quản trị viên'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="ml-64 min-h-screen flex flex-col">
        <header className="flex justify-between items-center px-container-padding w-full h-16 sticky top-0 z-40 bg-surface border-b border-outline-variant">
          <span className="font-headline-md text-headline-md text-primary tracking-tight">{title}</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              Xem cửa hàng
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity"
              aria-label="Đăng xuất"
              title="Đăng xuất"
            >
              logout
            </button>
          </div>
        </header>
        <div className="p-container-padding space-y-stack-lg flex-1">{children}</div>
        <footer className="flex justify-between items-center px-container-padding w-full mt-auto py-stack-md border-t border-surface-container-highest">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] opacity-40">
            © 2024 Aura de Soie Luxury Group
          </span>
        </footer>
      </div>
    </div>
  )
}
