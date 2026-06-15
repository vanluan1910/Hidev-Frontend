import type { ReactNode } from 'react'

export function AdminModal({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  return (
    <div
      className="admin-dashboard fixed inset-0 bg-black/40 flex items-center justify-center p-stack-md z-[60]"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="bg-surface w-full max-w-2xl border border-outline-variant shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between px-stack-lg py-stack-md border-b border-outline-variant">
          <h2 className="font-headline-sm text-headline-sm text-primary">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="material-symbols-outlined text-secondary hover:text-primary transition-colors"
            aria-label="Đóng"
          >
            close
          </button>
        </header>
        <div className="px-stack-lg py-stack-lg">{children}</div>
      </section>
    </div>
  )
}
