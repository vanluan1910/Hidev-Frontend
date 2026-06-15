export function AdminBadge({ label, tone }: { label: string; tone: 'good' | 'info' | 'warn' | 'error' | 'neutral' }) {
  const toneClass: Record<typeof tone, string> = {
    good: 'bg-emerald-100 text-emerald-800',
    info: 'bg-blue-100 text-blue-800',
    warn: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
    neutral: 'bg-surface-variant text-primary',
  }
  return (
    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${toneClass[tone]}`}>{label}</span>
  )
}
