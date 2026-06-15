export interface DashboardMetric {
  label: string
  value: string
  changeLabel: string
  changeNote: string
  trend: 'up' | 'down' | 'flat'
}

export interface DashboardOrder {
  id: string
  customer: string
  initials: string
  date: string
  total: string
  status: 'Đã giao' | 'Đang xử lý' | 'Đang giao' | 'Đã hủy'
}

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Tổng doanh thu', value: '3.210.750.000₫', changeLabel: '+12,4%', changeNote: 'so với tháng trước', trend: 'up' },
  { label: 'Đơn hàng', value: '1.248', changeLabel: '+5,2%', changeNote: 'so với tháng trước', trend: 'up' },
  { label: 'Khách hàng', value: '892', changeLabel: '0,0%', changeNote: 'tăng trưởng ổn định', trend: 'flat' },
  { label: 'Giá trị đơn TB', value: '2.572.500₫', changeLabel: '-2,1%', changeNote: 'so với tháng trước', trend: 'down' },
]

export const dashboardRecentOrders: DashboardOrder[] = [
  { id: '#ORD-7742', customer: 'Eleanor Campbell', initials: 'EC', date: '24 Th10, 2023', total: '8.500.000₫', status: 'Đã giao' },
  { id: '#ORD-7741', customer: 'Marcus Beland', initials: 'MB', date: '23 Th10, 2023', total: '30.130.000₫', status: 'Đang xử lý' },
  { id: '#ORD-7740', customer: 'Sophia Villiers', initials: 'SV', date: '23 Th10, 2023', total: '2.225.000₫', status: 'Đang giao' },
  { id: '#ORD-7739', customer: 'Lucas Dupont', initials: 'LD', date: '22 Th10, 2023', total: '13.000.000₫', status: 'Đã hủy' },
]
