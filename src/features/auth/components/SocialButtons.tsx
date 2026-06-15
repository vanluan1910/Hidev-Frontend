export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-stack-md">
      <button
        type="button"
        className="flex items-center justify-center gap-2 border border-outline py-3 px-4 hover:bg-surface-container transition-colors active:scale-95 duration-200"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="font-label-caps text-label-caps">Google</span>
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 border border-outline py-3 px-4 hover:bg-surface-container transition-colors active:scale-95 duration-200"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M17.05 20.28c-.96.95-2.06 1.92-3.37 1.92-1.27 0-1.7-.77-3.17-.77s-1.96.75-3.17.77c-1.28.02-2.45-1.04-3.41-1.92-1.98-1.81-3.52-5.11-3.52-7.85 0-4.32 2.8-6.61 5.49-6.61 1.41 0 2.58.91 3.44.91.86 0 2.18-.91 3.73-.91 1.63 0 4.1.84 5.37 2.58-2.58 1.46-2.16 4.67.43 5.75-1.05 2.5-2.41 5.25-4.42 6.13zM13.25 3.8c-.01-1.47 1.25-2.75 2.65-2.8.02 1.41-1.29 2.76-2.65 2.8z"
            fill="currentColor"
          />
        </svg>
        <span className="font-label-caps text-label-caps">Apple</span>
      </button>
    </div>
  )
}
