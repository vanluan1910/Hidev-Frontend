import { useState } from 'react'
import type { FormEvent } from 'react'

type Section = 'store' | 'branding' | 'security'

const sections: Array<{ key: Section; label: string }> = [
  { key: 'store', label: 'Thông tin cửa hàng' },
  { key: 'branding', label: 'Thương hiệu' },
  { key: 'security', label: 'Bảo mật' },
]

const brandColors = [
  { name: 'Chính', hex: '#111827' },
  { name: 'Nền', hex: '#F9F9FF' },
  { name: 'Phụ', hex: '#5A5F64' },
]

const inputClass =
  'w-full border-0 border-b border-outline-variant bg-transparent py-2 focus:outline-none focus:border-primary focus:border-b-2 transition-colors font-body-md'

export function SettingsPage() {
  const [active, setActive] = useState<Section>('store')
  const [store, setStore] = useState({
    name: 'Aura de Soie Luxury',
    email: 'concierge@auradesoie.com',
    phone: '+84 28 1234 5678',
    region: 'Việt Nam (TP. Hồ Chí Minh)',
  })
  const [password, setPassword] = useState({ current: '', next: '', confirm: '' })
  const [saved, setSaved] = useState(false)

  function scrollTo(section: Section) {
    setActive(section)
    document.getElementById(`settings-${section}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function onSave(event: FormEvent) {
    event.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="max-w-5xl mx-auto w-full">
      <header className="mb-12">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">Cài Đặt Hệ Thống</h2>
        <p className="font-body-md text-secondary max-w-2xl">
          Cấu hình môi trường quản trị, quản lý nhận diện thương hiệu và bảo mật thông tin đăng nhập.
        </p>
      </header>

      <form className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap" onSubmit={onSave}>
        {/* Local nav */}
        <nav className="hidden lg:block lg:col-span-3 sticky top-24 h-fit">
          <ul className="space-y-6">
            {sections.map((s) => (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => scrollTo(s.key)}
                  className={`font-label-caps text-label-caps block text-left transition-colors ${
                    active === s.key ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="lg:col-span-9 space-y-section-gap">
          {/* Store info */}
          <section id="settings-store" className="scroll-mt-24">
            <div className="mb-stack-lg border-b border-outline-variant pb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Thông Tin Cửa Hàng</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Tên cửa hàng</label>
                <input className={inputClass} type="text" value={store.name} onChange={(e) => setStore({ ...store, name: e.target.value })} />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Email hỗ trợ</label>
                <input className={inputClass} type="email" value={store.email} onChange={(e) => setStore({ ...store, email: e.target.value })} />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Số điện thoại</label>
                <input className={inputClass} type="tel" value={store.phone} onChange={(e) => setStore({ ...store, phone: e.target.value })} />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Khu vực</label>
                <select className={`${inputClass} appearance-none`} value={store.region} onChange={(e) => setStore({ ...store, region: e.target.value })}>
                  <option>Việt Nam (TP. Hồ Chí Minh)</option>
                  <option>Việt Nam (Hà Nội)</option>
                  <option>Pháp (Paris)</option>
                  <option>Nhật Bản (Tokyo)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Branding */}
          <section id="settings-branding" className="scroll-mt-24">
            <div className="mb-stack-lg border-b border-outline-variant pb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Thương Hiệu</h3>
            </div>
            <div className="space-y-10">
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-4">Logo chính thức</label>
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
                    <span className="font-display-lg text-display-lg-mobile text-primary">A</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button type="button" className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 hover:opacity-80 transition-opacity">
                      Tải lên mới
                    </button>
                    <button type="button" className="border border-outline font-label-caps text-label-caps px-6 py-2.5 hover:bg-surface-variant transition-colors">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-4">Màu thương hiệu</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {brandColors.map((color) => (
                    <div key={color.name} className="space-y-2">
                      <div className="w-full h-12 border border-outline-variant" style={{ backgroundColor: color.hex }} />
                      <span className="font-body-sm text-xs block">{color.name} {color.hex}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-center border border-dashed border-outline-variant h-12 cursor-pointer hover:bg-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-secondary">add</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section id="settings-security" className="scroll-mt-24">
            <div className="mb-stack-lg border-b border-outline-variant pb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Bảo Mật</h3>
            </div>
            <div className="max-w-md space-y-6">
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Mật khẩu hiện tại</label>
                <input className={inputClass} type="password" placeholder="Nhập mật khẩu hiện tại" value={password.current} onChange={(e) => setPassword({ ...password, current: e.target.value })} />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Mật khẩu mới</label>
                <input className={inputClass} type="password" placeholder="Nhập mật khẩu mới" value={password.next} onChange={(e) => setPassword({ ...password, next: e.target.value })} />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-1">Xác nhận mật khẩu mới</label>
                <input className={inputClass} type="password" placeholder="Xác nhận mật khẩu mới" value={password.confirm} onChange={(e) => setPassword({ ...password, confirm: e.target.value })} />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end items-center gap-4 pt-12 border-t border-outline-variant">
            {saved ? <span className="font-label-caps text-label-caps text-green-600">Đã lưu thay đổi</span> : null}
            <button type="button" className="font-label-caps text-label-caps text-secondary px-6 py-3 hover:text-primary transition-colors">
              Hủy thay đổi
            </button>
            <button type="submit" className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-3 hover:opacity-90 active:scale-95 transition-all">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
