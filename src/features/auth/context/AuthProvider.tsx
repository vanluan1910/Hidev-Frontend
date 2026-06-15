import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext, type AuthUser } from './AuthContext'

const STORAGE_KEY = 'aura-user'

function loadUser(): AuthUser | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored) as AuthUser
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(loadUser)

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      } else {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      // Ignore storage errors.
    }
  }, [user])

  const value = useMemo(
    () => ({
      user,
      login: (next: AuthUser) => setUser(next),
      logout: () => setUser(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
