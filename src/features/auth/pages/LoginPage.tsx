import { useRef, useState } from 'react'
import type { FormEvent, MouseEvent } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { AuthFooter } from '../components/AuthFooter'
import { AuthHeader } from '../components/AuthHeader'
import { SocialButtons } from '../components/SocialButtons'
import { authenticate } from '../data/accounts'
import { useAuth } from '../hooks/useAuth'

const editorialImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC7jKu9atVAPgwyEHsvEzenYFWIps1-rTH-JMzlUs0QLbA52zQ2u1oT8N1qOiukMaxY-qy_ulEGD4qrTtmhzoOt6OeHbGKv53St8dfLQ-2TMgGBpeUgZnEGRgsSfj9YJUgQM30IHzcWDT0XmiNRplDczWeN3NP0ol5jXphu_nQftIEIy070tIbArQvW7CVTMUsr43Fr71hQCxlHoPs8mdu7NDuIhpm40A0YVlgbnyPdZUgfsgtZuWKohRkVfgS2F596LTxbbXQD5aNz'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const visualRef = useRef<HTMLElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const redirectTo = (location.state as { from?: string } | null)?.from ?? '/'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const account = authenticate(email, password)
    if (!account) {
      setError('Email hoặc mật khẩu không đúng.')
      return
    }
    setError('')
    login({ email: account.email, name: account.name, role: account.role })
    navigate(redirectTo, { replace: true })
  }

  function handleParallax(event: MouseEvent<HTMLElement>) {
    const node = visualRef.current
    const img = imageRef.current
    if (!node || !img) return
    const { width, height } = node.getBoundingClientRect()
    const moveX = (event.clientX - width / 4) / 50
    const moveY = (event.clientY - height / 2) / 50
    img.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`
  }

  function resetParallax() {
    if (imageRef.current) imageRef.current.style.transform = 'scale(1) translate(0, 0)'
  }

  return (
    <div className="storefront flex flex-col min-h-screen overflow-x-hidden bg-surface text-on-surface font-body-md">
      <AuthHeader />

      <main className="flex-grow flex flex-col md:flex-row w-full">
        {/* Visual Column */}
        <section
          ref={visualRef}
          onMouseMove={handleParallax}
          onMouseLeave={resetParallax}
          className="hidden md:flex md:w-1/2 relative bg-surface-container overflow-hidden group"
        >
          <img
            ref={imageRef}
            alt="Thời trang biên tập cao cấp"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
            src={editorialImage}
          />
          <div className="absolute inset-0 silk-overlay" />
          <div className="absolute bottom-stack-lg left-container-padding max-w-sm">
            <p className="font-headline-sm text-headline-sm text-primary mb-2 italic">Thanh lịch tinh tế.</p>
            <p className="font-body-sm text-body-sm text-secondary">
              Khám phá thế giới nơi nghệ thuật thủ công gặp gỡ sự tối giản đương đại.
            </p>
          </div>
        </section>

        {/* Form Column */}
        <section className="flex-grow flex items-center justify-center bg-surface px-container-padding py-section-gap">
          <div className="w-full max-w-md space-y-stack-lg">
            <div className="text-center md:text-left">
              <h1 className="font-display-lg text-display-lg text-primary mb-stack-sm">Chào Mừng Trở Lại</h1>
              <p className="font-body-md text-body-md text-secondary">
                Nhập thông tin của bạn để truy cập bộ sưu tập riêng tư.
              </p>
            </div>

            <form className="space-y-stack-md" onSubmit={handleSubmit}>
              <div className="relative group">
                <label className="font-label-caps text-label-caps text-secondary block mb-1 uppercase" htmlFor="email">
                  Địa chỉ email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ten@aura.com"
                  className="w-full custom-bottom-border font-body-md py-2"
                />
              </div>

              <div className="relative group">
                <div className="flex justify-between items-center mb-1">
                  <label className="font-label-caps text-label-caps text-secondary block uppercase" htmlFor="password">
                    Mật khẩu
                  </label>
                  <a className="font-label-caps text-label-caps text-primary hover:opacity-80 transition-opacity" href="#">
                    Quên mật khẩu?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full custom-bottom-border font-body-md py-2"
                />
              </div>

              {error ? (
                <p className="font-body-sm text-body-sm text-error" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 duration-200 mt-stack-md"
              >
                Đăng nhập
              </button>
            </form>

            <div className="border border-outline-variant bg-surface-container-low p-stack-md font-body-sm text-body-sm text-secondary">
              <p className="font-label-caps text-label-caps text-primary mb-1 uppercase">Tài khoản dùng thử</p>
              <p>Email: admin@aura.com — Mật khẩu: aura123</p>
              <p>Email: khachhang@aura.com — Mật khẩu: khach123</p>
            </div>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="flex-shrink mx-4 font-label-caps text-label-caps text-secondary">HOẶC TIẾP TỤC VỚI</span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <SocialButtons />

            <div className="text-center">
              <p className="font-body-sm text-body-sm text-secondary">
                Chưa có tài khoản?{' '}
                <Link className="text-primary font-semibold hover:underline" to="/register">
                  Yêu cầu lời mời
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <AuthFooter />
    </div>
  )
}
