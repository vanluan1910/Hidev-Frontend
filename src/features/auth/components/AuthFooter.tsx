const footerLinks = [
  { label: 'Chính sách bảo mật', href: '#' },
  { label: 'Điều khoản dịch vụ', href: '#' },
  { label: 'Trợ giúp', href: '#' },
]

export function AuthFooter() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant flex flex-col md:flex-row justify-between items-center px-container-padding py-stack-lg mt-auto">
      <div className="font-label-caps text-label-caps text-primary mb-4 md:mb-0">Aura de Soie</div>
      <div className="flex flex-col md:flex-row items-center gap-stack-md text-secondary font-body-sm text-body-sm">
        <span>© 2024 Aura de Soie. Bảo lưu mọi quyền.</span>
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <a key={link.label} className="hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
