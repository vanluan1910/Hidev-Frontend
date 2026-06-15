import { Link } from 'react-router-dom'

export function AuthHeader() {
  return (
    <header className="w-full top-0 left-0 border-b border-outline-variant flex justify-between items-center px-container-padding py-4 z-50 bg-surface">
      <Link
        className="font-headline-md text-headline-md text-primary uppercase tracking-widest hover:opacity-80 transition-opacity"
        to="/"
      >
        Aura de Soie
      </Link>
      <div className="flex items-center gap-stack-md">
        <Link className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity" to="/" aria-label="Đóng">
          close
        </Link>
      </div>
    </header>
  )
}
