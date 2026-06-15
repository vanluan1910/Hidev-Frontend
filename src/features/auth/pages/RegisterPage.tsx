import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthFooter } from '../components/AuthFooter'
import { AuthHeader } from '../components/AuthHeader'
import { SocialButtons } from '../components/SocialButtons'
import { emailExists, registerAccount } from '../data/accounts'

const sideImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAfYoP8pltHO0mYrU09xR-Iv6xY_FzF5gfx4nPbt68absGeSuJQt9nNuI61lpiRXcpCZoZbAtgZVuFho2EauL-Uw31GPxxuO0SWkKgZG0Qs1r38me8wKIioirTAJpPkpsFZf6zm-redKXO6uKAZGNB7fm_BflQc2fgvCY9H3N_CCkS1DrncoAsvKX7U7qHhGHq-l6CGvK8Hb4j_g0paf1Ra7vEHvnsgDKM4Cb5U1595JrEUcpuOWfHR3mPaQW_aEJ9yxEAaPBVWgE9z'

interface RegisterForm {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  terms: boolean
}

const emptyForm: RegisterForm = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: false,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function RegisterPage() {
  const [form, setForm] = useState<RegisterForm>(emptyForm)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  function update(patch: Partial<RegisterForm>) {
    setForm((prev) => ({ ...prev, ...patch }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim()) return setError('Vui lòng nhập họ và tên.')
    if (!EMAIL_RE.test(form.email.trim())) return setError('Email không hợp lệ.')
    if (!form.password) return setError('Vui lòng nhập mật khẩu.')
    if (form.password.length < 6) return setError('Mật khẩu phải có ít nhất 6 ký tự.')
    if (form.password !== form.confirmPassword) return setError('Mật khẩu xác nhận không khớp.')
    if (!form.terms) return setError('Vui lòng đồng ý với điều khoản dịch vụ.')
    if (emailExists(form.email)) return setError('Email này đã được đăng ký.')

    registerAccount(form.name, form.email, form.password)
    setError('')
    setSuccess(true)
    setTimeout(() => navigate('/login'), 1500)
  }

  return (
    <div className="storefront font-body-md text-on-background overflow-x-hidden bg-surface flex flex-col min-h-screen">
      <AuthHeader />

      <main className="flex-grow flex items-stretch">
        {/* Image Side */}
        <div className="hidden lg:block w-1/2 relative bg-surface-dim overflow-hidden">
          <img
            alt="Chất liệu lụa cao cấp"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] brightness-95"
            src={sideImage}
          />
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute bottom-12 left-12 max-w-sm">
            <h2 className="font-display-lg text-display-lg text-white mb-4">Sự Tinh Tế Trong Từng Sợi Chỉ</h2>
            <p className="font-body-lg text-white/80">
              Khám phá bộ sưu tập lụa thủ công tinh xảo nhất dành riêng cho bạn.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-surface px-container-padding py-section-gap">
          <div className="w-full max-w-md space-y-stack-lg">
            <div className="space-y-stack-sm text-center lg:text-left">
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary">
                Tham Gia Cộng Đồng Aura de Soie
              </h1>
              <p className="font-body-md text-secondary">
                Trải nghiệm thế giới lụa cao cấp và nhận những ưu đãi đặc biệt.
              </p>
            </div>

            <form className="space-y-stack-lg" onSubmit={handleSubmit}>
              <div className="space-y-stack-md">
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-secondary block mb-1" htmlFor="name">
                    Họ và tên
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={(e) => update({ name: e.target.value })}
                    className="form-input w-full py-2 font-body-md text-primary"
                  />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-secondary block mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="aura@desoie.com"
                    value={form.email}
                    onChange={(e) => update({ email: e.target.value })}
                    className="form-input w-full py-2 font-body-md text-primary"
                  />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-secondary block mb-1" htmlFor="phone">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="090 123 4567"
                    value={form.phone}
                    onChange={(e) => update({ phone: e.target.value })}
                    className="form-input w-full py-2 font-body-md text-primary"
                  />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-secondary block mb-1" htmlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => update({ password: e.target.value })}
                    className="form-input w-full py-2 font-body-md text-primary"
                  />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-secondary block mb-1" htmlFor="confirm-password">
                    Xác nhận mật khẩu
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={(e) => update({ confirmPassword: e.target.value })}
                    className="form-input w-full py-2 font-body-md text-primary"
                  />
                </div>
              </div>

              <div className="flex items-start gap-stack-sm">
                <input
                  id="terms"
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => update({ terms: e.target.checked })}
                  className="mt-1 w-4 h-4 border-outline rounded-none text-primary focus:ring-0"
                />
                <label className="font-body-sm text-secondary" htmlFor="terms">
                  Tôi đồng ý với các{' '}
                  <a className="text-primary underline hover:opacity-80 transition-opacity" href="#">
                    điều khoản dịch vụ
                  </a>{' '}
                  và chính sách bảo mật của Aura de Soie.
                </label>
              </div>

              {error ? (
                <p className="font-body-sm text-body-sm text-error" role="alert">
                  {error}
                </p>
              ) : null}
              {success ? (
                <p className="font-body-sm text-body-sm text-primary" role="status">
                  Tạo tài khoản thành công! Đang chuyển đến trang đăng nhập...
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps hover:opacity-90 active:scale-[0.98] transition-all duration-200 tracking-[0.2em]"
              >
                TẠO TÀI KHOẢN
              </button>
            </form>

            <div className="relative py-4 flex items-center gap-gutter">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="font-label-caps text-label-caps text-tertiary-fixed-dim">HOẶC TIẾP TỤC VỚI</span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <SocialButtons />

            <p className="text-center font-body-sm text-secondary">
              Bạn đã là thành viên?{' '}
              <Link className="text-primary font-medium hover:underline transition-all" to="/login">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  )
}
