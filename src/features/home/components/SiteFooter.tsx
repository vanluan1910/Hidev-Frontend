const shopLinks = [
  { label: 'Hàng mới về', href: '#' },
  { label: 'Bộ sưu tập', href: '#' },
  { label: 'Phụ kiện', href: '#' },
]

const serviceLinks = [
  { label: 'Bản tin', href: '#' },
  { label: 'Chăm sóc khách hàng', href: '#' },
  { label: 'Vận chuyển & Đổi trả', href: '#' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Vogue', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full pt-section-gap pb-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-container-padding max-w-7xl mx-auto">
        <div className="flex flex-col gap-stack-md">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary">AURA DE SOIE</h2>
          <p className="font-body-sm text-secondary">
            Kiến tạo tương lai của thời trang cao cấp qua lăng kính sang trọng tĩnh lặng và tối giản kiến trúc.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-stack-lg">
          <div className="flex flex-col gap-stack-sm">
            <h4 className="font-label-caps text-label-caps text-primary mb-unit">Cửa hàng</h4>
            {shopLinks.map((link) => (
              <a key={link.label} className="font-body-sm text-secondary hover:text-primary transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-stack-sm">
            <h4 className="font-label-caps text-label-caps text-primary mb-unit">Dịch vụ</h4>
            {serviceLinks.map((link) => (
              <a key={link.label} className="font-body-sm text-secondary hover:text-primary transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-stack-md">
          <div className="flex gap-stack-md">
            {socialLinks.map((link) => (
              <a key={link.label} className="text-secondary hover:text-primary transition-colors" href={link.href}>
                <span className="font-label-caps text-label-caps">{link.label}</span>
              </a>
            ))}
          </div>
          <p className="font-body-sm text-secondary mt-auto text-left md:text-right">
            © 2024 AURA DE SOIE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
