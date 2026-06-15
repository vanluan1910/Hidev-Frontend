const quickLinks = [
  { label: 'Bản tin', href: '#' },
  { label: 'Chăm sóc khách hàng', href: '#' },
  { label: 'Vận chuyển & Đổi trả', href: '#' },
  { label: 'Chính sách bảo mật', href: '#' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export function ProductDetailFooter() {
  return (
    <footer className="w-full pt-section-gap pb-stack-lg bg-surface-container-low border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-container-padding max-w-7xl mx-auto">
        <div className="flex flex-col gap-stack-sm">
          <span className="font-display-lg-mobile text-display-lg-mobile text-primary">AURA DE SOIE</span>
          <p className="font-body-sm text-secondary max-w-xs mt-stack-sm">
            Kiến tạo tương lai của sự tối giản tinh tế qua những đường nét kiến trúc và chất liệu được tuyển chọn có
            trách nhiệm.
          </p>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <h4 className="font-label-caps text-label-caps text-primary mb-2">LIÊN KẾT NHANH</h4>
          {quickLinks.map((link) => (
            <a key={link.label} className="font-body-sm text-secondary hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-label-caps text-label-caps text-primary mb-2">THEO DÕI</h4>
            <div className="flex gap-stack-md text-secondary">
              {socialLinks.map((link) => (
                <a key={link.label} className="hover:text-primary" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p className="font-body-sm text-secondary mt-stack-lg">© 2024 AURA DE SOIE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
