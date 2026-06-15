import { Link } from 'react-router-dom'
import type { FormEvent } from 'react'

const quickLinks = [
  { label: 'Bản tin', href: '#' },
  { label: 'Chăm sóc khách hàng', href: '#' },
  { label: 'Vận chuyển & Đổi trả', href: '#' },
  { label: 'Chính sách bảo mật', href: '#' },
]

export function ShopFooter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <footer className="w-full pt-section-gap pb-stack-lg bg-surface-container-low border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-container-padding max-w-7xl mx-auto">
        <div className="space-y-stack-md">
          <Link className="font-display-lg-mobile text-display-lg-mobile text-primary" to="/">
            AURA DE SOIE
          </Link>
          <p className="font-body-sm text-body-sm text-secondary pr-stack-lg">
            Kiến tạo điểm giao thoa giữa vẻ đẹp thanh tao và cấu trúc hiện đại. Aura de Soie là lời tri ân dành cho sức
            hút vượt thời gian của lụa.
          </p>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <h4 className="font-label-caps text-label-caps text-primary mb-2">LIÊN KẾT NHANH</h4>
          {quickLinks.map((link) => (
            <a key={link.label} className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-primary">ĐĂNG KÝ</h4>
          <p className="font-body-sm text-body-sm text-secondary">
            Tham gia cộng đồng nội bộ để nhận ưu tiên xem trước và những câu chuyện chuyên đề.
          </p>
          <form className="flex border-b border-primary pb-2" onSubmit={handleSubmit}>
            <input
              className="bg-transparent border-none focus:ring-0 w-full font-label-caps text-[10px] uppercase outline-none"
              placeholder="ĐỊA CHỈ EMAIL"
              type="email"
            />
            <button className="material-symbols-outlined text-primary text-[20px]" type="submit" aria-label="Đăng ký">
              arrow_forward
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-container-padding mt-section-gap text-center md:text-left">
        <p className="font-body-sm text-body-sm text-secondary tracking-widest">
          © 2024 AURA DE SOIE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
