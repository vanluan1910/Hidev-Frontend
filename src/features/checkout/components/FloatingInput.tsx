export function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  error?: string
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        className={`block w-full border-0 border-b bg-transparent py-2.5 px-0 focus:ring-0 peer transition-colors outline-none ${
          error ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary'
        }`}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-3 origin-[0] font-label-caps text-label-caps text-on-surface-variant duration-300 transform -translate-y-6 scale-75 pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
      {error ? <p className="mt-1 font-body-sm text-[12px] text-error">{error}</p> : null}
    </div>
  )
}
