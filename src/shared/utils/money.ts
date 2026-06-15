/** Formats a number as Vietnamese Dong, e.g. 8500000 -> "8.500.000 ₫" */
export function formatVnd(value: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(value)
}
