const supportLinks = [
  { label: 'Bản tin', href: '#' },
  { label: 'Chăm sóc khách hàng', href: '#' },
  { label: 'Vận chuyển & Đổi trả', href: '#' },
  { label: 'Chính sách bảo mật', href: '#' },
]

const connectLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Weibo', href: '#' },
]

export function CartFooter() {
  return (
    <footer className="w-full pt-section-gap pb-stack-lg bg-surface-container-low border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-container-padding max-w-7xl mx-auto">
        <div className="flex flex-col gap-stack-md">
          <span className="font-display-lg-mobile text-display-lg-mobile text-primary">AURA DE SOIE</span>
          <p className="font-body-sm text-body-sm text-secondary">
            Những đường nét vượt thời gian được chế tác từ chất liệu thượng hạng. Nâng tầm tủ đồ hiện đại bằng nghệ
            thuật tỉ mỉ và quy trình bền vững.
          </p>
        </div>
        <div className="flex flex-col gap-unit">
          <h4 className="font-label-caps text-label-caps text-primary mb-stack-sm">HỖ TRỢ KHÁCH HÀNG</h4>
          {supportLinks.map((link) => (
            <a key={link.label} className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-unit">
          <h4 className="font-label-caps text-label-caps text-primary mb-stack-sm">KẾT NỐI</h4>
          <div className="flex gap-stack-md">
            {connectLinks.map((link) => (
              <a key={link.label} className="text-secondary hover:text-primary transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-stack-lg font-body-sm text-body-sm text-secondary">© 2024 AURA DE SOIE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
