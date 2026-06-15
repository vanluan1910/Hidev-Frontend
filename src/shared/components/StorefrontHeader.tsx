import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../features/cart/hooks/useCart'
import { useAuth } from '../../features/auth/hooks/useAuth'

export type StorefrontNav = 'home' | 'shop' | 'collections' | 'about'

const links: Array<{ key: StorefrontNav; label: string; to: string }> = [
  { key: 'home', label: 'Trang chủ', to: '/' },
  { key: 'shop', label: 'Cửa hàng', to: '/shop' },
  { key: 'collections', label: 'Bộ sưu tập', to: '/collections' },
  { key: 'about', label: 'Về chúng tôi', to: '/about' },
]

export function StorefrontHeader({ active }: { active: StorefrontNav }) {
  const navRef = useRef<HTMLElement | null>(null)
  const profileRef = useRef<HTMLDivElement | null>(null)
  const { itemCount } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [profileOpen, setProfileOpen] = useState(false)

  function handleLogout() {
    setProfileOpen(false)
    logout()
    navigate('/')
  }

  // Close the profile dropdown when clicking outside of it.
  useEffect(() => {
    if (!profileOpen) return
    function onClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [profileOpen])

  useEffect(() => {
    const node = navRef.current
    if (!node) return

    const onScroll = () => {
      if (window.scrollY > 20) {
        node.classList.add('shadow-sm')
        node.style.backgroundColor = 'rgba(249, 249, 255, 0.98)'
        node.style.backdropFilter = 'blur(8px)'
      } else {
        node.classList.remove('shadow-sm')
        node.style.backgroundColor = '#f9f9ff'
        node.style.backdropFilter = 'none'
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} className="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
      <div className="flex justify-between items-center px-container-padding h-20 max-w-7xl mx-auto">
        <div className="flex-1">
          <Link className="font-display-lg text-display-lg tracking-tighter text-primary" to="/">
            AURA DE SOIE
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-stack-lg">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className={
                active === link.key
                  ? 'nav-item font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1'
                  : 'nav-item font-label-caps text-label-caps text-secondary hover:text-primary transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end items-center gap-stack-md">
          <button type="button" className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity" aria-label="Tìm kiếm">
            search
          </button>
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen((open) => !open)}
                className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity flex items-center"
                aria-label="Tài khoản"
                aria-expanded={profileOpen}
              >
                person
              </button>
              {profileOpen ? (
                <div className="absolute right-0 mt-stack-sm w-56 bg-surface border border-outline-variant shadow-sm py-stack-sm z-50">
                  <div className="px-stack-md py-stack-sm border-b border-outline-variant">
                    <p className="font-label-caps text-label-caps text-secondary uppercase">Xin chào</p>
                    <p className="font-body-md text-body-md text-primary truncate">{user.name}</p>
                    <p className="font-body-sm text-body-sm text-secondary truncate">{user.email}</p>
                  </div>
                  <Link
                    to="/account"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-stack-sm px-stack-md py-stack-sm font-body-md text-body-md text-primary hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">account_circle</span>
                    Tài khoản của tôi
                  </Link>
                  {user.role === 'admin' ? (
                    <Link
                      to="/admin"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-stack-sm px-stack-md py-stack-sm font-body-md text-body-md text-primary hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">dashboard</span>
                      Quản trị
                    </Link>
                  ) : null}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-stack-sm px-stack-md py-stack-sm font-body-md text-body-md text-primary hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Đăng xuất
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <Link to="/login" className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity flex items-center" aria-label="Tài khoản">
              person
            </Link>
          )}
          <Link to="/cart" className="relative flex items-center text-primary hover:opacity-80 transition-opacity" aria-label="Giỏ hàng">
            <span className="material-symbols-outlined">shopping_bag</span>
            {itemCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </nav>
  )
}
