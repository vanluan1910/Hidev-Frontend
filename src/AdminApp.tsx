import { useState } from 'react'
import type { ReactNode } from 'react'
import { AdminLayout, type SectionKey } from './shared/components/AdminLayout'
import { DashboardPage } from './features/dashboard/pages/DashboardPage'
import { ProductsPage } from './features/products/pages/ProductsPage'
import { CategoriesPage } from './features/categories/pages/CategoriesPage'
import { InventoryPage } from './features/inventory/pages/InventoryPage'
import { OrdersPage } from './features/orders/pages/OrdersPage'
import { CustomersPage } from './features/customers/pages/CustomersPage'
import { SettingsPage } from './features/settings/pages/SettingsPage'

const pages: Record<SectionKey, ReactNode> = {
  dashboard: <DashboardPage />,
  products: <ProductsPage />,
  categories: <CategoriesPage />,
  inventory: <InventoryPage />,
  orders: <OrdersPage />,
  customers: <CustomersPage />,
  settings: <SettingsPage />,
}

export function AdminApp() {
  const [active, setActive] = useState<SectionKey>('dashboard')

  return (
    <AdminLayout active={active} onNavigate={setActive}>
      {pages[active]}
    </AdminLayout>
  )
}
