export function LoadingBlock({ label = 'Loading data...' }: { label?: string }) {
  return <div className="state-block">{label}</div>
}

export function ErrorBanner({ message }: { message: string }) {
  return <div className="error-banner">{message}</div>
}

export function EmptyState({ message }: { message: string }) {
  return <div className="state-block">{message}</div>
}
